var express = require("express");
var router = express.Router();

const {
  create_new_Student, get_student_list, retrieve_student_by_id, update_one_field_of_student
  ,update_all_field_of_student
} = require("../controllers/student_controller");
/* GET users listing. */

router.route('/').post(create_new_Student).get(get_student_list);

router.route('/:id').get(retrieve_student_by_id).put(update_all_field_of_student).patch(update_one_field_of_student);
module.exports = router;
