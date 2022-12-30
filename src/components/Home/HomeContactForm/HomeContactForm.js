import './HomeContactForm.scss'

import {ContactForm} from "../../shared";
import {useTranslation} from "react-i18next";

const HomeContactForm = () => {

    const {t} = useTranslation();

    return (
        <section id="HomeContactForm" className="home-contact-form">
                <div className="home-contact-form__container">
                    <h3 className="subtitle home-contact-form__subtitle">
                        {t('homeForm.subtitle')}
                    </h3>
                    <h2 className="title home-contact-form__title">
                        {t('homeForm.title')}
                    </h2>
                    <div className="text-small home-contact-form__text">
                        {t('homeForm.text')}
                    </div>
                    <ContactForm buttonClassName="button-secondary"
                                 handler={() => {}}/>
                </div>
        </section>
    );
};

export default HomeContactForm;