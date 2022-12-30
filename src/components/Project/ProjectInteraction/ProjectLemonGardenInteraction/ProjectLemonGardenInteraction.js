import './ProjectLemonGardenInteraction.scss'

import {useTranslation} from "react-i18next";
import planIcon from "../../../../assets/icons/projectInteraction/plan.svg";
import plan from '../../../../assets/download/lemon-garden/construction-plan.pdf';

const ProjectLemonGardenInteraction = () => {

    const {t} = useTranslation();

    return (
        <section className="project-lemon-garden-interaction">
            <div className="project-lemon-garden-interaction__container container">
                <h2 className="project-lemon-garden-interaction__title title">
                    {t('projects.lgit')}
                </h2>
                <div className="project-lemon-garden-interaction__download">
                    <p className="text-small project-garden-inn-interaction__text">
                        {t('projects.download')}
                    </p>
                    <a download='construction-plan.pdf'
                       href={plan}
                       className="button-primary project-garden-inn-interaction__button-primary">
                        <img src={planIcon} alt="Icon"/>
                        construction-plan.pdf
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectLemonGardenInteraction;