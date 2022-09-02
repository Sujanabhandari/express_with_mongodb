const Student = require("../models/Student");

const create_new_Student = async (req, res, next) => {

  const { name, first_name, email } = req.body;

  if (!name || !first_name || !email)
    return res
      .status(400)
      .send("Please provide values for name, first_name and email");
  try {
    // const newStudent = await Student.create(req.body);
    const newStudent = await Student.create({name, first_name, email});
    return res.status(201).send(newStudent);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const get_student_list = async (req, res, next) => {

  const condition = req.query;
  console.log(req.query)
  try {
    const allStudent = await Student.find(condition);
    if (!allStudent.length)
    return res
      .status(400)
      .send(
        "The collection you are trying to query does not contain any documents"
      );
    return res.status(201).send(allStudent);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const retrieve_student_by_id = async (req, res, next) => {
  console.log(req.params)
  const { id } = req.params;
 
  try {

    const foundStudent = await Student.findById(id);

    if (!foundStudent)
      return res.status(404).send(`The student with _id ${id} does not exist`);

    return res.status(200).send(foundStudent);
  } catch (err) {
    console.log(err);
    next(err);
  }
}

const update_all_field_of_student = async(req, res, next) => {
  
  const { id } = req.params;
  console.log(req.body);

 
  try{
    const updatedStudent = await Student.findByIdAndUpdate(id, req.body,
      { new: true });
    return res.status(200).send(updatedStudent)
  }
  catch(err) {
    console.log(err);
    next(err)
  }

}
const update_one_field_of_student = async(req, res, next) => {
  
  const { id } = req.params;
  const { name, first_name, email} = req.body;

  const condition = Object.entries(req.body);
  //if there is no body
  if(!condition.length) return res
  .status(400)
  .send("Please provide a condition for your update operation");

  //if there is a body
  const [[key, value]] = condition;

  try{
    const updatedStudent = await Student.findByIdAndUpdate(id, {
      name, first_name, email
    },
      { new: true });
    return res.status(200).send(updatedStudent)
  }
  catch(err) {
    console.log(err);
    next(err)
  }

}
module.exports = {
    create_new_Student,
    get_student_list,
    retrieve_student_by_id,
    update_all_field_of_student,
    update_one_field_of_student

};
