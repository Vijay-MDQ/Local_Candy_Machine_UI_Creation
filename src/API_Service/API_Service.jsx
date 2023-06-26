// this is for common path for api

// this is for development server 
const baseApiurl = `https://gogreenverz.in/api/`;


// File Path For User's Profile image:
const ProfilePic = `https://gogreenverz.in/api/uploading_files/user_image/`


// File Path For LandOwner:
const LandOwnerFiles = `https://gogreenverz.in/api/uploading_files/land_owner/`


// File Path For Investor:
const InvestorFiles =  `https://gogreenverz.in/api/uploading_files/investor/`


// File Path For Project Developer:
const ProjectDeveloperFiles =`https://gogreenverz.in/api/uploading_files/project_developer/`


// File Path For Plantation Partner:
const PlantationFiles = `https://gogreenverz.in/api/uploading_files/plantation_partner/`


// File Path For Verification and Validation Body:
const VVBFiles = `https://gogreenverz.in/api/uploading_files/vvb/`


// File Path For Carbon Registry of India:
const CRIFiles = `https://gogreenverz.in/api/uploading_files/cri/`


// File Path For Government Agencies:
const GOVTFiles = `https://gogreenverz.in/api/uploading_files/government_agency/`


// File Path For Admin:
const AdminFiles = `https://gogreenverz.in/api/uploading_files/admin_profile/`


// File Path For Buyer:
const BuyerFiles =  `https://gogreenverz.in/api/uploading_files/buyer/`


// get method
const methodGet = 'GET';

// post method
const methodPost = 'POST';

//Add Customer Details and project details
const get_all_user_profile_type = `${baseApiurl}get_all_user_profile_type`;

const user_sign_up = `${baseApiurl}user_sign_up`;

const user_sign_in = `${baseApiurl}user_sign_in`;

const add_land_owner = `${baseApiurl}add_land_owner`;

const get_all_land_owner = `${baseApiurl}get_all_land_owner`;

const add_investor = `${baseApiurl}add_investor`;

const add_project_developer = `${baseApiurl}add_project_developer`;

const add_vvb = `${baseApiurl}add_vvb`;

const add_cri = `${baseApiurl}add_cri`;

const add_plantation_partner = `${baseApiurl}add_plantation_partner`;

const add_admin = `${baseApiurl}add_admin`;

const add_buyer = `${baseApiurl}add_buyer`;

const add_afforestation =  `${baseApiurl}add_afforestation`;

const get_state =  `${baseApiurl}get_state`;

const get_district = `${baseApiurl}get_district`;

export { get_all_user_profile_type,add_admin,get_state,get_district, add_afforestation, add_buyer , add_cri, add_plantation_partner, BuyerFiles, AdminFiles, GOVTFiles, CRIFiles, VVBFiles, PlantationFiles, ProjectDeveloperFiles, ProfilePic, methodGet, add_project_developer, add_vvb, methodPost,  user_sign_in, add_investor, user_sign_up, add_land_owner, get_all_land_owner, LandOwnerFiles, InvestorFiles };
