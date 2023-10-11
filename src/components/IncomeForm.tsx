import {FormEvent, ChangeEvent, useState} from 'react';

import {formTypes} from '../types/componentsTypes';

const IncomeForm = () => {

    const [income, setIncome] = useState<formTypes>({ 
        source: '', 
        amount: 0,
        date: ''
    });

    const [incomes, setIncomes] = useState<formTypes[]>([]) 

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setIncome((prevIncome) => {
            return {...prevIncome, [name]: value}
        })
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if(income.source && income.amount && income.date){
            //add income to incomes array
            setIncomes((prevIncomes) => {
                return [...prevIncomes, income]
            })
            setIncome({
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
                    <label htmlFor="source">Income source</label>
                    <input type="text" name="source" id="source" value={income.source} onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="amount">Amount of income</label>
                    <input type="number" name="amount" id="amount" value={income.amount} onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="date">Date of income</label>
                    <input type="date" name="date" id="date" value={income.date} onChange={handleChange} required/>
                </div>
                <button>Add income</button>
            </form>

            <ul>
                {incomes.length > 0 && (incomes.map((income, index) => 
                (<li key={index}> {income.source}: {income.amount}SAR on {income.date}</li>)))
                }
            </ul>
        </div>
    );
}

export default IncomeForm;
