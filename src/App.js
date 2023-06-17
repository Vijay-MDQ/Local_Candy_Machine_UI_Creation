import './App.css';
import ProfileEmployeeDialog from './Components/profile';
import PurchaseSection from './Components/Lands';
import ListedLands from './Components/ListedLands';
import InvestForm from './Components/InvestForm';
import LoginPage from './Components/LoginPage';
import PlantationForm from './Components/PlantationForm';
import VVB from './Components/VVBForm';
import GovtAgencyForm from './Components/GovtAgencyForm';
import BuyersForm from './Components/BuyersForm';
import CRICarbon from './Components/CRICarbonForm';
import AdminProfileForm from './Components/AdminProfileForm';
import NewLogin from './Components/NewLogin';
import SignUp from './Components/SignupForm';
import ForgotPassword from './Components/ForgotPassword';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import AfforestationForm from './Components/AfforestationForm';
import ProjectionTable from './Components/ProjectionTable';

function App() {
  return (
    <div>
      <ProjectionTable />
    </div>
  );
}

export default App;
