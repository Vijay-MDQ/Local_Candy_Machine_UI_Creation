import { useRoutes, Navigate, } from 'react-router-dom'
import NewLogin from './Components/NewLogin';
import SignUp from './Components/SignupForm';
import ForgotPassword from './Components/ForgotPassword';


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
        }
    ]);
}

export default Routes