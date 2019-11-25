import { useState, useEffect } from "react";

const useFetch = (callback, url) => {
  const [fetching, setFetching] = useState(false);

  const fetchInitialData = async () => {
    setFetching(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      callback(data);
      setFetching(false);
    } catch (err) {
      console.error("useFetch:", err);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return fetching;
};

export default useFetch;
