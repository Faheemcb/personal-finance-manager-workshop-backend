import express from 'express';  // Importing Express.js
import dotenv from 'dotenv';   // Importing Dotenv
import connectDb from './Config/db.js'; // Importing Database Connection
import logger from './Middleware/logger.js'; // Importing logger
import NotFoundError from './Exceptions/NotFoundError.js'; // Importing NotFoundError
import { ErrorHandler } from './Utils/errorHandler.js'; // Importing Global Error Handler
import expenseRouter from "../src/Expense/Router.js" // Importing routes of Expense
import incomeRouter from "../src/Income/Router.js" // Importing routes of Income
import swaggerjsdoc from 'swagger-jsdoc' // importing swagger-jsdoc
import swaggerui from 'swagger-ui-express' // imorting swagger-ui-express
import path , { dirname }  from 'path'; // importing path , dirname API'S from path module
import { fileURLToPath } from 'url'; // importing url module
const __dirname = dirname(fileURLToPath(import.meta.url)); // Configuring dirname path


// configuring .env file
dotenv.config({     
    path:"./.env"
})

const app = express()

// Defining Middleware
app.use(express.json())

// Setup swagger
const swaggerDefinition = {
    openapi: "3.0.0",
    info:{
        title:"Expense Tracker",
        version:"1.0.0",
        description:"API FOR EXPENSE TRACKER"
    },
servers: [
    {
        url: "http://localhost:3000"
    },
],

}

// Swagger routes
const options = {
    swaggerDefinition,
    apis: [
        path.join(__dirname,"Expense" , "Router.js"),
        path.join(__dirname,"Income","Router.js"),
    ],
};

const swaggerspecs = swaggerjsdoc(options);
app.use('/api-docs',swaggerui.serve,swaggerui.setup(swaggerspecs,{
    swaggerOptions: {
        docExpansion: "none",
    },
    customSiteTitle: "JobPortal API"
}));

// Defining Routes
app.use("/api/v1/expense",expenseRouter);
app.use("/api/v1/income",incomeRouter);


// Handling unmatched URL'S
app.use("*" , (req , res , next) => {
    const error =  new NotFoundError("Invalid Url")
    next(error)

})

// Global Error Handler
app.use(ErrorHandler)

// Calling Database Connection
connectDb()
.then(() => {
    // After connecting to database, listening to server
    app.listen(process.env.PORT || 4000, () => console.log(`💻 Server is listening on port ${process.env.PORT}`))
})
.catch((err) => {
    logger.error("MongoDB Connection failed",err)

})




