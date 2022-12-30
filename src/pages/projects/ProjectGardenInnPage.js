import {Background, ContactsLink, Footer, Header, YoutubeLink} from "../../components/shared";
import {ProjectAdvantages, ProjectInfo, ProjectSlider, ProjectGardenInnInteraction} from "../../components/Project";

import backgroundImg from "../../assets/content/shared/background/01.svg"

import projectInfoProgressImg from "../../assets/content/projects/garden-inn/projectInfo/01.svg"

import projectInfoImgPc from "../../assets/content/projects/garden-inn/projectInfo/02-pc.png"

import sliderTopImage01 from "../../assets/content/projects/garden-inn/projectSlider/top/01.jpg";
import sliderTopImage02 from "../../assets/content/projects/garden-inn/projectSlider/top/02.jpg";
import sliderTopImage03 from "../../assets/content/projects/garden-inn/projectSlider/top/03.jpg";
import sliderTopImage04 from "../../assets/content/projects/garden-inn/projectSlider/top/04.jpg";
import sliderTopImage05 from "../../assets/content/projects/garden-inn/projectSlider/top/05.jpg";

import sliderBottomImage01 from "../../assets/content/projects/garden-inn/projectSlider/bottom/01.jpg";
import sliderBottomImage02 from "../../assets/content/projects/garden-inn/projectSlider/bottom/02.jpg";
import sliderBottomImage03 from "../../assets/content/projects/garden-inn/projectSlider/bottom/03.jpg";
import sliderBottomImage04 from "../../assets/content/projects/garden-inn/projectSlider/bottom/04.jpg";
import sliderBottomImage05 from "../../assets/content/projects/garden-inn/projectSlider/bottom/05.jpg";

import projectAdvantagesInfrastructureItemImgHealth
    from "../../assets/content/shared/projectAdvantages/infrastructure/health.svg";
import projectAdvantagesInfrastructureItemImgSport
    from "../../assets/content/shared/projectAdvantages/infrastructure/sport.svg";
import projectAdvantagesInfrastructureItemImgParking
    from "../../assets/content/shared/projectAdvantages/infrastructure/parking.svg";
import projectAdvantagesInfrastructureItemImgBarbecue
    from "../../assets/content/shared/projectAdvantages/infrastructure/barbecue.svg";
import projectAdvantagesInfrastructureItemImgPlayground
    from "../../assets/content/shared/projectAdvantages/infrastructure/playground.svg";

import projectAdvantagesServicesItemImgApartmentService
    from "../../assets/content/shared/projectAdvantages/services/apartment-service.svg";
import projectAdvantagesServicesItemImgWithoutAdditionalAgreements
    from "../../assets/content/shared/projectAdvantages/services/without-additional-agreements.svg";
import projectAdvantagesServicesItemImgMaintenance
    from "../../assets/content/shared/projectAdvantages/services/maintenance.svg";
import projectAdvantagesServicesItemImgWithoutAdditionalRent
    from "../../assets/content/shared/projectAdvantages/services/rent.svg";

import projectAdvantagesCharacteristicsItemImgGasified
    from "../../assets/content/shared/projectAdvantages/characteristics/gasified.svg";
import projectAdvantagesCharacteristicsItemImgWindows
    from "../../assets/content/shared/projectAdvantages/characteristics/windows.svg";
import projectAdvantagesCharacteristicsItemImgVentilated
    from "../../assets/content/shared/projectAdvantages/characteristics/ventilated.svg";
import projectAdvantagesCharacteristicsItemImgSeismic
    from "../../assets/content/shared/projectAdvantages/characteristics/seismic.svg";


import youtubeLinkBackgroundPc from "../../assets/content/projects/garden-inn/youtubeLink/01-pc.jpg"
import youtubeLinkBackgroundMobile from "../../assets/content/projects/garden-inn/youtubeLink/01-mobile.jpg"
import {useTranslation} from "react-i18next";

const ProjectGardenInnPage = () => {
    const {t} = useTranslation();
    const projectInfoData = {
        imgPc: projectInfoImgPc,
        name: 'Batumi Garden Inn',
        address: 'Batumi, Absaros First Lane, 5',
        completedOn: t('projects.gidd'),
        paymentOptions: t('projects.po'),
        downPayment: '30%',
        progressImg: projectInfoProgressImg
    }

    const projectAdvantagesData = {
        infrastructureArray: [
            {
                img: projectAdvantagesInfrastructureItemImgHealth,
                text: t('projects.gi01'),
            },
            {
                img: projectAdvantagesInfrastructureItemImgBarbecue,
                text: t('projects.gi02'),
            },
            {
                img: projectAdvantagesInfrastructureItemImgSport,
                text: t('projects.lva02')
            },
            {
                img: projectAdvantagesInfrastructureItemImgParking,
                text: t('projects.lva03')

            },
            {
                img: projectAdvantagesInfrastructureItemImgPlayground,
                text: t('projects.playground')

            },
        ],
        servicesArray: [
            {
                img: projectAdvantagesServicesItemImgApartmentService,
                text: t('projects.lva05'),
            },
            {
                img: projectAdvantagesServicesItemImgMaintenance,
                text: t('projects.gi03'),
            },
            {
                img: projectAdvantagesServicesItemImgWithoutAdditionalRent,
                text: t('projects.gi04'),
            },
            {
                img: projectAdvantagesServicesItemImgWithoutAdditionalAgreements,
                text: t('projects.lva06'),
            },

        ],
        characteristicsArray: [
            {
                img: projectAdvantagesCharacteristicsItemImgGasified,
                text: t('projects.lva07'),
            },
            {
                img: projectAdvantagesCharacteristicsItemImgWindows,
                text: t('projects.lva08'),
            },
            {
                img: projectAdvantagesCharacteristicsItemImgVentilated,
                text: t('projects.lva09'),
            },
            {
                img: projectAdvantagesCharacteristicsItemImgSeismic,
                text: t('projects.lva10'),
            },
        ]
    }

    const topProjectSliderImagesArray = [
        sliderTopImage01,
        sliderTopImage02,
        sliderTopImage03,
        sliderTopImage04,
        sliderTopImage05
    ]

    const bottomProjectSliderImagesArray = [
        sliderBottomImage01,
        sliderBottomImage02,
        sliderBottomImage03,
        sliderBottomImage04,
        sliderBottomImage05
    ]

    return (
        <main>
            <Header/>
            <Background img={backgroundImg}/>
            <ProjectInfo data={projectInfoData}/>
            <ProjectSlider imagesArray={topProjectSliderImagesArray}
                           delay={5000}/>
            <ProjectSlider imagesArray={bottomProjectSliderImagesArray}
                           delay={3000}
                           hideOnMobile={true}/>
            <ProjectAdvantages data={projectAdvantagesData}/>
            <ProjectGardenInnInteraction/>
            <YoutubeLink
                link='https://youtu.be/ekjF-ZMV2X8'
                backgroundPc={youtubeLinkBackgroundPc}
                backgroundMobile={youtubeLinkBackgroundMobile}/>
            <ContactsLink/>
            <Footer/>
        </main>
    );
};

export default ProjectGardenInnPage;