import axios from "axios";
<<<<<<< HEAD
///////////////////
    //  AXIOS      //
///////////////////
// const axiosWithAuth = () => {
//   const token = localStorage.getItem()
  
//   return axios.create({
//     headers: {
//       Authorization: token
//     },
//     baseURL: "https://expatjournal-api.herokuapp.com/",
//   });
// };
// export default axiosWithAuth;
=======
/////////////////////
//      AXIOS      //
/////////////////////
const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  
  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "https://expatjournal-api.herokuapp.com/api",
  });
};
export default axiosWithAuth;
>>>>>>> f5a5f170e59e24fb146ecb62ca4eaa81f82a51bf
