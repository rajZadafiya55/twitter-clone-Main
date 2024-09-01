import mongoose from "mongoose";

<<<<<<< HEAD
const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongoDb connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connection to mongoDB: ${error.message}`);
    process.exit(1);
  }
};

=======
const connectMongoDB = async() =>{
    try 
    {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongoDb connected: ${conn.connection.host}`);
    }
    catch(error)
    {
        console.error(`Error connection to mongoDB: ${error.message}`);
        process.exit(1);

    }
} 

>>>>>>> 3a13693152e846d21da9435cad54d949d37ac1c5
export default connectMongoDB;
