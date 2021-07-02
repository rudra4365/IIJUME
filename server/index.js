import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();
app.use(cors());
// app.use(bodyParser.json({ limit: "30mb", exttended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", exttended: true }));
app.use(express.json());

app.use('/posts', postRoutes);
const password = "...iijume...";
const connectionURL = `mongodb+srv://rudra4365:${password}@cluster0.fdpxe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.port || 5000;

mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);