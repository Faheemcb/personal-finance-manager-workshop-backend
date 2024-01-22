import Income from "../Models/IncomeModel.js"

// Adding Income
const addIncome = async (data) => {
    try {
        const income = await Income.create(data)
        if (income) {
            return income
        }
    } catch (error) {
        throw error
    }
}

// Fetching Income
const getIncome = async() => {
    try {
        const myIncome = await Income.find().sort({created: -1})
        if (myIncome) {
            return myIncome
        }
    
    } catch (error) {
        throw error
    }
}

// Deleting Income
const removeIncome = async(incomeId) => {
    try {
        const data = await Income.findByIdAndDelete(incomeId)
        if (data) {
            return data
        }
    } catch (error) {
        throw error
    }
}

export default  {addIncome , getIncome ,removeIncome}