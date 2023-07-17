import {BrowserRouter, HashRouter, Routes, Route} from "react-router-dom"
import { HOME, DASHBOARD, PROFILE, SETTINGS, BILLING, APIDOCS, CONTACT, CREATEQR } from "./config/paths";
import PageContainer from "./components/pageContainer/PageContainer";
import Dashboard from "./screens/dashboard/Dashboard";
import Profile from "./screens/profile/Profile";
import Settings from "./screens/settings/Settings";
import Billing from "./screens/billing/Billing"
import Contact from "./screens/contact/Contact"
import Apidocs from "./screens/apidocs/Apidocs"
import CreateQR from "./screens/createQR/CreateQR";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ HOME } element={<PageContainer/>} >
                    <Route index element={<CreateQR/>}/> 
                    <Route path={ CREATEQR } element={<CreateQR/>} />
                    <Route path={ PROFILE } element={<Profile/>} />
                    <Route path={ SETTINGS } element={<Settings/>} />
                    <Route path={ BILLING } element={<Billing/> } />
                    <Route path={ CONTACT } element={<Contact/> } />
                    <Route path={ APIDOCS } element={<Apidocs/> } />
                </Route>    
            </Routes>
        </BrowserRouter> 
    );
}

export default App

