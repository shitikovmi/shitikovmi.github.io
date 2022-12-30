import {ContactForm} from "../../shared";

import img01Pc from '../../../assets/content/contacts/contactsFeedback/01-pc.png';
import img01Mobile from '../../../assets/content/contacts/contactsFeedback/01-mobile.png';
import {useState} from "react";

import './ContactsFeedback.scss'
import {Trans, useTranslation} from "react-i18next";
import {useEffect} from "react";

const ContactsFeedback = () => {

    const img = (window.screen.width <= 600) ? img01Mobile : img01Pc;

    const {t} = useTranslation();
    const [params, setParams] = useState('');


    useEffect(() => {
        const params = (new URL(document.location)).searchParams;
        const apartmentType = params.get('type');
        setParams(apartmentType);
    }, []);

    return (
        <section className="contacts-feedback">
            <div className="container contacts-feedback__container">
                <div className="contacts-feedback__form">
                    <div className="contacts-feedback__box">
                        <h3 className="subtitle contacts-feedback__subtitle">
                            {t('contactsLink.subtitle')}
                        </h3>
                        <h2 className="title contacts-feedback__title">
                            <Trans i18nKey="contactsLink.title">
                                Let’s build <br/> your perfect place
                            </Trans>
                        </h2>
                        <ContactForm buttonClassName="button-primary"
                                     params={params}/>
                    </div>
                    <img src={img} alt="Office"
                         className="contacts-feedback__img"/>
                </div>
            </div>
        </section>
    );
};

export default ContactsFeedback;