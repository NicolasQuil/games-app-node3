const mongoose = require('mongoose');
const {config} = require("../config/secret")
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://${config.userDB}:${config.userPass}@clustercats.7pkwn7o.mongodb.net/idfb`);
  console.log("mongo connect idfb atlas ");

}