import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAccessToken, getMailFromToken } from '../utils/auth';
import jwt, {JwtPayload} from 'jsonwebtoken';

interface User {
  email: string;
}

const useAuth = (): User | null => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      let accessToken = getAccessToken();
      if (!getMailFromToken(accessToken)) {
        router.push('/login');
      } else {
        const decodedToken = jwt.decode(accessToken) as JwtPayload;
        setUser(decodedToken?.mail);
        console.log("Utilisateur:" + user);
      }
    };

    checkAuth();
  }, [router]);

  return user;
};

export default useAuth;
