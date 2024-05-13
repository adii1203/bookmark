import mongoose from "mongoose";

type ConnectionObj = {
  isConnected?: number;
};

const connection: ConnectionObj = {};

const connectDB = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI + "/" + process.env.DATABASE_NAME}` || ""
    );
    connection.isConnected = connectionInstance.connections[0].readyState;

    console.log("Database connected");
    // console.log(connectionInstance);
  } catch (error) {
    console.log("Database connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
