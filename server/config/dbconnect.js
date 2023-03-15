const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("connect db successfully"))
    .catch(() => console.log("failed to connect db"));
};

module.exports = dbConnect;
