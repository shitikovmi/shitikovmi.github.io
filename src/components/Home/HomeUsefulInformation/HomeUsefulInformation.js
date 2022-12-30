import './HomeUsefulInformation.scss'

import img01Pc from '../../../assets/content/projects/botanical-garden-resort/projectInfo/02-pc.png'
import arrowRight from "../../../assets/icons/shared/arrow-right.svg";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const HomeUsefulInformation = () => {

    const {t} = useTranslation();

    return (
        <section className="home-useful-information">
            <img src={img01Pc} alt="Project" className="home-useful-information__img"/>
            <div className="home-useful-information__text">
                <h3 className="home-useful-information__subtitle">
                    {t('homeInfo.subtitle')}
                </h3>
                <h2 className="title home-useful-information__title">
                    {t('homeInfo.title')}
                </h2>
                <p className="home-useful-information__article-title">
                    {t('homeInfo.textTitle')}
                </p>
                <p className="text-small home-useful-information-article-text">
                    {t('homeInfo.text')}
                </p>
                <Link to="/useful-information/10-reasons-to-invest-in-georgia:-in-real-estate" className="home-useful-information__link learn-more-link">
                    {t('homeInfo.lm')}
                    <img src={arrowRight} alt="Arrow Right"/>
                </Link>
            </div>
        </section>
    );
};

export default HomeUsefulInformation;