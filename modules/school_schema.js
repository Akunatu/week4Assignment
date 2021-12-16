import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const SchoolSchema = Schema({
    first_name: String,
    last_name: String,
    date_of_birth: String,
    school: String,
});


const mySchoolModel = model('school', SchoolSchema)
export default mySchoolModel;
