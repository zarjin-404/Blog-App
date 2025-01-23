import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function isLogeding() {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Unauthorized or session expired. Please log in again.');
      }

      navigate('/');
    };
    fetchUserProfile();
  }, []);
}
