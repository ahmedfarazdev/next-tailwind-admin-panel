import mongoose from 'mongoose'

let isConnected = false;

export const connectToDB = async () =>{
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("MongoDb is Already Connected!");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_DB_URI, {
            dbName: "admin_panel",
            useNewUrlParser: true,
            useUnifiedTopology:true,
        })

        isConnected = true;

        console.log('MongoDb Connected');
    } catch(error){
        console.log(error);
    }
}