import asyncHandler from "../Utils/asyncHandler.js";
import incomeService from "./Service.js"

// Adding Income
const addIncome = asyncHandler ( async(req , res) => {
    const income = req.body;
    const result = await incomeService.addIncome(income)
    res.status(201).json(result)

})

// Fetching Income
const fecthIncome = asyncHandler (async (req , res) => {
    const myIncome = await incomeService.getIncome()
    res.status(200).json(myIncome)
})

// Deleting Income
const deleteIncome = asyncHandler( async (req , res) => {
    const id = req.params.incomeId;
    await incomeService.removeIncome(id)
    res.status(200).json({message:"Income removed Successfully"})
})

export default {addIncome , fecthIncome , deleteIncome}