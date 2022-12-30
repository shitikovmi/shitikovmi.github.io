import {BrowserRouter,
        Route,
        Routes} from "react-router-dom";

import React, { Suspense } from 'react';

import { Blocks } from 'react-loader-spinner'

import ScrollToTop from "../ScrollToTop/ScrollToTop";

import '../../scss/null.scss';
import '../../scss/global.scss';
import '../../scss/fonts.scss';

import firebase from "../../firebase";

const TeamPage = React.lazy(() => import('../../pages/TeamPage'));
const HomePage = React.lazy(() => import('../../pages/HomePage'));
const ContactsPage = React.lazy(() => import('../../pages/ContactsPage'));
const ProjectLemonGardenPage = React.lazy(() => import('../../pages/projects/ProjectLemonGardenPage'));
const ProjectGardenInnPage = React.lazy(() => import('../../pages/projects/ProjectGardenInnPage'));
const ProjectBotanicalGardenResortPage = React.lazy(() => import('../../pages/projects/ProjectBotanicalGardenResortPage'));
const ProjectLuxuryVillasPage = React.lazy(() => import('../../pages/projects/ProjectLuxuryVillasPage'));
const AdminLogInPage = React.lazy(() => import('../../pages/AdminLogInPage'));
const ArticlePage = React.lazy(() => import('../../pages/ArticlePage'));
const AdminEditorPage = React.lazy(() => import('../../pages/AdminEditorPage'));
const PrivacyPolicyPage = React.lazy(() => import('../../pages/PrivacyPolicyPage'));

function App() {
  return (
      <Suspense fallback={<div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100vw',
          color: 'yellow'
      }}>
          <Blocks
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
          />
      </div>}>
          <BrowserRouter>
              <ScrollToTop/>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/our-team" element={<TeamPage/>}/>
                  <Route path="/contacts" element={<ContactsPage/>}/>
                  <Route path="/projects/lemon-garden-residence-&-SPA" element={<ProjectLemonGardenPage/>}/>
                  <Route path="/projects/batumi-garden-inn" element={<ProjectGardenInnPage/>}/>
                  <Route path="/projects/royal-residence-botanico"  element={<ProjectBotanicalGardenResortPage/>}/>
                  <Route path="/projects/luxury-villas"  element={<ProjectLuxuryVillasPage/>}/>
                  <Route path="/useful-information/:id"  element={<ArticlePage/>}/>
                  <Route path="/admin" element={<AdminLogInPage/>}/>
                  <Route path="/admin/editor" element={<AdminEditorPage/>}/>
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
              </Routes>
          </BrowserRouter>
      </Suspense>
  );
}

export default App;