export const getUsers = () => {
  const users = ['John', 'Tom', 'Mary'].map((name, index) => ({
    id: index,
    name,
  }));
  return users;
}