
import TeamEmployerCard from "../TeamEmployerCard/TeamEmployerCard";

import './TeamEmployees.scss'

import employerImg01 from '../../../assets/content/team/teamEmployees/01.jpg'
import employerImg02 from '../../../assets/content/team/teamEmployees/02.jpg'
import employerImg03 from '../../../assets/content/team/teamEmployees/03.jpg'
import employerImg04 from '../../../assets/content/team/teamEmployees/04.jpg'
import employerImg05 from '../../../assets/content/team/teamEmployees/05.jpg'
import employerImg06 from '../../../assets/content/team/teamEmployees/06.jpg'
import {useTranslation} from "react-i18next";

const TeamEmployees = () => {

    const {t} = useTranslation();

    const employees = [
        {
            name: t('teamEmp.jbn'),
            post: t('teamEmp.jbp'),
            img: employerImg01
        },
        {
            name: t('teamEmp.ekn'),
            post: t('teamEmp.ekp'),
            img: employerImg02
        },
        {
            name: t('teamEmp.dnn'),
            post: t('teamEmp.dnp'),
            img: employerImg03
        },
        {
            name: t('teamEmp.nkn'),
            post: t('teamEmp.nkp'),
            img: employerImg04
        },
        {
            name: t('teamEmp.mgn'),
            post: t('teamEmp.mgp'),
            img: employerImg05
        },
        {
            name: t('teamEmp.vkn'),
            post: t('teamEmp.vkp'),
            img: employerImg06
        },
    ]

    return (
        <section className="team-employees">
            <div className="container team-employees__container">
                <h2 className="title team-employees__title">
                    {t('teamEmp.title')}
                </h2>
                <div className="team-employees__box">
                    {
                        employees.map(({name, post, img}, i) => (
                            <TeamEmployerCard
                                name={name}
                                post={post}
                                img={img}
                                key={i}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default TeamEmployees;