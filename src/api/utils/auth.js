export const TOKEN_TYPE = {
  TOKEN: "token",
  REFRESH_TOKEN: "refreshToken",
};

export const setToken = (token, type = TOKEN_TYPE.TOKEN) => {
  localStorage.setItem(type, token);
};

export const getToken = (type = TOKEN_TYPE.TOKEN) => {
  return localStorage.getItem(type);
};

export const removeToken = (type = TOKEN_TYPE.TOKEN) => {
  localStorage.removeItem(type);
};
