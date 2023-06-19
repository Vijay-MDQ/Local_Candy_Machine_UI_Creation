import { useRoutes, Navigate, } from 'react-router-dom'
import NewLogin from './Components/NewLogin';
import SignUp from './Components/SignupForm';
import ForgotPassword from './Components/ForgotPassword';
import Lands from './Components/Lands';
import Home from './Components/Home';
import ProfileEmployeeDialog from './Components/profile';
import ListedLands from './Components/ListedLands';


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
            element: <ProfileEmployeeDialog />,
        },
    ]);
}

export default Routes