import './ProjectBotanicalGardenResortInteraction.scss'

import apartmentsImg from "../../../../assets/content/projects/botanical-garden-resort/projectInteraction/apartments.jpg"

import $ from "jquery";
import "imagemapster";

import apartmentsMapImg from "../../../../assets/content/projects/botanical-garden-resort/projectInteraction/apartmentsMap.jpg"

import {useEffect, useRef, useState} from "react";
import arrowImg from "../../../../assets/icons/shared/arrow-top.svg";
import planIcon from "../../../../assets/icons/projectInteraction/plan.svg";
import plansZip from "../../../../assets/download/botanical-garden-resort/botanical-garden-resort-plans.zip"

import cottageImg from '../../../../assets/content/projects/botanical-garden-resort/projectInteraction/cottage.jpg';
import {useTranslation} from "react-i18next";
import PlanInteraction from "./PlanInteraction";
import Fancybox from "../../../Fancybox/Fancybox";

const ProjectBotanicalGardenResortInteraction = () => {

    const buildingsInfo = {
        apartments: {
            name: 'Block 1. Apartments building',
            floors: '5',
            generalArea: '3383 m2'
        },
        b2c1: {
            name: 'Block 2. Cottage 1. Reserved',
            floors: '2',
            generalArea: '151.4 m2',
            territoryArea: '67 m2',
        },
        b2c2: {
            name: 'Block 2. Cottage 2',
            floors: '3',
            generalArea: '238.6 m2',
            territoryArea: '66.7 m2',
        },
        b2c3: {
            name: 'Block 2. Cottage 3. Reserved',
            floors: '2',
            generalArea: '151.4 m2',
            territoryArea: '65.3 m2',
        },
        b2c4: {
            name: 'Block 2. Cottage 4',
            floors: '3',
            generalArea: '238.6 m2',
            territoryArea: '63.8 m2',
        },
        b2c5: {
            name: 'Block 2. Cottage 5. Sold out',
            floors: '3',
            generalArea: '151.5 m2',
            territoryArea: '64.7 m2',
        },
        b3c1: {
            name: 'Block 3. Cottage 1. Reserved',
            floors: '3',
            generalArea: '238.6 m2',
            territoryArea: '67.8 m2',
        },
        b3c2: {
            name: 'Block 3. Cottage 2. Reserved',
            floors: '2',
            generalArea: '151.4 m2',
            territoryArea: '68.1 m2',
        },
        b3c3: {
            name: 'Block 3. Cottage 3',
            floors: '3',
            generalArea: '238.6 m2',
            territoryArea: '68.1 m2',
        },
        b3c4: {
            name: 'Block 3. Cottage 4. Sold out',
            floors: '2',
            generalArea: '151.4 m2',
            territoryArea: '68.1 m2',
        },
        b3c5: {
            name: 'Block 3. Cottage 5. Sold out',
            floors: '3',
            generalArea: '238.6 m2',
            territoryArea: '85.8 m2',
        },
        b4c1: {
            name: 'Block 4. Cottage 1. Sold out',
            floors: '2',
            generalArea: '151.4 m2',
            territoryArea: '89.5 m2',
        },
        b4c2: {
            name: 'Block 4. Cottage 2',
            floors: '3',
            generalArea: '238.6 m2',
            territoryArea: '54.9 m2',
        },
        b4c3: {
            name: 'Block 4. Cottage 3. Sold out',
            floors: '2',
            generalArea: '151.4 m2',
            territoryArea: '46 m2',
        },
        b4c4: {
            name: 'Block 4. Cottage 4',
            floors: '3',
            generalArea: '238.6 m2',
            territoryArea: '43.5 m2',
        },
        b4c5: {
            name: 'Block 4. Cottage 5. Sold out',
            floors: '3',
            generalArea: '151.4 m2',
            territoryArea: '38 m2',
        },
        b4c6: {
            name: 'Block 4. Cottage 6',
            floors: '3',
            generalArea: '238.6 m2',
            territoryArea: '32.9 m2',
        },
        b4c7: {
            name: 'Block 4. Cottage 7. Sold out',
            floors: '2',
            generalArea: '151.4 m2',
            territoryArea: '75.3 m2',
        }
    }

    const [currentBuildingInfo, setCurrentBuildingInfo] = useState(buildingsInfo.apartments);
    const [activeClassName, setActiveClassName] = useState('.project-botanical-garden-resort-interaction__area-apartments');
    const [planCounter, setPlanCounter] = useState(1);
    const [planCounterMax, setPlanCounterMax] = useState(null);
    const [planImg, setPlanImg] = useState(null);
    const [apartmentsFloorCounter, setApartmentsFloorCounter] = useState(null);
    const [apartmentsFloorInfo, setApartmentsFloorInfo] = useState(null);

    const incPlanCounter = () => {
        if (planCounter === planCounterMax) {
            setPlanCounter(1)
        } else {
            setPlanCounter(planCounter + 1);
        }
    }

    const incFloorCounter = () => {
        if (activeClassName.indexOf('floor') === -1) {
            setPlanCounter(1);
            setApartmentsFloorCounter(1);
            setActiveClassName('.project-botanical-garden-resort-interaction__apartments-floor-1');
        } else {
            if (apartmentsFloorCounter === 5) {
                setPlanCounter(1);
                setApartmentsFloorCounter(1);
                setActiveClassName('.project-botanical-garden-resort-interaction__apartments-floor-1');
            } else {
                setPlanCounter(1);
                const counter = apartmentsFloorCounter + 1;
                setApartmentsFloorCounter(apartmentsFloorCounter + 1);
                setActiveClassName('.project-botanical-garden-resort-interaction__apartments-floor-' + counter);
            }
        }
    }

    const decFloorCounter = () => {
        if (activeClassName.indexOf('floor') === -1) {
            setPlanCounter(1);
            setApartmentsFloorCounter(5);
            setActiveClassName('.project-botanical-garden-resort-interaction__apartments-floor-5');
        } else {
            if (apartmentsFloorCounter === 1) {
                setPlanCounter(1);
                setApartmentsFloorCounter(5);
                setActiveClassName('.project-botanical-garden-resort-interaction__apartments-floor-5');
            } else {
                setPlanCounter(1);
                const counter = apartmentsFloorCounter - 1;
                setApartmentsFloorCounter(apartmentsFloorCounter - 1);
                setActiveClassName('.project-botanical-garden-resort-interaction__apartments-floor-' + counter);
            }
        }
    }

    const decPlanCounter = () => {
        if (planCounter === 1) {
            setPlanCounter(planCounterMax)
        } else {
            setPlanCounter(planCounter - 1);
        }
    }

    useEffect(() => {
        $('img[usemap]').mapster({
            fillColor: 'F2C231'
        });
        $(activeClassName).mapster('select');
    }, [activeClassName]);

    useEffect(() => {
        if (activeClassName.indexOf('cottage') !== -1) {
            setPlanCounterMax(5);
            import(`../../../../assets/content/projects/botanical-garden-resort/projectInteraction/cottage/${planCounter}.jpg`)
                .then(imgModule => setPlanImg(imgModule.default));
        }

    }, [activeClassName, planCounter]);

    useEffect(() => {
        if (activeClassName === '.project-botanical-garden-resort-interaction__area-apartments') {
            setPlanCounterMax(1);
            import(`../../../../assets/content/projects/botanical-garden-resort/projectInteraction/apartments/1.jpg`)
                .then(imgModule => setPlanImg(imgModule.default));
        }
    }, [activeClassName, planCounter])

    const onApartmentsClick = () => {
        setActiveClassName('.project-botanical-garden-resort-interaction__apartments-floor-1');
        setCurrentBuildingInfo(buildingsInfo.apartments);
        setPlanCounter(1);
        setApartmentsFloorCounter(1);
    }

    const onCottageClick = () => {
        setActiveClassName('.project-botanical-garden-resort-interaction__area-cottage-b2c1')
        setCurrentBuildingInfo(buildingsInfo.b2c1);
        setPlanCounter(1);
    }

    const {t} = useTranslation();

    const apartmentsRef = useRef();

    return (
        <section className="project-botanical-garden-resort-interaction">
           <div className="container project-botanical-garden-resort-interaction__container">
               <h2 className="title-small">{t('projects.bgrpit')}</h2>
               <img className="project-botanical-garden-resort-interaction__apartments" src={apartmentsImg} alt='' useMap="#BotanicalGardenResort"/>
               <map name="BotanicalGardenResort"
                    className="project-botanical-garden-resort-interaction__map">
                   <area
                       target=""
                       alt=""
                       title=""
                       className="project-botanical-garden-resort-interaction__area-apartments"
                       href="#"
                       onClick={() =>  {
                           setPlanCounter(1);
                           setCurrentBuildingInfo(buildingsInfo.apartments);
                           setActiveClassName('.project-botanical-garden-resort-interaction__area-apartments');
                           apartmentsRef.current.scrollIntoView();
                       }}
                       coords="549,325,473,276,459,213,506,140,570,126,647,173,661,239,617,309"
                       shape="poly"/>
                   <area
                       target=""
                       alt=""
                       title=""
                       href="#"
                       className="project-botanical-garden-resort-interaction__area-cottage-b2c1
                                project-botanical-garden-resort-interaction__area-cottage"
                       onClick={() => {
                           setPlanCounter(1);
                           setCurrentBuildingInfo(buildingsInfo.b2c1);
                           apartmentsRef.current.scrollIntoView();
                           setActiveClassName('.project-botanical-garden-resort-interaction__area-cottage-b2c1 ' +
                               'project-botanical-garden-resort-interaction__area-cottage');
                       }}
                       coords="685,312,707,276,794,332,772,365"
                       shape="poly"/>
                   <area
                       target=""
                       alt=""
                       title=""
                       href="#"
                       className="project-botanical-garden-resort-interaction__area-cottage-b2c2
                       project-botanical-garden-resort-interaction__area-cottage"
                       onClick={() => {
                           setPlanCounter(1);
                           setCurrentBuildingInfo(buildingsInfo.b2c2);
                           apartmentsRef.current.scrollIntoView();
                           setActiveClassName('.project-botanical-garden-resort-interaction__area-cottage-b2c2');
                       }}
                       coords="673,352,697,320,783,373,761,408"
                       shape="poly"/>
                   <area
                       target=""
                       alt=""
                       title=""
                       href="#"
                       className="project-botanical-garden-resort-interaction__area-cottage-b2c3
                       project-botanical-garden-resort-interaction__area-cottage"
                       coords="664,393,683,362,772,414,751,447"
                       shape="poly"
                       onClick={() => {
                           setPlanCounter(1);
                           setCurrentBuildingInfo(buildingsInfo.b2c3);
                           apartmentsRef.current.scrollIntoView();
                           setActiveClassName('.project-botanical-garden-resort-interaction__area-cottage-b2c3');
                       }}/>
                   <area
                       target=""
                       alt=""
                       title=""
                       href="#"
                       className="project-botanical-garden-resort-interaction__area-cottage-b2c4
                       project-botanical-garden-resort-interaction__area-cottage"
                       onClick={() => {
                           setPlanCounter(1);
                           setCurrentBuildingInfo(buildingsInfo.b2c4)
                           apartmentsRef.current.scrollIntoView();
                           setActiveClassName('.project-botanical-garden-resort-interaction__area-cottage-b2c4');
                       }}
                       coords="653,433,675,401,762,456,739,489"
                       shape="poly"/>
                   <area
                       target=""
                       alt=""
                       title=""
                       href="#"
                       className="project-botanical-garden-resort-interaction__area-cottage-b2c5
                       project-botanical-garden-resort-interaction__area-cottage"
                       onClick={() => {
                           setPlanCounter(1);
                           setCurrentBuildingInfo(buildingsInfo.b2c5);
                           apartmentsRef.current.scrollIntoView();
                           setActiveClassName('.project-botanical-garden-resort-interaction__area-cottage-b2c5');
                       }}
                       coords="641,474,662,442,755,498,729,530"
                       shape="poly"/>
                   <area
                       target=""
                       alt=""
                       title=""
                       className="project-botanical-garden-resort-interaction__area-cottage-b3c1
                       project-botanical-garden-resort-interaction__area-cottage"
                       href="#"
                       onClick={() => {
                           setPlanCounter(1);
                           setCurrentBuildingInfo(buildingsInfo.b3c1);
                           apartmentsRef.current.scrollIntoView();
                           setActiveClassName('.project-botanical-garden-resort-interaction__area-cottage-b3c1');
                       }}
                       coords="403,353,425,317,514,373,489,407"
                       shape="poly"/>
                   <area
                       target=""
                       alt=""
                       title=""
                       href="#"
                       className="project-botanical-garden-resort-interaction__area-cottage-b3c2
                       project-botanical-garden-resort-interaction__area-cottage"
                       onClick={() => {
                           setPlanCounter(1);
                           setCurrentBuildingInfo(buildingsInfo.b3c2);
                           apartmentsRef.current.scrollIntoView();
                           setActiveClassName('.project-botanical-garden-resort-interaction__area-cottage-b3c2');
                       }}
                       coords="378,381,398,348,484,405,465,437"
                       shape="poly"/>
                   <area
                       target=""
                       alt=""
                       title=""
                       className="project-botanical-garden-resort-interaction__area-cottage-b3c3
                       project-botanical-garden-resort-interaction__area-cottage"
                       href="#"
                       onClick={() => {
                           setPlanCounter(1);
                           setCurrentBuildingInfo(buildingsInfo.b3c3);
                           apartmentsRef.current.scrollIntoView();
                           setActiveClassName('.project-botanical-garden-resort-interaction__area-cottage-b3c3');
                       }}
                       coords="351,413,372,377,458,434,436,469" shape="poly"/>
                   <area
                       target=""
                       alt=""
                       title=""
                       className="project-botanical-garden-resort-interaction__area-cottage-b3c4
                       project-botanical-garden-resort-interaction__area-cottage"
                       href="#"
                       onClick={() => {
                           setPlanCounter(1);
                           setCurrentBuildingInfo(buildingsInfo.b3c4);
                           apartmentsRef.current.scrollIntoView();
                           setActiveClassName('.project-botanical-garden-resort-interaction__area-cottage-b3c4');
                       }}
                       coords="325,440,346,413,430,469,411,498"
                       shape="poly"/>
                   <area
                       target=""
                       alt=""
                       title=""
                       href="#"
                       className="project-botanical-garden-resort-interaction__area-cottage-b3c5
                       project-botanical-garden-resort-interaction__area-cottage"
                       onClick={() => {
                           setPlanCounter(1);
                           setCurrentBuildingInfo(buildingsInfo.b3c5);
                           apartmentsRef.current.scrollIntoView();
                           setActiveClassName('.project-botanical-garden-resort-interaction__area-cottage-b3c5');
                       }}
                       coords="297,474,320,439,407,497,384,530"
                       shape="poly"/>
                   <area
                       target=""
                       alt=""
                       title=""
                       className="project-botanical-garden-resort-interaction__area-cottage-b4c7
                       project-botanical-garden-resort-interaction__area-cottage"
                       href="#"
                       onClick={() => {
                           setPlanCounter(1);
                           setCurrentBuildingInfo(buildingsInfo.b4c7);
                           apartmentsRef.current.scrollIntoView();
                           setActiveClassName('.project-botanical-garden-resort-interaction__area-cottage-b4c7');
                       }}
                       coords="208,485,228,453,142,396,118,428"
                       shape="poly"/>
                   <area
                       target=""
                       alt=""
                       title=""
                       href="#"
                       className="project-botanical-garden-resort-interaction__area-cottage-b4c6
                       project-botanical-garden-resort-interaction__area-cottage"
                       onClick={() => {
                           setPlanCounter(1);
                           setCurrentBuildingInfo(buildingsInfo.b4c6);
                           apartmentsRef.current.scrollIntoView();
                           setActiveClassName('.project-botanical-garden-resort-interaction__area-cottage-b4c6');
                       }}
                       coords="234,454,148,399,171,362,256,418"
                       shape="poly"/>
                   <area
                       target=""
                       alt=""
                       title=""
                       className="project-botanical-garden-resort-interaction__area-cottage-b4c5
                       project-botanical-garden-resort-interaction__area-cottage"
                       href="#"
                       onClick={() => {
                           setPlanCounter(1);
                           setCurrentBuildingInfo(buildingsInfo.b4c5);
                           apartmentsRef.current.scrollIntoView();
                           setActiveClassName('.project-botanical-garden-resort-interaction__area-cottage-b4c5');
                       }}
                       coords="177,366,196,336,280,392,261,422"
                       shape="poly"/>
                   <area
                       target=""
                       alt=""
                       title=""
                       href="#"
                       className="project-botanical-garden-resort-interaction__area-cottage-b4c4
                       project-botanical-garden-resort-interaction__area-cottage"
                       onClick={() => {
                           setPlanCounter(1);
                           setCurrentBuildingInfo(buildingsInfo.b4c4);
                           apartmentsRef.current.scrollIntoView();
                           setActiveClassName('.project-botanical-garden-resort-interaction__area-cottage-b4c4');
                       }}
                       coords="200,337,286,394,312,359,224,302"
                       shape="poly"/>
                   <area
                       target=""
                       alt=""
                       title=""
                       className="project-botanical-garden-resort-interaction__area-cottage-b4c3
                       project-botanical-garden-resort-interaction__area-cottage"
                       href="#"
                       onClick={() => {
                           setPlanCounter(1);
                           setCurrentBuildingInfo(buildingsInfo.b4c3);
                           apartmentsRef.current.scrollIntoView();
                           setActiveClassName('.project-botanical-garden-resort-interaction__area-cottage-b4c3');
                       }}
                       coords="228,304,247,275,336,331,317,360"
                       shape="poly"/>
                   <area
                       target=""
                       alt=""
                       title=""
                       href="#"
                       className="project-botanical-garden-resort-interaction__area-cottage-b4c2
                       project-botanical-garden-resort-interaction__area-cottage"
                       onClick={() => {
                           setPlanCounter(1);
                           setCurrentBuildingInfo(buildingsInfo.b4c2);
                           apartmentsRef.current.scrollIntoView();
                           setActiveClassName(".project-botanical-garden-resort-interaction__area-cottage-b4c2");
                       }}
                       coords="254,276,275,241,364,295,341,331"
                       shape="poly"/>
                   <area
                       target=""
                       alt=""
                       title=""
                       className="project-botanical-garden-resort-interaction__area-cottage-b4c1
                       project-botanical-garden-resort-interaction__area-cottage"
                       onClick={() => {
                           setPlanCounter(1);
                           setCurrentBuildingInfo(buildingsInfo.b4c1)
                           apartmentsRef.current.scrollIntoView();
                           setActiveClassName('.project-botanical-garden-resort-interaction__area-cottage-b4c1')
                       }}
                       href="#"
                       coords="282,242,302,210,389,263,370,297"
                       shape="poly"/>
               </map>
               <div className="project-botanical-garden-resort-interaction__info
                                project-botanical-garden-resort-interaction-info">
                   <h2 className="text-big project-botanical-garden-resort-interaction-info__title">
                       {currentBuildingInfo.name}
                   </h2>
                   <p className="project-botanical-garden-resort-interaction-info__text">
                       Floors:
                       <span>
                            {currentBuildingInfo.floors}
                        </span>
                   </p>
                   <p className="project-botanical-garden-resort-interaction-info__text">
                       General area:
                       <span>
                            {currentBuildingInfo.generalArea}
                        </span>
                   </p>
                   {
                       currentBuildingInfo.territoryArea ?
                           <p className="project-botanical-garden-resort-interaction-info__text">
                               Area of the territory:
                               <span>
                            {currentBuildingInfo.territoryArea}
                        </span>
                           </p> : null
                   }
               </div>
               <div className="project-botanical-garden-resort-interaction__box">
                   <div className="project-botanical-garden-resort-interaction__row">
                      <div className='indicators'>
                          <div className="indicator">
                              {t('projects.sold')}:
                              <div className='indicator__sold'>

                              </div>
                          </div>
                          <div className="indicator">
                              {t('projects.reserved')}:
                              <div className='indicator__reserved'>

                              </div>
                          </div>
                      </div>
                       <div>

                       </div>
                   </div>
                   <div ref={apartmentsRef} className="project-botanical-garden-resort-interaction__row">
                       <div onClick={onApartmentsClick}
                            className="button-secondary project-botanical-garden-resort-interaction__button-secondary">
                           {t('projects.bgrpia')}
                       </div>
                       <div onClick={onCottageClick}
                            className="button-secondary project-botanical-garden-resort-interaction__button-secondary">
                           {t('projects.bgrpic')}
                       </div>
                   </div>
                   <div className="project-botanical-garden-resort-interaction__row download">
                       <div className="project-botanical-garden-resort-interaction__text">{t('projects.download')}</div>
                       <a download={'botanical-garden-resort-plans.zip'}
                          href={plansZip}
                          className="button-primary project-botanical-garden-resort-interaction__button-primary">
                           <img src={planIcon} alt="Icon"/>
                           construction-plans.zip
                       </a>
                   </div>
               </div>
               {
                   (activeClassName.indexOf('apartments') !== -1) ? <div className="project-botanical-garden-resort-interaction__apartments-box">
                       <div className="project-botanical-garden-resort-interaction__controls">
                           <div className="project-botanical-garden-resort-interaction__inc">
                                 <span style={{
                                     width: '100%',
                                     height: '100$'}
                                 } onClick={incFloorCounter}>
                                     +
                                 </span>
                           </div>
                           <div className="project-botanical-garden-resort-interaction__dec">
                                   <span onClick={decFloorCounter}>
                                       &#8722;
                                   </span>
                           </div>
                       </div>
                       <div className="project-botanical-garden-resort-interaction__floor-counter">
                           {t('projects.floor')} {apartmentsFloorCounter}
                       </div>
                       <img src={apartmentsMapImg}
                            alt=''
                            useMap="#image-map"
                            className="project-botanical-garden-resort-interaction_apartments"/>
                       <map  name="image-map">
                           <area target=""
                                 alt=""
                                 title=""
                                 onClick={() =>  {
                                     setPlanCounter(1);
                                     setActiveClassName(".project-botanical-garden-resort-interaction__apartments-floor-1")
                                     setApartmentsFloorCounter(1)}
                                 }
                                 className="project-botanical-garden-resort-interaction__apartments-floor-1"
                                 href=""
                                 coords="108,394,330,377,514,378,644,393,644,440,516,456,335,455,108,446"
                                 shape="poly"/>
                           <area
                               target=""
                               alt=""
                               title=""
                               href=""
                               onClick={() => {
                                   setPlanCounter(1);
                                   setApartmentsFloorInfo(2)
                                   setApartmentsFloorCounter(2)
                                   setActiveClassName(".project-botanical-garden-resort-interaction__apartments-floor-2")}
                               }
                               className="project-botanical-garden-resort-interaction__apartments-floor-2"
                               coords="97,390,97,365,108,362,108,342,328,306,516,304,644,344,645,363,661,369,664,389,572,377,512,376,332,375,232,378"
                               shape="poly"/>
                           <area
                               target=""
                               alt=""
                               title=""
                               className="project-botanical-garden-resort-interaction__apartments-floor-3"
                               href=""
                               onClick={() => {
                                   setPlanCounter(1);
                                   setActiveClassName(".project-botanical-garden-resort-interaction__apartments-floor-3")
                                   setApartmentsFloorCounter(3)}
                               }
                               coords="663,341,663,319,644,309,645,301,515,227,328,223,109,290,107,303,96,309,97,336,274,300,335,305,516,303,573,306"
                               shape="poly"/>
                           <area
                               target=""
                               alt=""
                               title=""
                               onClick={() => {
                                   setPlanCounter(1);
                                   setActiveClassName(".project-botanical-garden-resort-interaction__apartments-floor-4")
                                   setApartmentsFloorCounter(4)}
                               }
                               className="project-botanical-garden-resort-interaction__apartments-floor-4"
                               href=""
                               coords="664,291,662,270,516,154,330,145,108,240,108,249,95,254,96,280,273,222,328,223,516,229,573,231"
                               shape="poly"/>
                           <area
                               target=""
                               alt=""
                               title=""
                               className="project-botanical-garden-resort-interaction__apartments-floor-5"
                               href=""
                               onClick={() => {
                                   setPlanCounter(1);
                                   setActiveClassName(".project-botanical-garden-resort-interaction__apartments-floor-5")
                                   setApartmentsFloorCounter(5);
                               }
                               }
                               coords="664,241,662,218,575,128,516,81,334,68,198,140,161,134,154,137,152,165,107,188,107,194,100,199,100,222,269,146,330,146,516,153,570,157"
                               shape="poly"/>
                       </map>
                   </div> :<img src={cottageImg} alt="" className="project-botanical-garden-resort-interaction__building"/>
               }
               {
                   (activeClassName.indexOf('cottage') !== -1) ?  <div className="project-botanical-garden-resort-interaction__plan-block">
                       <img
                           className="project-botanical-garden-resort-interaction__arrow-left"
                           src={arrowImg}
                           alt="Arrow"
                           onClick={decPlanCounter}/>
                       <Fancybox>
                           <img src={planImg}
                                data-fancybox="gallery"
                                alt="Plan"
                                className="project-botanical-garden-resort-interaction__plan-img"
                                loading="lazy"/>
                       </Fancybox>
                       <img
                           className="project-botanical-garden-resort-interaction__arrow-right"
                           src={arrowImg}
                           alt="Arrow"
                           onClick={incPlanCounter}/>
                   </div> : null
               }
               {
                   (apartmentsFloorCounter && activeClassName.indexOf('apartments') !== -1) ? <PlanInteraction
                       apartmentsFloorCounter={apartmentsFloorCounter}
                       activeClassName={activeClassName}/> : null
               }
           </div>
        </section>
    );
};

export default ProjectBotanicalGardenResortInteraction;