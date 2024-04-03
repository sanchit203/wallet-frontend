import { jwtDecode } from "jwt-decode";
import { setLogin } from "../feature/loginSlice";
import { MILLISECONDS_IN_A_DAY } from "../constant/Time";

export const AUTH_TOKEN_KEY = "Authorization";

export const getAccessTokenAndTTLFromLocalStorage = () => {
  const storedSecret = localStorage.getItem(AUTH_TOKEN_KEY);

  if (storedSecret) {
    const { accessToken, ttl } = JSON.parse(storedSecret);
    return { accessToken, ttl };
  } else {
    return undefined;
  }
};

export const checkLocalStorageForAccessTokenAndValidateItsTTL = dispatch => {
  const accessTokenAndTTL = getAccessTokenAndTTLFromLocalStorage();

  if (accessTokenAndTTL) {
    const { ttl } = accessTokenAndTTL;

    if (ttl - new Date().getTime() < -1) {
      dispatch(setLogin(false));
      localStorage.removeItem(AUTH_TOKEN_KEY);
    } else {
      dispatch(setLogin(true));
    }
  } else {
    dispatch(setLogin(false));
  }
};

export const setAccessTokenAndTTL = (accessToken) => {
  const ttl = Number(new Date().getTime() + MILLISECONDS_IN_A_DAY);
  const accessTokenAndTTL= {
    accessToken,
    ttl
  }

  localStorage.setItem(
    AUTH_TOKEN_KEY,
    JSON.stringify(accessTokenAndTTL)
  );
}

export const getRoles = () => {
  const accessToken = getAccessTokenAndTTLFromLocalStorage();

  if(accessToken) {
    const decodedToken = jwtDecode(accessToken);
    return decodedToken.roles;
  }

  return [];
}