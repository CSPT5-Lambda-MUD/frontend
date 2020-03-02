import axios from 'axios';

export const axiosWithAuth = () => {
  //Get token fron local storage
  const token = localStorage.getItem('token');

  return axios.create({
    //Take token from local storage and place it in the headers
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`
    }
  });
};
