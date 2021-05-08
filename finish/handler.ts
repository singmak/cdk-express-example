import * as users from './users';

export const getUsers = async () => {
  const result = users.getUsers();
  console.log('result', result);
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
}