import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {  baseURL } from "../Components/constant";

const useRequestedData = (endpoint, initialState) => {
  const [data, setData] = useState(initialState);
  

  const getData = () => {
   
    axios
      .get(`${baseURL}${endpoint}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.response.data.message);
        
      });
  };

  useEffect(() => {
    getData();
  }, [endpoint]);

  return [data, getData];
};

export default useRequestedData;