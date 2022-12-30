import './ProjectAdvantagesItem.scss'

const ProjectAdvantagesItem = ({img, text}) => {
    return (
        <div className="project-advantages__item project-advantages-item">
            <img src={img}
                 alt="Advantage"
                 className="project-advantages-item__img"/>
            <p className="project-advantages-item__text">
                {text}
            </p>
        </div>
    );
};

export default ProjectAdvantagesItem;