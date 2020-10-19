import axios from "axios";
/////////////////////
//      AXIOS      //
/////////////////////
const axiosWithAuth = () => {
  const token = localStorage.getItem()
  
  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "https://expatjournal-api.herokuapp.com/api",
  });
};
export default axiosWithAuth;