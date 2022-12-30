import {Footer,
        Header,
        Background,
        ContactsLink} from "../components/shared"
import {TeamAbout,
        TeamEmployees,
        TeamAwards} from "../components/Team"

import backgroundImg from '../assets/content/shared/background/01.svg'

const TeamPage = () => (
    <main>
        <Header/>
        <Background img={backgroundImg}/>
        <TeamAbout/>
        <TeamEmployees/>
        <TeamAwards/>
        <ContactsLink/>
        <Footer/>
    </main>
)

export default TeamPage;