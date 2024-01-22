import asyncHandler from "../Utils/asyncHandler.js";
import expenseService from "./Service.js"

// Adding Expenses
const addExpense = asyncHandler ( async (req , res) => {
    const expense = req.body;
    const result = await expenseService.addExpenses(expense)
    res.status(201).json(result)

})

// Fetching Expense
const fetchExpense = asyncHandler (async (req , res) => {
    const myExpense = await expenseService.getExpenses()
    res.status(200).json(myExpense)
})

// Deleting Expense
const deleteExpense = asyncHandler( async (req , res) => {
    const id = req.params.expenseId;
    await expenseService.removeExpense(id)
    res.status(200).json({message: "Expense Removed Successfully"})
})

export default {addExpense , fetchExpense , deleteExpense}