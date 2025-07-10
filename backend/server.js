


import express from 'express';
import { connectDatabase } from './config/database.js';
import infoRoutes from './routes/infoRoutes.js';


const app = express();
const PORT = process.env.PORT;

app.use(express.json());
connectDatabase();

// this is the route where you can fetch all the data from your 'Info' Database collection
// instead of using /api/info in every routes, you will state here that every '/api/info' will use the infoRoutes.js file
app.use("/api/info", infoRoutes)



app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);


}); 