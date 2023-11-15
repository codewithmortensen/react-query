import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import { USER_CACHED_KEY } from '../types/constant';
import { User } from '../types/definitions';

const useUsers = () => {
  const client = new APIClient<User>('/users');
  return useQuery<User[], Error>({
    queryKey: USER_CACHED_KEY,
    queryFn: client.getAll,
    staleTime: 1000 * 5,
  });
};
export default useUsers;
