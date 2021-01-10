import axios from "axios";
import { API_URL, API_PATH } from "../constants/path";
import { ILogin } from "../interface/auth";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const login = async (loginInfo: ILogin) => {
  const res = await axios.post(
    `${API_URL}${API_PATH.login()}`,
    loginInfo,
    config
  );
  return res;
};
