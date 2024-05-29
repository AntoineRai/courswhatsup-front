import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAccessToken, refreshAccessToken, getMailFromToken } from '../utils/auth';
import jwt from 'jsonwebtoken';

interface User {
  email: string;
}

const useAuth = (): User | null => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      let accessToken = getAccessToken();
      if (!jwt.decode(accessToken)?.mail) {
        router.push('/login');
      } else {
        setUser(jwt.decode(accessToken)?.mail);
        console.log("Utilisateur:" + user);
      }
    };

    checkAuth();
  }, [router]);

  return user;
};

export default useAuth;
