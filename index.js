import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import myschoolModel from "./modules/school_schema.js";


dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const DB = process.env.DB_URL;
app.use(express.json());

app.get('/student', async (req, res) => {
    const getAllstudent = await myschoolModel.find({}).limit(3)
    if (getAllstudent) {
        return res.status(200).json({
            status: true,
            message: 'student load successful',
            data: getAllstudent
        })
    } else {
        return res.status(404).json({
            statuus: 'Failed to load student',
        })
    }
})


app.post('/student', async (req, res) => {
    const { first_name, last_name, date_of_birth, school } = req.body
    const addNewstudent = await myschoolModel.create({
        first_name,
        last_name,
        date_of_birth,
        school,
    })
    if (addNewstudent) {
        return res.status(200).json({
            status: true,
            message: 'student add successul',
            data: addNewstudent

        })

    } else {
        return res.status(404).json({
            status: false,
            message: 'student add failed',
        })
    }
})


mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('conection successful')
}).catch((err) => {
    console.log(err)
})


app.listen(port, function () {
    console.log('App is listening to port ' + port);

})










