import { ListGroup } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const UserSkeleton = () => {
  const users = [1, 2, 3, 4, 5];
  return (
    <div>
      <ListGroup>
        {users.map((user) => (
          <ListGroup.Item key={user}>
            <Skeleton />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default UserSkeleton;
