import axios from 'axios';
import jwt, { JwtPayload } from 'jsonwebtoken';

const ACCESS_TOKEN_SECRET = process.env.PRIVATE_KEY || 'secret';

interface User {
  id: string;
  email: string;
}

export const verifyToken = (token: string | null): User | null => {
  if (!token) return null;
  try {
    return jwt.verify(token, ACCESS_TOKEN_SECRET) as User;
  } catch (error) {
    return null;
  }
};

export const getMailFromToken = (token: string | null): string | null => {
  return jwt.decode(token).mail
}

export const getAccessToken = (): string | null => {
  return localStorage.getItem('accessToken');
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem('refreshToken');
};

export const setTokens = (accessToken: string, refreshToken: string): void => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

export const refreshAccessToken = async (): Promise<string | null> => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) return null;

  try {
    const response = await axios.post('http://localhost:3001/refresh', { headers: { Authorization: `Bearer ${refreshToken}` } });
    const { accessToken, refreshToken: newRefreshToken } = response.data;
    setTokens(accessToken, newRefreshToken);
    return accessToken;
  } catch (error) {
    console.error('Error refreshing access token:', error);
    return null;
  }
};
