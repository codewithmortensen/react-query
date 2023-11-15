import ListGroup from 'react-bootstrap/ListGroup';
import useUsers from '../hooks/useUsers';
import AlertComponent from './Alert';
import UserSkeleton from './UserSkeleton';

const UserList = () => {
  const { data: users, isLoading, error } = useUsers();
  return (
    <div>
      {error && (
        <AlertComponent variant='danger'>{error.message}</AlertComponent>
      )}
      {isLoading && <UserSkeleton />}
      <ListGroup>
        {users?.map((user) => (
          <ListGroup.Item key={user.id}>{user.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default UserList;
