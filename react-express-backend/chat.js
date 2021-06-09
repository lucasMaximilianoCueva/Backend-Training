import mongoose from "mongoose"

const Schema = mongoose.Schema

export class ChatDB {
  constructor() {
    this.url = "mongodb://localhost:27017/ecommerce";

    this.chatSchema = new Schema({
      author: String,
      time: String,
      text: String,
    });

    this.chatDAO = mongoose.model("messages", this.chatSchema);

    mongoose.connect(
      this.url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      },
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("chat connected to the base");
        }
      }
    );
  }
 
  insert(items) {
    return this.chatDAO.create(items)
  }
  list() {
    return this.chatDAO.find({});
  }
}

const chat = new ChatDB();

export { chat };