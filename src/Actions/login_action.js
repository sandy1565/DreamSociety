import axios from 'axios';
import{URN} from '../constants/index';
export function login(username, password) {
    const request = axios({
        method: 'post',
        url: `${URN}/auth/signin`,
        data: {
            userName: username,
            password:  password
        }
      })
      .then(handleResponse)
      .then((data)=>{
           if(data.status === 200) {
            localStorage.setItem('token', data.accessToken);
            localStorage.setItem('user-type',data.userType)
            console.log('==============', localStorage.getItem('token'));
            console.log('==============', localStorage.getItem('user-type'));

            switch(data.userType) {
                case 'SUPER_ADMIN':
                return  this.history.push('/superDashboard');
                case 'ADMIN':
                return this.history.push('/adminDashboard');
                case 'SOCIETY_MEMBER_OWNER':
                return this.history.push('/ownerDashboard');
                case 'SOCIETY_MEMBER_TENENT':
                return this.history.push('/tenantDashboard');
                case 'VENDOR':
                return this.history.push('/vendorDashboard')
                default :
                return null;
            }
          }
          else if(data.status===401){
            logout();
          }
              
        } 
      ) 
      .catch(error=>{
        return Promise.reject(error);
      })          
    return {
        type: 'USER_LOGIN',
        payload: request
    }
}



function handleResponse(response) {
    console.log("=================",response.data)
    var data={
             accessToken:response.data.accessToken,
             userType:response.data.user.roles[0].roleName,
             auth:response.data.auth,
             status:response.data.status
            }

    return data;
}


function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    localStorage.removeItem('user-type');
}



