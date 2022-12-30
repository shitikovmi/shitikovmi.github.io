import arrowRight from "../../../assets/icons/shared/arrow-right.svg"

import {Link} from "react-router-dom";
import './ProjectInfo.scss'
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {get, getDatabase, ref} from "firebase/database";

const ProjectInfo = ({data}) => {

    const {imgPc,
        name,
        address,
        completedOn,
        paymentOptions,
        downPayment,
        progressImg,
        phone} = data;

    const [tooltipText, setTooltipText] = useState('');

    useEffect(() => {
        const db = getDatabase();
        const dataRef = ref(db, 'projectsTooltip/' + name);
        get(dataRef).then(snapshot => {
            if (snapshot.exists()) {
                setTooltipText(snapshot.val());
                console.log(snapshot.val())
            }
        })
    }, [])

    const {t} = useTranslation();

    return (
        <section className="project-info">
            <div className="container project-info__container">
                <h2 className="title project-info__title">
                    {name}
                </h2>
                <div className="project-info__box">
                    <div className="project-info__details project-info-details">
                        <h2 className="title-small project-info-details__title">
                            {t('projects.pd')}
                        </h2>
                        <div className="project-info-details__box">
                            {
                                address ?  <p className="project-info-details__text">
                                    {t('projects.a')} <span>{address}</span>
                                </p> :  <p className="project-info-details__text">
                                    {t('projects.p')} <span style={{
                                        fontFamily: 'sans-serif',
                                        fontWeight: '300'
                                }}>{phone}</span>
                                </p>
                            }
                            <p className="project-info-details__text">
                                {t('projects.co')} <span>{completedOn}</span>
                            </p>
                            <p className="project-info-details__text">
                                {t('projects.potext')} <span>{paymentOptions}</span>
                            </p>
                            <p className="project-info-details__text">
                                {t('projects.dp')} <span>{downPayment}</span>
                            </p>
                        </div>
                        <div className="project-info-details__progress">
                            {t('projects.progress')}
                            <div className="tooltip">
                                <img src={progressImg}
                                     alt="Progress"/>
                                <span className="tooltiptext">
                                    <span>Our progress</span><br/><br/>
                                    {tooltipText}
                                </span>
                            </div>
                        </div>
                        <Link to="/contacts"
                              className="button-primary project-info-details__button">
                            {t('homeExp.btn')}
                            <img src={arrowRight}
                                 alt="Arrow"/>
                        </Link>
                    </div>
                    <img src={imgPc}
                         alt="Project"
                         className="project-info__img"/>
                </div>
            </div>
        </section>
    );
};

export default ProjectInfo;