import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { verifyToken, getAccessToken, refreshAccessToken } from '../utils/auth';

interface User {
  id: string;
  email: string;
}

const useAuth = (): User | null => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      let accessToken = getAccessToken();
      let user = verifyToken(accessToken);

      if (!user) {
        accessToken = await refreshAccessToken();
        user = verifyToken(accessToken);
      }

      if (!user) {
        router.push('/login');
      } else {
        setUser(user);
      }
    };

    checkAuth();
  }, [router]);

  return user;
};

export default useAuth;
