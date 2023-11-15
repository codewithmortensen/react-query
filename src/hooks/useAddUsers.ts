import { useMutation, useQueryClient } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import { USER_CACHED_KEY } from '../types/constant';
import { User, UserContext } from '../types/definitions';

const useAddUsers = () => {
  const queyClient = useQueryClient();
  const client = new APIClient<User>('/users');

  const addUser = useMutation<User, Error, User, UserContext>({
    mutationFn: (user: User) => client.post(user),
    onMutate: (newUser: User) => {
      const previousUsers =
        queyClient.getQueryData<User[]>(USER_CACHED_KEY) || [];
      queyClient.setQueryData<User[]>(USER_CACHED_KEY, (users = []) => [
        newUser,
        ...users,
      ]);
      return { previousUsers };
    },

    onSuccess: (savedUser, newUser) => {
      queyClient.setQueryData<User[]>(USER_CACHED_KEY, (users) =>
        users?.map((user) => (user === newUser ? savedUser : user))
      );
    },

    onError(_error, _variables, context) {
      if (!context) return;
      queyClient.setQueryData(USER_CACHED_KEY, context.previousUsers);
    },
  });

  return { addUser };
};

export default useAddUsers;
