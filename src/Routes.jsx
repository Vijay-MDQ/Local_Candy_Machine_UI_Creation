import { useRoutes } from 'react-router-dom'
import NewLogin from './Components/NewLogin';
import SignUp from './Components/SignupForm';
import ForgotPassword from './Components/ForgotPassword';
import Lands from './Components/Lands';
import Home from './Components/Home';
import ProfileEmployeeDialog from './Components/profile';
import ListedLands from './Components/ListedLands';
import ProjectionTable from './Components/ProjectionTable';
import AdminProfileForm from './Components/AdminProfileForm';
import AfforestationForm from './Components/AfforestationForm';
import BuyersForm from './Components/BuyersForm';
import CRICarbonForm from './Components/CRICarbonForm';
import GoProjectDeveloperForm from './Components/GoProjectDeveloperForm';
import InvesterProfileForm from './Components/InvestForm';
import PlantationForm from './Components/PlantationForm';
import VVBForm from './Components/VVBForm';
import GovtAgencyForm from './Components/GovtAgencyForm';
import UserProfile from './Components/UserProfile';
import InvestedLands from './Components/InvestedLands';
// PAGE COMPONENTS




//this variable is for local development 
export const startUrl = `/`;



function Routes() {


    return useRoutes([
        {
            path: startUrl,
            element: <NewLogin />
        },
        {
            path:'signup',
            element:<SignUp />
        },
        {
            path:'resetpassword',
            element:<ForgotPassword />
        },
        {
            path: 'home',
            element: <Home />
        },
        {
            path: 'listedlands',
            element: <ListedLands />,
        },
        {
            path: 'addyourlands',
            element: <Lands />,
        },
        {
            path: 'profile',
            element: <UserProfile />,
        },
        {
            path: 'projection',
            element: <ProjectionTable />,
        },
                {
            path: 'adminprofileform',
            element: <AdminProfileForm />
        },
        {
            path: 'afforestationform',
            element: <AfforestationForm />
        },
        {
            path: 'buyersform',
            element: <BuyersForm />
        },
        {
            path: 'cricarbonform',
            element: <CRICarbonForm />
        },
        {
            path: 'goprojectdeveloperform',
            element: <GoProjectDeveloperForm />
        },
        {
            path: 'investorprofileform',
            element: <InvesterProfileForm />
        },
        {
            path: 'planationform',
            element: <PlantationForm />
        },
        {
            path: 'vvbform',
            element: <VVBForm />
        },
                {
            path: 'investedlands',
            element: <InvestedLands />
        },
        {
            path: 'govtagencyform',
            element: <GovtAgencyForm />
        },
    ]);
}

export default Routes