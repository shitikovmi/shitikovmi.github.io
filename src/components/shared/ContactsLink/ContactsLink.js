import arrow from "../../../assets/icons/shared/arrow-right.svg"

import {Link} from "react-router-dom";
import {useState} from "react";

import "./ContactsLink.scss"
import "../../../scss/global.scss"
import {ContactForm} from "../index";
import {useTranslation, Trans} from "react-i18next";

const ContactsLink = () => {

    const [formOpen, setFormOpen] = useState(false);

    const {t} = useTranslation();

    const contactsLinkButton = (window.screen.width <= 425) ?
        <div className="button-primary contacts-link__button"
             onClick={() => setFormOpen(true)}>
            {t('contactsLink.btn')}
            <img src={arrow} alt="Arrow"/>
        </div> :
        <Link className="button-primary contacts-link__button" to="/contacts">
            {t('contactsLink.btn')}
            <img src={arrow} alt="Arrow"/>
        </Link>;

    const contactsLinkForm = formOpen ? <ContactForm
                                            buttonClassName="button-primary"
                                            handler={() => {}}/> : null;

    return (
        <section className="contacts-link">
            <div className="container contacts-link__container">
                <h3 className="subtitle contacts-link__subtitle">
                    {t('contactsLink.subtitle')}
                </h3>
                <h2 className="title contacts-link__title">
                    <Trans i18nKey="contactsLink.title">
                        Let’s build <br/> your perfect place
                    </Trans>
                </h2>
                {!formOpen ? contactsLinkButton : null}
                {contactsLinkForm}
            </div>
        </section>
    )
}

export default ContactsLink;