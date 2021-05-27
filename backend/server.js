import express from 'express';
import dotenv from 'dotenv';
import data from './data.js'
import portfolioRouter from './routers/portfolioRouter.js';
import mongoose from 'mongoose';
import path from 'path';
// import userRouter from './routers/userRouter.js';
// import uploadRouter from './routers/uploadRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api/uploads', uploadRouter);
// app.use('/api/users', userRouter);
app.use('/api/portfolio', portfolioRouter);

const __dirname = path.resolve();
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

// app.get('/api/portfolio', (req, res) => {
//     res.send(data.portfolio);
//   });  

// app.get('/', ( req, res ) => {
//     res.send('Server  is ready');
// });

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});
