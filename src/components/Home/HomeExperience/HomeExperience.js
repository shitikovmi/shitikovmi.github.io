import './HomeExperience.scss'
import {useTranslation} from "react-i18next";

const HomeExperience = () => {

    const {t} = useTranslation();

    return (
        <section className="home-experience">
            <div  className="container home-experience__container">
                <a href="#HomeContactForm" className="button-primary home-experience__button">
                    {t('homeExp.btn')}
                </a>
            </div>
        </section>
    );
};

export default HomeExperience;