import mongoose from "mongoose";
async function connecttodatabase() {
   console.log(process.env.DBURL)
    await mongoose.connect(process.env.DBURL)
    console.log('connect to db')

    
}
export default connecttodatabase;