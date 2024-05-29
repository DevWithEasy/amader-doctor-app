import API_URL from "./api_url";
import m_doctor from '../assets/doctor_male.png'
import f_doctor from '../assets/doctor_female.png'

const find_image_url=(user)=>{
    if(user.gender === 'Male' && user.image.url === '/image/users/default_profile.png'){
        return m_doctor
    }else if(user.gender === 'FeMale' && user.image.url === '/image/users/default_profile.png'){
        return f_doctor
    }else{
        return {
            uri : `${API_URL}/${user?.image?.url}`
        }
    }
}

export default find_image_url;