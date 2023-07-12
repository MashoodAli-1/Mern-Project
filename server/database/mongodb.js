import mongoose from "mongoose";

const connect = async () => {
  await mongoose.connect(
    // "mongodb+srv://mashood:boom@node-projects.lvpwy1s.mongodb.net/?retryWrites=true&w=majority"
    process.env.CONNECTION_STRING
  );
  console.log("Db connected!");
};

export default connect;
