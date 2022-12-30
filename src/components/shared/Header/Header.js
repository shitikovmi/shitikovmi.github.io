import {useState} from "react";
import {NavLink, Link} from "react-router-dom";

import logo from "../../../assets/logo/logo-dark.svg"
import locationIcon from "../../../assets/icons/shared/location.svg"
import mailIcon from "../../../assets/icons/shared/mail.svg"
import phoneIcon from "../../../assets/icons/shared/phone.svg"
import facebookIcon from "../../../assets/icons/shared/facebook.svg"
import whatsappIcon from "../../../assets/icons/shared/whatsapp.svg"
import instagramIcon from "../../../assets/icons/shared/instagram.svg"
import youtubeIcon from "../../../assets/icons/shared/youtube.svg"
import telegramIcon from "../../../assets/icons/shared/telegram.svg"
import arrow from "../../../assets/icons/shared/arrow-top.svg"

import {useTranslation} from "react-i18next";

import "./Header.scss"

const headerNavLinkClassName = ({isActive}) => (
    isActive ? 'header__nav-link-active header__nav-link' : 'header__nav-link'
);

const headerButtonClassName = (menuOpen) => (
    menuOpen ? "header__button header__button-active" : "header__button"
)

const headerNavClassName = (menuOpen) => (
    menuOpen ? "header__links header__links-active" : "header__links"
)

const headerDropdownArrowClassName = (dropdownOpen) => (
    dropdownOpen ? "header__dropdown-button header__dropdown-button-active"
                 : "header__dropdown-button"
)

const headerDropdownContentClassName = (dropdownOpen) => (
    dropdownOpen ? "dropdown__content dropdown__content-active"
        : "dropdown__content"
)

const lngs = {
    en: { nativeName: 'Eng' },
    ru: { nativeName: 'Ru' }
};

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const { t, i18n } = useTranslation();

    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="Logotype"/>
                    </Link>
                </div>
                <div className={headerButtonClassName(menuOpen)}
                     onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={headerNavClassName(menuOpen)}>
                    <div className="header__nav-link header__dropdown"
                         onClick={() => setDropdownOpen(!dropdownOpen)}>
                        {t('header.projects')}
                        <img className={headerDropdownArrowClassName(dropdownOpen)}
                             src={arrow}
                             alt="Arrow"/>
                        <div className={headerDropdownContentClassName(dropdownOpen)}>
                            <NavLink to="/projects/lemon-garden-residence-&-SPA" className="dropdown__link header__nav-link">
                                Lemon Garden Residence & SPA
                            </NavLink>
                            <NavLink to="/projects/batumi-garden-inn" className="dropdown__link header__nav-link">
                                Batumi Garden Inn
                            </NavLink>
                            <NavLink to="/projects/royal-residence-botanico" className="dropdown__link header__nav-link">
                                Royal Residence Botanico
                            </NavLink>
                            <NavLink to="/projects/luxury-villas" className="dropdown__link header__nav-link">
                                Luxury Villas
                            </NavLink>
                        </div>
                    </div>
                    <NavLink className={headerNavLinkClassName}
                             to="/our-team">
                        {t('header.team')}
                    </NavLink>
                    <NavLink className={headerNavLinkClassName}
                             to="/useful-information/10-reasons-to-invest-in-georgia:-in-real-estate" >
                        {t('header.info')}
                    </NavLink>
                    <NavLink className={headerNavLinkClassName}
                             to="/contacts">
                        {t('header.contacts')}
                    </NavLink>
                    <div className="lang-box">
                        {Object.keys(lngs).map((lng) => (
                            <button className="button-lang" key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal', color: 'black'}} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                                {lngs[lng].nativeName}
                            </button>
                        ))}
                    </div>
                    <a href="https://www.google.com/maps?sxsrf=ALiCzsb1i4GynMSPQrW4-ntyGU2oVVkNvQ:1667253894751&uact=5&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCMQsAIQJ0oECEEYAEoECEYYAFAAWABg9QZoAHABeACAAXmIAXmSAQMwLjGYAQCgAQKgAQHAAQE&q=Batumi,+Zhiuli+Shartava,+10&um=1&ie=UTF-8&sa=X&ved=2ahUKEwj22sjxvIv7AhVWnf0HHfsrAM4Q_AUoAXoECAEQAw" className="header__link">
                        <img src={locationIcon} alt="Icon"/>
                        {t('header.street')}
                    </a>
                    <a href="tel:+995577752526" className="header__link">
                        <img src={phoneIcon} alt="Icon"/>
                        +995 577 75 25 26
                    </a>
                    <a href="mailto:Ltd.batumiinvestment@gmail.com" className="header__link">
                        <img src={mailIcon} alt="Icon"/>
                        Ltd.batumiinvestment@gmail.com
                    </a>
                    <div className="header__row">
                        <a href="https://wa.me/995577752526">
                            <img src={whatsappIcon} alt="Icon"/>
                        </a>
                        <a href="https://www.instagram.com/batumiinvestment/">
                            <img src={instagramIcon} alt="Icon"/>
                        </a>
                        <a href="https://youtube.com/c/BatumiInvestment">
                            <img src={youtubeIcon} alt="Icon"/>
                        </a>
                        <a href="https://www.facebook.com/VillasBatumi">
                            <img src={facebookIcon} alt="Icon"/>
                        </a>
                        <a href="https://t.me/+PNr4Lyl5e41jZjQy">
                            <img src={telegramIcon} alt="Icon"/>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;