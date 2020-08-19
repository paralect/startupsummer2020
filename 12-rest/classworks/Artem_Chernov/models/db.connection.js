const mongoose = require('mongoose');

mongoose.connect('There was my connection string to database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
}, err => {
  if(err) {
    console.log("mongodb error", err)

  } else {
    console.log("DB connected")
  }
});

require('./user.model')
require('./resourse.model')
