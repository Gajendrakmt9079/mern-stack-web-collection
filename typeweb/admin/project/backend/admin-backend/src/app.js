import express from "express";

import cors from "cors";
import clientsrouter from "./routes/clients.routes.js";
import router from "./routes/User.routes.js";


const app = express(); 

app.use(cors());
app.use(express.json());
app.use("/api/users", clientsrouter); 
app.use('/api/admin', router);

export { app };
