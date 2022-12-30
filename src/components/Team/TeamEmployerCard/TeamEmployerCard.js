import './TeamEmployerCard.scss'

const TeamEmployerCard = ({img, name, post}) => (
    <div className="team-employer-card">
        <img src={img}
             alt="Employer"
             className="team-employer-card__img"
             style={{
                 width: '290px',
                 height: '340px'
             }}/>
        <h3 className="team-employer-card__name">{name}</h3>
        <p className="team-employer-card__post">{post}</p>
    </div>
);

export default TeamEmployerCard;