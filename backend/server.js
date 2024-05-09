require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require('./routes/authRoute');

const app = express()
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use("/api",authRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => console.log(`Server started on port ${port}`));
    })
    .catch(err => console.log(err));


