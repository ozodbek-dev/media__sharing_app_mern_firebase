import mongoose from 'mongoose';
const connectToDB = async (URL)=>{
 mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true}).then((res)=>{
   console.log(`Server has been connected to db on ${res.connection.host}`)
 }).catch(err=>console.log(err.message))
}

export default connectToDB;