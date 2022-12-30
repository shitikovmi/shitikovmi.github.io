import aboutImg from "../../../assets/content/team/teamAbout/01.png"

import './TeamAbout.scss'
import {useTranslation, Trans} from "react-i18next";

const TeamAbout = () => {

    const {t} = useTranslation();

    return (
        <section className="team-about">
            <div className="container team-about__container">
                <h2 className="title team-about__title"> {t('teamAbout.title')}</h2>
                <div className="team-about__box">
                    <img src={aboutImg} className="team-about__img" alt=""/>
                    <div className="text-small team-about__text">
                        <Trans i18nKey='teamAbout.text'>
                            The Batumi Investment team are highly qualified specialists, behind whom participation in the construction of many well-known objects in Batumi, as well as private investors. All of us united into a single team more than 10 years ago to create truly unique projects that the city is proud of. <br/><br/>
                            We don't know anyone in Batumi who would also carefully consider the infrastructure of facilities and constantly improved projects.<br/><br/>
                            There is not a single long-term plan behind us.<br/><br/>
                            We use European materials in construction, without increasing the cost square meter.<br/><br/>
                            Our main priorities are the quality of work and openness to our clients.<br/><br/>
                        </Trans>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamAbout;