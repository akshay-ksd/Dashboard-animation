import axios from 'axios';
import React from 'react';
import {BaseUrl} from '../../../../../staging';

const usegetUserDetails = () => {
  const getUserDetails = async (page: number) => {
    let response = false;
    try {
      let res = await axios.get(
        `https://randomuser.me/api/?page=${page}&results=${10}`,
      );
      response = res?.data;
    } catch (err) {
      console.log('err', err);
      response = false;
    }
    return response;
  };

  return {getUserDetails};
};

export default usegetUserDetails;
