import "./Footer.scss"

import {Link} from "react-router-dom";

import facebook from "../../../assets/icons/footer/facebook.svg"
import instagram from "../../../assets/icons/footer/instagram.svg"
import location from "../../../assets/icons/footer/location.svg"
import whatsapp from "../../../assets/icons/footer/whatsapp.svg"
import phone from "../../../assets/icons/footer/phone.svg"
import mail from "../../../assets/icons/footer/mail.svg"
import youtube from "../../../assets/icons/footer/youtube.svg"
import telegram from "../../../assets/icons/footer/telegram.svg"

import logo from "../../../assets/logo/logo-white.svg"
import {useTranslation} from "react-i18next";

const Footer = () => {

    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__column">
                    <Link to="/" className="footer__link">
                        <img src={logo} alt="Logotype"/>
                    </Link>
                    <a href="https://www.google.com/maps?sxsrf=ALiCzsb1i4GynMSPQrW4-ntyGU2oVVkNvQ:1667253894751&uact=5&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCMQsAIQJ0oECEEYAEoECEYYAFAAWABg9QZoAHABeACAAXmIAXmSAQMwLjGYAQCgAQKgAQHAAQE&q=Batumi,+Zhiuli+Shartava,+10&um=1&ie=UTF-8&sa=X&ved=2ahUKEwj22sjxvIv7AhVWnf0HHfsrAM4Q_AUoAXoECAEQAw" className="footer__link">
                        <img src={location} alt="Icon"/>
                        {t('header.street')}
                    </a>
                    <a href="tel:+995577752526" className="footer__link footer-phone">
                        <img src={phone} alt="Icon"/>
                        +995 577 75 25 26
                    </a>
                    <a href="mailto:Ltd.batumiinvestment@gmail.com" className="footer__link">
                        <img src={mail} alt="Icon"/>
                        Ltd.batumiinvestment@gmail.com
                    </a>
                </div>
                <div className="footer__column">
                    <a href="https://youtube.com/c/BatumiInvestment" className="footer__link">
                        <img src={youtube} alt="Icon"/>
                        <p className="footer__text">
                            {t('footer.yt')}
                        </p>
                    </a>
                    <a href="https://www.facebook.com/VillasBatumi" className="footer__link">
                        <img src={facebook} alt="Icon"/>
                        <p className="footer__text">
                            {t('footer.fb')}

                        </p>
                    </a>
                    <a href="https://www.instagram.com/batumiinvestment/" className="footer__link">
                        <img src={instagram} alt="Icon"/>
                        <p className="footer__text">
                            {t('footer.inst')}
                        </p>
                    </a>
                    <a href="https://wa.me/995577752526" className="footer__link">
                        <img src={whatsapp} alt="Icon"/>
                        <p className="footer__text">
                            {t('footer.wa')}

                        </p>
                    </a>
                    <a href="https://t.me/+PNr4Lyl5e41jZjQy" className="footer__link">
                        <img src={telegram} alt="Icon"/>
                        <p className="footer__text">
                            {t('footer.tg')}
                        </p>
                    </a>
                </div>
                <div className="footer__column">
                    <h2 className="footer__title">
                        {t('footer.ql')}

                    </h2>
                    <Link to="/" className="footer__link">
                        {t('footer.home')}
                    </Link>
                    <Link to="/our-team" className="footer__link">
                        {t('header.team')}
                    </Link>
                    <Link to="/useful-information/10-reasons-to-invest-in-georgia:-in-real-estate" className="footer__link">
                        {t('header.info')}
                    </Link>
                    <Link to="/contacts" className="footer__link">
                        {t('header.contacts')}
                    </Link>
                </div>
                <div className="footer__column">
                    <h2 className="footer__title">
                        {t('footer.ll')}
                    </h2>
                    <Link to="/privacy-policy" className="footer__link">
                        {t('footer.t')}
                    </Link>
                    <Link to="/privacy-policy" className="footer__link">
                        {t('footer.c')}
                    </Link>
                    <Link to="/privacy-policy" className="footer__link">
                        {t('footer.p')}
                    </Link>
                </div>
                <p className="footer__copyright">Copyright @ 2022 Batumi Investment</p>
            </div>
        </footer>
    )
}

export default Footer;