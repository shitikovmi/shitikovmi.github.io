import bgPc from "../../../assets/content/home/homeIntroduction/01-pc.jpg";
import bgMobile from "../../../assets/content/home/homeIntroduction/01-mobile.jpg";
import arrowRight from "../../../assets/icons/shared/arrow-right.svg";
import { useTranslation, Trans } from 'react-i18next';

import "./HomeIntroduction.scss"

const HomeIntroduction = () => {

    const bg = (window.screen.width <= 1200) ? bgMobile : bgPc;

    const { t } = useTranslation();

    return (
        <section className="home-introduction">
            <img src={bg}
                 alt="Background"
                 className="home-introduction__bg"
                 style={{
                     width: '100%',
                     height: 'auto'
                 }}/>
            <div className="container home-introduction__container">
                <div className="home-introduction__box">
                    <h2 className="title home-introduction__title">
                        <Trans i18nKey="homeIntroduction.title">
                        </Trans>
                    </h2>
                        <p className="text-big home-introduction__text">
                            <Trans i18nKey="homeIntroduction.text">
                            </Trans>
                        </p>
                    <a href="#HomeContactForm" className="button-primary home-introduction__button">
                        {t('homeIntroduction.btn')}
                        <img src={arrowRight} alt="Arrow right"/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HomeIntroduction;