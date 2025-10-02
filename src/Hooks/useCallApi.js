import { useEffect, useState } from "react";

const useCallApi = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!url) return;
    const getDate = async () => {
      try {
        const responce = await fetch(url);
        const res = await responce.json();
        setData(res);
      } catch (e) {
        console.error("Error Occured :", e);
        setData(null);
      }
    };
    getDate();
  }, [url]);
  return data;
};

export default useCallApi;
