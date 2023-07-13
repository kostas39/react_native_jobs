import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = ({endpoint, query}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const axios = require('axios');

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      'X-RapidAPI-Key': '5014948c37mshe6da381cea2625fp17a01bjsn28ffc9193cba',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request
      (options);

      setData(response.data.data);
      setIsLoading(false);

    } catch (error) {
      alert ('There is an error')
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return { data, isLoading, error, refetch };
}
export default useFetch;
