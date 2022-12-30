import './ProjectAdvantages.scss'

import ProjectAdvantagesItem from "./ProjectAdvantagesItem/ProjectAdvantagesItem";
import {useTranslation} from "react-i18next";

const ProjectAdvantages = ({data}) => {

    const {t} = useTranslation();

    const {infrastructureArray, servicesArray, characteristicsArray} = data;

    return (
        <section className="project-advantages">
            <div className="container project-advantages__container">
                <div className="project-advantages__column">
                    <div className="title-small project-advantages__title">
                        {t('projects.abi')}
                    </div>
                    {
                        infrastructureArray.map(({img, text}, i) => (
                            <ProjectAdvantagesItem
                                        img={img}
                                        text={text}
                                        key={i}/>
                        ))
                    }
                </div>
                <div className="project-advantages__column">
                    <div className="title-small project-advantages__title">
                        {t('projects.as')}
                    </div>
                    {
                        servicesArray.map(({img, text}, i) => (
                            <ProjectAdvantagesItem
                                img={img}
                                text={text}
                                key={i}/>
                        ))
                    }
                </div>
                <div className="project-advantages__column">
                    <div className="title-small project-advantages__title">
                        {t('projects.ac')}
                    </div>
                    {
                        characteristicsArray.map(({img, text}, i) => (
                            <ProjectAdvantagesItem
                                img={img}
                                text={text}
                                key={i}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default ProjectAdvantages;