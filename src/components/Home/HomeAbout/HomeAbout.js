import './HomeAbout.scss'

import imgPC from '../../../assets/content/home/homeAbout/01-pc.png';
import imgMobile from '../../../assets/content/home/homeAbout/01-mobile.png';
import {Link} from "react-router-dom";

import arrowRight from '../../../assets/icons/shared/arrow-right.svg'
import {useTranslation} from "react-i18next";

const HomeAbout = () => {

    const img = (window.screen.width <= 1000) ? imgMobile : imgPC;

    const {t} = useTranslation();

    return (
        <section className="home-about">
            <div className="container home-about__container">
                <div className="home-about__box">
                    <h3 className="subtitle home-about__subtitle">
                        {t('homeAbout.subtitle')}
                    </h3>
                    <h2 className="title home-about__title">
                        {t('homeAbout.title')}
                    </h2>
                    <p className="text-small home-about__description">
                        {t('homeAbout.text')}
                    </p>
                    <Link to="/our-team" className="home-about__link learn-more-link">
                        {t('homeAbout.lm')}
                        <img src={arrowRight} alt="Arrow Right"/>
                    </Link>
                </div>
                <img  src={img} alt="Office" className="home-about__img"/>
            </div>
        </section>
    );
};

export default HomeAbout;