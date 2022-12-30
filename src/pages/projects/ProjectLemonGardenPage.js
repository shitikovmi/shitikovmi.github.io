import {ProjectInfo,
        ProjectSlider,
        ProjectAdvantages} from "../../components/Project";
import {Header,
        Footer,
        Background,
        YoutubeLink,
        ContactsLink} from "../../components/shared"

import projectInfoImgPc from "../../assets/content/projects/lemon-garden/projectInfo/02-pc.png";

import projectInfoProgressImg from "../../assets/content/projects/lemon-garden/projectInfo/01.svg";

import backgroundImg from "../../assets/content/shared/background/01.svg"

import sliderTopImage01 from "../../assets/content/projects/lemon-garden/projectSlider/top/01.jpg"
import sliderTopImage02 from "../../assets/content/projects/lemon-garden/projectSlider/top/02.jpg"
import sliderTopImage03 from "../../assets/content/projects/lemon-garden/projectSlider/top/03.jpg"

import sliderBottomImage01 from "../../assets/content/projects/lemon-garden/projectSlider/bottom/01.jpg"
import sliderBottomImage02 from "../../assets/content/projects/lemon-garden/projectSlider/bottom/02.jpg"
import sliderBottomImage03 from "../../assets/content/projects/lemon-garden/projectSlider/bottom/03.jpg"

import projectAdvantagesInfrastructureItemImgHealth from
        "../../assets/content/shared/projectAdvantages/infrastructure/health.svg"
import projectAdvantagesInfrastructureItemImgSport from
        "../../assets/content/shared/projectAdvantages/infrastructure/sport.svg"
import projectAdvantagesInfrastructureItemImgParking from
        "../../assets/content/shared/projectAdvantages/infrastructure/parking.svg"
import projectAdvantagesInfrastructureItemImgGarden from
        "../../assets/content/shared/projectAdvantages/infrastructure/garden.svg"

import projectAdvantagesServicesItemImgWithoutAdditionalAgreements from
        "../../assets/content/shared/projectAdvantages/services/without-additional-agreements.svg"
import projectAdvantagesServicesItemImgApartmentService from
        "../../assets/content/shared/projectAdvantages/services/apartment-service.svg"

import projectAdvantagesCharacteristicsItemImgGasified from
        "../../assets/content/shared/projectAdvantages/characteristics/gasified.svg"
import projectAdvantagesCharacteristicsItemImgVentilated from
        "../../assets/content/shared/projectAdvantages/characteristics/ventilated.svg"
import projectAdvantagesCharacteristicsItemImgWindows from
        "../../assets/content/shared/projectAdvantages/characteristics/windows.svg"
import projectAdvantagesCharacteristicsItemImgSeismic from
        "../../assets/content/shared/projectAdvantages/characteristics/seismic.svg"

import youtubeLinkBackgroundPc from "../../assets/content/projects/lemon-garden/youtubeLink/01-pc.jpg"
import youtubeLinkBackgroundMobile from "../../assets/content/projects/lemon-garden/youtubeLink/01-mobile.jpg"
import {useTranslation} from "react-i18next";
import projectAdvantagesInfrastructureItemImgPlayground
    from "../../assets/content/shared/projectAdvantages/infrastructure/playground.svg";
import ProjectLemonGardenInteraction
    from "../../components/Project/ProjectInteraction/ProjectLemonGardenInteraction/ProjectLemonGardenInteraction";

const ProjectLemonGardenPage = () => {
    const {t} = useTranslation();
    const projectInfoData = {
        imgPc: projectInfoImgPc,
        name: 'Lemon Garden Residence & SPA',
        address: 'Batumi, 12 Zgvyspyris Street',
        completedOn: t('projects.bgrdd'),
        paymentOptions: t('projects.po'),
        downPayment: '30%',
        progressImg: projectInfoProgressImg
    }

    const topProjectSliderImagesArray = [
        sliderTopImage01,
        sliderTopImage02,
        sliderTopImage03
    ]

    const bottomProjectSliderImagesArray = [
        sliderBottomImage01,
        sliderBottomImage02,
        sliderBottomImage03
    ]

    const projectAdvantagesData = {
        infrastructureArray: [
            {
                img: projectAdvantagesInfrastructureItemImgHealth,
                text: t('projects.lva01'),
            },
            {
                img: projectAdvantagesInfrastructureItemImgSport,
                text: t('projects.lva02'),
            },
            {
                img: projectAdvantagesInfrastructureItemImgParking,
                text: t('projects.lva03'),

            },
            {
                img: projectAdvantagesInfrastructureItemImgGarden,
                text: t('projects.lva04'),
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
                img: projectAdvantagesServicesItemImgWithoutAdditionalAgreements,
                text: t('projects.lva06'),
            }
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
            <ProjectLemonGardenInteraction/>
            <YoutubeLink
                link='https://youtu.be/jIjzgC6zieY'
                backgroundPc={youtubeLinkBackgroundPc}
                backgroundMobile={youtubeLinkBackgroundMobile}/>
            <ContactsLink/>
            <Footer/>
        </main>
    );
};

export default ProjectLemonGardenPage;