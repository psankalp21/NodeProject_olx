import express from 'express';
import dbConn from './database/db.connection'; 
import routes from './routes/index.route';
import swaggerRouter from './swagger';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(swaggerRouter);

app.use('/node', routes);

// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.findAll();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching result' });
//   }
// });

const startServer = async () => {
  try {
    await dbConn.authenticate();
    console.log('Database connection successful')
    await dbConn.sync();

    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
