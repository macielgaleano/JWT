const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://conecta2:1234@cluster0.h9yty.mongodb.net/JWT?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((db) => console.log("DB is Connected"));
