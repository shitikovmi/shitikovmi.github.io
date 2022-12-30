import "./YoutubeLink.scss"

import youtubeIconMobile from "../../../assets/icons/youtubeLink/youtube-icon-black.svg"
import playIcon from "../../../assets/icons/youtubeLink/play-icon.svg"
import youtubeIconPc from "../../../assets/icons/youtubeLink/youtube-icon-white.svg"

import defaultBackgroundPcImg from "../../../assets/content/shared/youtubeLink/01-pc.jpg"
import defaultBackgroundMobileImg from "../../../assets/content/shared/youtubeLink/01-mobile.jpg"
import {useTranslation} from "react-i18next";

const YoutubeLink = ({projectName, backgroundMobile, backgroundPc, link}) => {

    const {t} = useTranslation();
    const linkHref = link ? link : 'https://youtube.com/c/BatumiInvestment';
    const title = projectName ? projectName : t('youtube.text');
    const backgroundPcImg = backgroundPc ? backgroundPc: defaultBackgroundPcImg;
    const backgroundMobileImg = backgroundMobile ? backgroundMobile: defaultBackgroundMobileImg;

    return (
        <section className="youtube">
            <div className="youtube__pc youtube-pc"
                 style={{
                    backgroundImage: `url(${backgroundPcImg})`
                 }}>
                <div className="container youtube-pc__container">
                    <div className="youtube-pc__info youtube-pc-info">
                        <a href={linkHref}
                           className="text-small youtube-info__link">
                            <img src={youtubeIconPc}
                                 alt="Youtube Icon"
                                 style={{
                                     width: '35px',
                                     height: 'auto'
                                 }}/>
                            {title}
                        </a>
                    </div>
                    <div className="youtube-pc__link youtube-pc-link">
                        <a href={linkHref}
                           className="youtube-pc-link__button">
                            <img src={playIcon} alt="Play Icon"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="youtube__mobile youtube-mobile">
                <div className="youtube-mobile__info youtube-mobile-info">
                    <div className="container youtube-mobile-info__container">
                        <a href={linkHref}
                           className="text-small youtube-info__link">
                            <img src={youtubeIconMobile}
                                 alt="Youtube Icon"
                                 style={{
                                     width: '35px',
                                     height: 'auto'
                                 }}/>
                            {t('youtube.text')}
                        </a>
                    </div>
                </div>
                <div className="youtube-mobile__link youtube-mobile-link"
                     style={{
                         backgroundImage: `url(${backgroundMobileImg})`
                     }}>
                    <a href={linkHref}
                       className="youtube-mobile-link__button">
                        <img src={playIcon} alt="Play Icon"/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default YoutubeLink;