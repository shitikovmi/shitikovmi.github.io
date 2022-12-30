import './ProjectLuxuryVillasInteraction.scss'
import {useEffect, useState} from "react";
import villasImg from "../../../../assets/content/projects/luxury-villas/projectInteraction/villas.jpg"

import $ from "jquery";
import "imagemapster";
import planIcon from "../../../../assets/icons/projectInteraction/plan.svg";
import arrowImg from "../../../../assets/icons/shared/arrow-top.svg";
import {useTranslation} from "react-i18next";

const ProjectLuxuryVillasInteraction = () => {

    const [currentPlan, setCurrentPlan] = useState(1);
    const [planImg, setPlanImg] = useState(null);
    const [planPdf, setPlanPdf] = useState(null);

    useEffect(() => {
        $('img[usemap]').mapster({
            fillColor: 'B92222',
        });
        $(`.project-luxury-villas-interaction__area-plan-type-${currentPlan}`).mapster('select');
    }, [currentPlan]);

    const incPlanCounter = () => {
        if (currentPlan === 3) {
            setCurrentPlan(1)
        } else {
            setCurrentPlan(currentPlan + 1);
        }
    }

    const decPlanCounter = () => {
        if (currentPlan === 1) {
            setCurrentPlan(3)
        } else {
            setCurrentPlan(currentPlan - 1);
        }
    }

    useEffect(() => {
        import(`../../../../assets/content/projects/luxury-villas/projectInteraction/type-${currentPlan}.jpg`)
            .then(imgModule => setPlanImg(imgModule.default));
        import(`../../../../assets/download/luxury-villas/plan-${currentPlan}.pdf`)
            .then(pdfModule => setPlanPdf(pdfModule.default));
    }, [currentPlan]);

    const {t} = useTranslation();

    return (
        <section className="project-luxury-villas-interaction">
            <div className="container project-luxury-villas-interaction__container">
                <h2 className="title project-luxury-villas-interaction__title">{t('projects.lvpit')}</h2>
                <div className="project-luxury-villas-interaction__box">
                    <div className="project-luxury-villas-interaction__row">
                        <div className="button-secondary project-luxury-villas-interaction__button-secondary"
                             onClick={() => setCurrentPlan(1)}>
                            {t('projects.type')} 1
                        </div>
                        <div className="button-secondary project-luxury-villas-interaction__button-secondary"
                             onClick={() => setCurrentPlan(2)}>
                            {t('projects.type')} 2
                        </div>
                        <div className="button-secondary project-luxury-villas-interaction__button-secondary"
                             onClick={() => setCurrentPlan(3)}>
                            {t('projects.type')} 3
                        </div>
                    </div>
                    <div className="project-luxury-villas-interaction__row">
                        <div className="project-luxury-villas-interaction__text">{t('projects.download')}</div>
                        <a download={`plan-${currentPlan}`}
                           href={planPdf}
                           className="button-primary project-luxury-villas-interaction__button-primary">
                            <img src={planIcon} alt="Icon"/>
                            construction-plan type {currentPlan}.pdf
                        </a>
                    </div>
                </div>
                <div className="project-luxury-villas-interaction__box" style={{
                    paddingBottom: '20px',
                    paddingTop: '10px'
                }}>
                    <div className="indicator">
                        {t('projects.sold')}:
                        <div className='indicator__sold'></div>
                    </div>
                </div>
                <div className="project-luxury-villas-interaction__box">
                    <map id="map" name="villas">
                        <area className="project-luxury-villas-interaction__area-plan-type-2
                                     project-luxury-villas-interaction__area"
                              shape="poly"
                              onClick={() => setCurrentPlan(2)}
                              coords="173, 250, 141, 175, 143, 117, 181, 93, 238, 94, 263, 234"
                              href="#"
                              alt=""/>
                        <area className="project-luxury-villas-interaction__area-plan-type-2
                                     project-luxury-villas-interaction__area"
                              shape="poly"
                              onClick={() => setCurrentPlan(2)}
                              coords="309,217,391,206,391,126,375,71,325,70,291,90"
                              href="#"
                              alt=""/>
                        <area className="project-luxury-villas-interaction__area-plan-type-3
                                     project-luxury-villas-interaction__area"
                              shape="poly"
                              onClick={() => setCurrentPlan(3)}
                              coords="526,238,541,132,466,120,457,163,453,225"
                              href="#"
                              alt=""/>
                        <area className="project-luxury-villas-interaction__area-plan-type-3
                                     project-luxury-villas-interaction__area"
                              shape="poly"
                              onClick={() => setCurrentPlan(3)}
                              coords="441,425,449,366,458,301,482,290,549,301,549,333,541,411,531,438"
                              href="#"
                              alt=""/>
                        <area className="project-luxury-villas-interaction__area-plan-type-1
                                     project-luxury-villas-interaction__area"
                              shape="poly"
                              onClick={() => setCurrentPlan(1)}
                              coords="298,404,391,391,388,370,389,342,381,310,371,266,312,258,278,273,281,334"
                              href="#"
                              alt=""/>
                        <area className="project-luxury-villas-interaction__area-plan-type-1
                                     project-luxury-villas-interaction__area"
                              shape="poly"
                              onClick={() => setCurrentPlan(1)}
                              coords="237,399,139,416,137,391,113,344,111,322,118,280,158,267,220,274,227,292"
                              href="#"
                              alt=""/>
                    </map>
                    <img className="project-luxury-villas-interaction__villas" src={villasImg} useMap="#villas" alt="Villas"/>
                    <div className="project-luxury-villas-interaction__plan-block">
                        <img
                            className="project-luxury-villas-interaction__arrow-left"
                            src={arrowImg}
                            alt="Arrow"
                            onClick={decPlanCounter}/>
                        <img src={planImg}
                             alt="Plan"
                             className="project-luxury-villas-interaction__plan"
                             loading="lazy"/>
                        <img
                            className="project-luxury-villas-interaction__arrow-right"
                            src={arrowImg}
                            alt="Arrow"
                            onClick={incPlanCounter}/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ProjectLuxuryVillasInteraction;