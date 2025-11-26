import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();
// heroku não precisa, mas local precisa


const connectDB = async () => {
  try {
    
    const mongoURI = process.env.MONGODB_URI 

    await mongoose.connect(mongoURI);
    console.log('MongoDB conectado com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
