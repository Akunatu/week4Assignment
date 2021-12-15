import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const todoSchema = Schema({
    title: String,
    description: String,
    dateTime: String,
    completed: Boolean,
});


const myTodoModel = model('Akunatu', todoSchema)
export default myTodoModel;
