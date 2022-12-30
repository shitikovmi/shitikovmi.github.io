import {Header,
        Footer} from "../components/shared"
import {HomeAbout,
        HomeAdvantages,
        HomeProjects,
        HomeIntroduction,
        HomeExperience,
        HomeContactForm,
        HomeUsefulInformation} from "../components/Home"

const HomePage = () => (
    <main>
        <Header/>
        <HomeIntroduction/>
        <HomeProjects/>
        <HomeAdvantages/>
        <HomeAbout/>
        <HomeExperience/>
        <HomeUsefulInformation/>
        <HomeContactForm/>
        <Footer/>
    </main>
)

export default HomePage;