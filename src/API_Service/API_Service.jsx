// this is for common path for api

// this is for development server 
const baseApiurl = `https://gogreenverz.in/api/`;


// File Path For LandOwner
const LandOwnerFiles = `https://gogreenverz.in/api/uploading_files/land_owner/`

// File Path For Investor
const InvestorFiles =  `https://gogreenverz.in/api/uploading_files/investor/`

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

export { get_all_user_profile_type,methodGet, methodPost,  user_sign_in, add_investor, user_sign_up, add_land_owner, get_all_land_owner, LandOwnerFiles, InvestorFiles };
