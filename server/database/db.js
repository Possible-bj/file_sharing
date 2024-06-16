import mongoose from "mongoose";

const DBConnection = async () => {
  const MONGO_URI = "mongodb://localhost:27017/File-sharing";

  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error.message);
  }
};

export default DBConnection;
