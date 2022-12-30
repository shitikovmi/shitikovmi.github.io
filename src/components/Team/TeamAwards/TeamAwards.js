import React from 'react';
import {useTranslation} from "react-i18next";
import './TeamAwards.scss'
import img01 from "../../../assets/content/team/teamAwards/01.jpg";
import img02 from "../../../assets/content/team/teamAwards/02.jpg";
import TeamEmployerCard from "../TeamEmployerCard/TeamEmployerCard";

const TeamAwards = () => {

    const {t} = useTranslation();

    const awards = [
        {
            name: t('awards.lgt'),
            post: t('awards.lgd'),
            img: img01
        },
        {
            name: t('awards.bt'),
            post: t('awards.bd'),
            img: img02
        },
    ]

    return (
        <div className="team-awards">
            <div className="team-awards__container">
                <div className="team-awards__title title">{t('awards.title')}</div>
                <div className="team-employees__box">
                    {
                        awards.map(({name, post, img}, i) => (
                            <TeamEmployerCard
                                name={name}
                                post={post}
                                img={img}
                                key={i}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TeamAwards;