import { PROVIDER_GET, PROVIDER_POST } from "../provider";

export const getUsers = async () => {
  const response = await PROVIDER_GET(`/api/users`);
  return response;
};

export const register = async (data) => {
  const response = await PROVIDER_POST(`api/auth/register`, data);
  return response;
};

export const login = async (data) => {
  const response = await PROVIDER_POST(`api/auth/login`, data);
  return response;
};
