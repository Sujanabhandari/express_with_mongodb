const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({

  name: { type: String, required: true,minLength: 2,  maxLength: 255 },
  first_name: { type: String, minLength: 2, required: true },
  email : { type: String, required: true, unique: true,
    match:/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
  }
  // name: { type: String, required: true },
  // first_name: { type: String, required: true },
  // email : { type: Number, required: true },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
