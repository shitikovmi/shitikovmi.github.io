import './HomeAdvantages.scss'
import bgMobile from './../../../assets/content/projects/botanical-garden-resort/youtubeLink/01-mobile.jpg'
import bgPc from './../../../assets/content/projects/botanical-garden-resort/youtubeLink/01-pc.jpg'
import {Background} from "../../shared";
import {useTranslation} from "react-i18next";

const HomeAdvantages = () => {

    const bg = (window.screen.width <= 600) ? bgMobile : bgPc;

    const {t} = useTranslation();

    return (
        <section className="home-advantages">
           <div className="container home-advantages__container">
               <h3 className="subtitle home-advantages__subtitle">
                   {t('homeAdvantages.subtitle')}
               </h3>
               <h2 className="title home-advantages__title">
                   {t('homeAdvantages.title')}
               </h2>
               <div className="home-advantages__box">
                    <div className="home-advantages__item home-advantages-item">
                        <div className="home-advantages-item-number">
                            <div className="home-advantages-item-number__text">
                                01
                            </div>
                        </div>
                        <div className="home-advantages-item__description">
                            {t('homeAdvantages.item01')}
                        </div>
                    </div>
                   <div className="home-advantages__item home-advantages-item">
                       <div className="home-advantages-item-number">
                           <div className="home-advantages-item-number__text">
                               02
                           </div>
                       </div>
                       <div className="home-advantages-item__description">
                           {t('homeAdvantages.item02')}
                       </div>
                   </div>
                   <div className="home-advantages__item home-advantages-item">
                       <div className="home-advantages-item-number">
                           <div className="home-advantages-item-number__text">
                               03
                           </div>
                       </div>
                       <div className="home-advantages-item__description">
                           {t('homeAdvantages.item03')}
                       </div >
                   </div>
               </div>
           </div>
            <Background img={bg}/>
        </section>
    );
};

export default HomeAdvantages;