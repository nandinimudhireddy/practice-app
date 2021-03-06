import { useState, useEffect } from "react";


const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Something went wrong...");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsloading(false);
          setError(false);
        })
        .catch((err) => setError(err.message), setIsloading(false));
    }, 1000);
  }, [url]);
  return { data, isloading, error };
};

export default useFetch;
