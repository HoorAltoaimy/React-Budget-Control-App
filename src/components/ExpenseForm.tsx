import { ChangeEvent, FormEvent, useState } from "react";

import { formTypes } from "../types/componentsTypes";

const ExpenseForm = () => {

    const [expense, setExpense] = useState<formTypes>({
        source: '',
        amount: 0,
        date: ''
    });

    const [expenses, setExpenses] = useState<formTypes[]>([]) 

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setExpense((prevExpense) => {
            return {...prevExpense, [name]: value}
        })
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if(expense.source && expense.amount && expense.date){
            //add expense to expenses array
            setExpenses((prevExpenses) => {
                return [...prevExpenses, expense]
            })
            setExpense({
            source: '',
            amount: 0,
            date: ''
            });
        }
    }

    return(
        <div className='card'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="source">Expense source</label>
                    <input type="text" name="source" id="source" value={expense.source} onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="amount">Amount of expense</label>
                    <input type="number" name="amount" id="amount" value={expense.amount} onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="date">Date of expense</label>
                    <input type="date" name="date" id="date" value={expense.date} onChange={handleChange} required/>
                </div>
                <button>Add expense</button>
            </form>
            
            <ul>
                {expenses.length > 0 && (expenses.map((expense, index) => 
                (<li key={index}> {expense.source}: {expense.amount}SAR on {expense.date}</li>)))
                }
            </ul>
        </div>
    );
}

export default ExpenseForm;