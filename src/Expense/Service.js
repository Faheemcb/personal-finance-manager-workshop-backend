import Expense from "../Models/ExpenseModel.js"

// Adding Expenses
const addExpenses = async (data) => {
    try {
        const expense = await Expense.create(data)
        if (expense) {
            return expense
        }
    } catch (error) {
        throw error
    }
}

// Fetching Expense
const getExpenses = async() => {
    try {
        const expenses = await Expense.find().sort({created: -1})
        if (expenses) {
            return expenses
        }
    
    } catch (error) {
        throw error
    }
}

// Deleting Expense
const removeExpense = async(expenseId) => {
    try {
        const data = await Expense.findByIdAndDelete(expenseId)
        if (data) {
            return data
        }
    } catch (error) {
        throw error
    }
}

export default  {addExpenses , getExpenses ,removeExpense}