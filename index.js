import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

import generalRoutes from "./routes/general.js";
import clientRoutes from "./routes/client.js";

// data imports
import User from "./models/User.js";
import Logs from "./models/Log.js";
import Patient from "./models/Patient.js";
import { dataUser, dataPatient} from "./data/index.js";


dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy : "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use("/general", generalRoutes);
app.use("/client", clientRoutes);



const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`server port ${PORT}`));
    // Patient.insertMany(dataPatient);
}).catch((error) => console.log(`${error} didn't connect`));

