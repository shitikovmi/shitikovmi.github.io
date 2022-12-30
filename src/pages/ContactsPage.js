import {Header,
        Footer,
        Background} from "../components/shared"
import {ContactsFeedback,
        ContactsMap} from "../components/Contacts"

import backgroundImg from '../assets/content/shared/background/01.svg'

const ContactsPage = () => (
    <main>
        <Header/>
        <Background img={backgroundImg}/>
        <ContactsMap/>
        <ContactsFeedback/>
        <Footer/>
    </main>
);

export default ContactsPage;