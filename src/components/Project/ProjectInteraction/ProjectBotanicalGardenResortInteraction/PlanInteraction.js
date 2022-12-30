import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import firebase from "../../../../firebase";
import {get, getDatabase, ref} from "firebase/database";
import $ from "jquery";
import "imagemapster";

import {Link} from "react-router-dom";

import arrowRight from "../../../../assets/icons/shared/arrow-right.svg"
import defaultImg from '../../../../assets/content/projects/botanical-garden-resort/projectInteraction/floors/1.svg'


const PlanInteraction = ({apartmentsFloorCounter}) => {

    const {t} = useTranslation();

    const [areas, setAreas] = useState([]);
    const [areaName, setAreaName] = useState('');
    const [floorImg, setFloorImg] = useState('');

    useEffect(() => {
        import(`../../../../assets/content/projects/botanical-garden-resort/projectInteraction/floors/${apartmentsFloorCounter}.svg`)
            .then(imgModule => setFloorImg(imgModule.default));
    }, [apartmentsFloorCounter]);

    useEffect(() => {
        const db = getDatabase(firebase);
        const path = 'interactionAreas/floor-' + apartmentsFloorCounter;
        const dataRef = ref(db, path);
        get(dataRef).then(snapshot => {
            if (snapshot.exists()) {
                setAreas(Object.values(snapshot.val()));
            }
        })
    }, [apartmentsFloorCounter]);

    useEffect(() => {
        $('.plan-interaction__img').mapster({
            fillColor: 'F2C231'
        });
        $('*[data-attr="soldOut"]').mapster(
            'set',
            true,
            {
                fillColor: 'B92222'
            });
        $('*[data-attr="reserved"]').mapster(
            'set',
            true,
            {
                fillColor: 'E77206'
            });
    });

    return (
        <div className="project-botanical-garden-resort-interaction__container">
            <p className="text-small" style={{textAlign: 'center'}}>
                Floor: {apartmentsFloorCounter} <br/>
                {
                    areaName ? `Type: ${areaName}` : null
                }
            </p>
            <img src={floorImg ? floorImg : defaultImg} className='plan-interaction__img' alt="" useMap="#floor-1"/>
            <map name="floor-1">
                {
                    areas.map(({coords, attr, name}, i) => (
                        <area
                            key={i}
                            shape="poly"
                            data-attr={attr}
                            data-name={name}
                            coords={coords}
                            href=""
                            onClick={(e) => {
                                setAreaName(e.target.getAttribute('data-name'));
                            }}
                            alt=""/>
                    ))
                }
            </map>
            {
                areaName ?
                    <Link
                        style={{
                            color: "inherit",
                            display: 'flex',
                            gap: '10px'
                            }
                        }
                        to={`/contacts?type=${areaName.toLowerCase()}`}
                        className="button-primary"
                    >
                    {t('contactsLink.btn')}
                    <img src={arrowRight} alt=""/>
                </Link> : null
            }
        </div>
    );
};

export default PlanInteraction;