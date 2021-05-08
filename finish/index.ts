import express from 'express';
import { getUsers } from './users';
// rest of the code remains same
const app = express();
const PORT = 8000;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.get('/users', (req, res) => {
  // COPY start
  const users = getUsers();
  res.json(users);
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
