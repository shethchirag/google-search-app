import axios from "axios";
const BASE_URL = "https://www.googleapis.com/customsearch/v1";
const params = {
  key: "AIzaSyDW8Lul1dJPfgO2eCcX3_QJAolWyKiARXE",
  cx: "35c1e05be33b64132",
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
