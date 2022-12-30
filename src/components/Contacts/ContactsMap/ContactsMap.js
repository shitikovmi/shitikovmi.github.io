import "./ContactsMap.scss"

import phoneIcon from "../../../assets/icons/shared/phone.svg"
import whatsappIcon from "../../../assets/icons/shared/whatsapp.svg"
import instagramIcon from "../../../assets/icons/shared/instagram.svg"
import mailIcon from "../../../assets/icons/shared/mail.svg"
import youtubeIcon from "../../../assets/icons/shared/youtube.svg"
import locationIcon from "../../../assets/icons/shared/location.svg"
import facebookIcon from "../../../assets/icons/shared/facebook.svg"
import telegramIcon from "../../../assets/icons/shared/telegram.svg"
import {useTranslation} from "react-i18next";

const ContactsMap = () => {

    const {t} = useTranslation();

    return (
        <section className="contacts-map">
            <div className="container contacts-map__container">
                <div className="title contacts-map__title">
                    {t('contacts.title')}
                </div>
                <div className="text-big contacts-map__subtitle">
                    {t('contacts.subtitle')}
                </div>
                <div className="contacts-map__box">
                    <div className="contacts-map__map">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23853.40355780209!2d41.60160885416666!3d41.64114626435535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406787a8ab017b35%3A0x25e6337dfe59f7c5!2sBatumi%20Investment!5e0!3m2!1sru!2sua!4v1666986837181!5m2!1sru!2sua"
                                width="600"
                                height="450"
                                style={{border:0}}
                                allowFullScreen>
                        </iframe>
                    </div>
                    <div className="contacts-map__info contacts-map-info">
                        <a href="https://www.google.com/maps?q=Batumi,+Zhiuli+Shartava,+10&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjzzLOkm437AhVugP0HHb2lBQEQ_AUoAXoECAIQAw" className="text-small contacts-map-info__link">
                            <img src={locationIcon} alt="Icon"/>
                            {t('header.street')}
                        </a>
                        <a href="tel:+995577752526" style={{
                            fontFamily: 'sans-serif',
                            fontWeight: '300'
                        }} className="text-small contacts-map-info__link">
                            <img src={phoneIcon} alt="Icon"/>
                            +995 577 75 25 26
                        </a>
                        <a href="mailto:Ltd.batumiinvestment@gmail.com" className="text-small contacts-map-info__link">
                            <img src={mailIcon} alt="Icon"/>
                            Ltd.batumiinvestment@gmail.com
                        </a>
                        <div className="contacts-map-info__social contacts-map-info-social">
                            <a href="https://wa.me/995577752526" className="contacts-map-info-social__link">
                                <img src={whatsappIcon} alt="Icon"/>
                            </a>
                            <a href="https://www.instagram.com/batumiinvestment/" className="contacts-map-info-social__link">
                                <img src={instagramIcon} alt="Icon"/>
                            </a>
                            <a href="https://youtube.com/c/BatumiInvestment" className="contacts-map-info-social__link">
                                <img src={youtubeIcon} alt="Icon"/>
                            </a>
                            <a href="https://www.facebook.com/VillasBatumi" className="contacts-map-info-social__link">
                                <img src={facebookIcon} alt="Icon"/>
                            </a>
                            <a href="https://t.me/+PNr4Lyl5e41jZjQy" className="contacts-map-info-social__link">
                                <img src={telegramIcon} alt="Icon"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactsMap;