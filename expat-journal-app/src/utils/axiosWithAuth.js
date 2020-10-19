import axios from "axios";
/////////////////////
//      AXIOS      //
/////////////////////
const axiosWithAuth = () => {
  return axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    baseURL: "https://expatjournal-api.herokuapp.com/",
  });
};
export default axiosWithAuth;