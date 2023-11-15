import { zodResolver } from '@hookform/resolvers/zod';
import { FormEvent } from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import useAddUsers from '../hooks/useAddUsers';
import { createUserSchema } from '../types/schema';

type userForm = z.infer<typeof createUserSchema>;
const UserForm = () => {
  const { addUser } = useAddUsers();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<userForm>({
    resolver: zodResolver(createUserSchema),
  });

  const handleSubmitUser = (event: FormEvent) => {
    event.preventDefault();
    handleSubmit((data) => {
      addUser.mutate({
        id: 0,
        name: data.name,
      });
      reset();
    })();
  };

  return (
    <div className='mb-3 sm:w-50' onSubmit={handleSubmitUser}>
      <Form>
        <Stack direction='horizontal' gap={3}>
          <Form.Control
            className='me-auto'
            {...register('name')}
            placeholder='Add your here here...'
          />
          <Button type='submit' disabled={!isValid} variant='dark'>
            Submit
          </Button>
        </Stack>
      </Form>
    </div>
  );
};

export default UserForm;
