import mongoose from "mongoose"; // Importing Mongoose

const incomeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxLength:50
        },
        amount: {
            type: Number,
            required: true,
            maxLength: 20,
            trim: true
        },
        type: {
            type: String,
            default: "Income"
        },
        date : {
            type: Date,
            required: true,
            trim: true
        },
        category: {
            type: String,
            required: true,
            trim: true
            
        },
        description: {
            type: String,
            required: true,
            maxLength: 20,
            trim: true
        }

    },
    {versionKey:false}
);

const Income =  mongoose.model("Income",incomeSchema)

export default Income

