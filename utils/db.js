const mongoose = require("mongoose");
const cwr = require("./createWebResp");
const config = require("../config/db");

const MONGODB_NAME = config.mongodb_name;
const MONGODB_USER = config.mongodb_user;
const MONGODB_PASSWORD = config.mongodb_password;
const MONGODB_URL = config.mongodb_url;

const connect = async (DB_URI) => {
  try {
    if (mongoose.connection.readyState) {
      return mongoose.connection;
    } else {
      const connection = await mongoose.connect(DB_URI, {
        user: MONGODB_USER,
        pass: MONGODB_PASSWORD,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        socketTimeoutMS: 5 * 60 * 1000, // socket timeout 5 minutes
      });
      console.log("Success DB Connection");
      return connection;
    }
  } catch (err) {
    console.log("connection error : ", err);
    throw err;
  }
};

const connectDB = async () => {
  const DB_URI = `mongodb://${MONGODB_URL}/${MONGODB_NAME}`;
  console.log("DB URI : ", DB_URI);
  try {
    await connect(DB_URI);
  } catch (error) {
    console.log("DB 연결 오류 : ", error);
    cwr.errorWebResp(res, 500, { error: "error" }, error);
  }
};

// middleWare 사용
const tryConDB = async (req, res, next) => {
  await this.connectDB().catch((error) => {
    cwr.errorWebResp(res, 500, { error: "error" }, error);
  });
  next();
};

const close = () => {
  mongoose.connection.close();
};

module.exports = {
  connectDB,
  tryConDB,
  close,
};
