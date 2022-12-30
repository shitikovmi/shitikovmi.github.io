import HomeProjectsItem from "./HomeProjectsItem/HomeProjectsItem";

import projectImg01PC from "../../../assets/content/home/homeProjects/01.png"
import projectImg02PC from "../../../assets/content/home/homeProjects/02.jpg"
import projectImg03PC from "../../../assets/content/home/homeProjects/03.png"

import projectImg01Mobile from "../../../assets/content/home/homeProjects/01-mobile.jpg"
import projectImg02Mobile from "../../../assets/content/home/homeProjects/02-mobile.jpg"
import projectImg03Mobile from "../../../assets/content/home/homeProjects/03-mobile.jpg"

import {useTranslation} from "react-i18next";

import './HomeProjects.scss'

const HomeProjects = () => {

    const {t} = useTranslation();

    const projects = [
        {
            imgPC: projectImg01PC,
            imgMobile: projectImg01Mobile,
            name: 'Batumi Garden Inn',
            description: t('homeProjects.gid'),
            deliveryDate: t('homeProjects.gidd'),
            isSalesOpen: true,
            link: '/projects/batumi-garden-inn'
        },
        {
            imgPC: projectImg02PC,
            imgMobile: projectImg02Mobile,
            name: 'Royal Residence Botanico',
            description: t('homeProjects.bgrd'),
            deliveryDate: t('homeProjects.bgrdd'),
            isSalesOpen: true,
            link: '/projects/royal-residence-botanico'
        },
        {
            imgPC: projectImg03PC,
            imgMobile: projectImg03Mobile,
            name: 'Lemon Garden Residence & SPA',
            description: t('homeProjects.lgd'),
            deliveryDate: t('homeProjects.bgrdd'),
            isSalesOpen: true,
            link:'/projects/lemon-garden-residence-&-SPA'
        }
    ]

    return (
        <section className="home-projects">
            <div className="container home-projects__container">
                <h2 className="title home-projects__title">
                    {t('homeProjects.title')}
                </h2>
                <div className="home-projects__box">
                    {
                        projects.map(({imgPC, link, imgMobile, name, description, deliveryDate, isSalesOpen}, i) => (
                            <HomeProjectsItem
                                key={i}
                                imgPC={imgPC}
                                name={name}
                                imgMobile={imgMobile}
                                description={description}
                                deliveryDate={deliveryDate}
                                isSalesOpen={isSalesOpen}
                                link={link}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default HomeProjects;