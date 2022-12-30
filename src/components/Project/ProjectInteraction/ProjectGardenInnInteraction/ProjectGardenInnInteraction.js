import {useState, useEffect, useRef} from "react";

import './ProjectGardenInnInteraction.scss'

import planIcon from "../../../../assets/icons/projectInteraction/plan.svg"
import apartmentsImg from "../../../../assets/content/projects/garden-inn/projectInteraction/apartments.jpg"

import arrowImg from "../../../../assets/icons/shared/arrow-top.svg"
import {useTranslation} from "react-i18next";
import Fancybox from "../../../Fancybox/Fancybox";

const ProjectGardenInnInteraction = () => {

    const [planCounter, setPlanCounter] = useState(1);
    const [planImg, setPlanImg] = useState(null);
    const [planPdf, setPlanPdf] = useState(null);

    useEffect(() => {
        import(`../../../../assets/content/projects/garden-inn/projectInteraction/floor-${planCounter}.jpg`)
            .then(imgModule => setPlanImg(imgModule.default));

        import(`../../../../assets/download/garden-inn/plan-${planCounter}.pdf`)
            .then(pdfModule => setPlanPdf(pdfModule.default));
    }, [planCounter]);

    const incPlanCounter = () => {
        if (planCounter === 4) {
            setPlanCounter(1)
        } else {
            setPlanCounter(planCounter + 1);
        }
    }

    const decPlanCounter = () => {
        if (planCounter === 1) {
            setPlanCounter(4)
        } else {
            setPlanCounter(planCounter - 1);
        }
    }

    const {t} = useTranslation();

    const apartmentsRef = useRef();

    return (
        <section className="project-garden-inn-interaction">
            <div className="container project-garden-inn-interaction__container">
                <h2 className="title project-garden-inn-interaction__title">
                    {t('projects.gipit')}
                </h2>
                <div className="project-garden-inn-interaction__box">
                    <div className="project-garden-inn-interaction__row">
                        <div onClick={() => {
                            setPlanCounter(1)
                            apartmentsRef.current.scrollIntoView();
                            }}
                             className="button-secondary project-garden-inn-interaction__button-secondary">
                            {t('projects.floor')} 1
                        </div>
                        <div onClick={() => {
                            setPlanCounter(2)
                            apartmentsRef.current.scrollIntoView();
                            }}
                             className="button-secondary project-garden-inn-interaction__button-secondary">
                            {t('projects.floor')} 2
                        </div>
                        <div onClick={() => {
                            setPlanCounter(3)
                            apartmentsRef.current.scrollIntoView();
                            }}
                             className="button-secondary project-garden-inn-interaction__button-secondary">
                            {t('projects.floor')} 3
                        </div>
                        <div onClick={() => {
                            setPlanCounter(4)
                            apartmentsRef.current.scrollIntoView();
                        }}
                             className="button-secondary project-garden-inn-interaction__button-secondary">
                            {t('projects.terrace')}
                        </div>
                    </div>
                    <div className="project-garden-inn-interaction__row project-garden-inn-interaction__download">
                        <p className="text-small project-garden-inn-interaction__text">
                            {t('projects.download')}
                        </p>
                        <a download='construction-plan.pdf'
                           href='../../../../assets/download/garden-inn/construction-plan.pdf'
                           className="button-primary project-garden-inn-interaction__button-primary">
                            <img src={planIcon} alt="Icon"/>
                            construction-plan.pdf
                        </a>
                    </div>
                </div>
                <div className="project-garden-inn-interaction__box" style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <img className="project-garden-inn-interaction__apartments" src={apartmentsImg} alt="Apartments"/>
                </div>
                <div className="project-garden-inn-interaction__plan-block">
                    <img
                        className="project-garden-inn-interaction__arrow-left"
                        src={arrowImg}
                        alt="Arrow"
                        onClick={decPlanCounter}/>
                    <Fancybox>
                        <img ref={apartmentsRef} data-fancybox="gallery" className="project-garden-inn-interaction__plan-img" loading="lazy" src={`${planImg}`} alt="Plan"/>
                    </Fancybox>
                    <img
                        className="project-garden-inn-interaction__arrow-right"
                        src={arrowImg}
                        alt="Arrow"
                        onClick={incPlanCounter}/>
                </div>
            </div>
        </section>
    );
};

export default ProjectGardenInnInteraction;