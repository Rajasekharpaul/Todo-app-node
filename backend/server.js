const express = require('express');
const connectdb = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();

connectdb();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use("/api/todo", require("./routes/todoRouter"));

// Error handling middleware
app.use(require("./middleware/errorHandler"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
});