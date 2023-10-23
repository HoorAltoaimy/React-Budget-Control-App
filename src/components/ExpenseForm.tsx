import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

import { FormTypes } from "../types/componentsTypes";

type SavingType = {
  getExpense: (myExpense: number) => void;
};

const ExpenseForm = (props: SavingType) => {
  const [expense, setExpense] = useState<FormTypes>({
    id: "",
    source: "",
    amount: 0,
    date: "",
  });

  const [expenses, setExpenses] = useState<FormTypes[]>([]);

  const [invalidInput, setInvalidInput] = useState(false);
  useEffect(() => {
    if (expense.amount < 0) {
      setInvalidInput(true);
    } else {
      setInvalidInput(false);
    }
  }, [expense]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setExpense((prevExpense) => {
      return { ...prevExpense, [name]: value };
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (expense.source && expense.amount && expense.date) {
      const newExpense = { ...expense, id: uuidv4() };
      //add expense to expenses array
      setExpenses((prevExpenses) => {
        return [...prevExpenses, newExpense];
      });
      setExpense({
        id: "",
        source: "",
        amount: 0,
        date: "",
      });
      props.getExpense(expense.amount);
    }
  };

  const handleDelete = (id: string) => {
    const filteredExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(filteredExpenses);
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="source">Expense source</label>
          <input
            type="text"
            name="source"
            id="source"
            value={expense.source}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount of expense</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={expense.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date of expense</label>
          <input
            type="date"
            name="date"
            id="date"
            value={expense.date}
            onChange={handleChange}
            required
          />
        </div>
        <button disabled={invalidInput}>Add expense</button>
      </form>

      <ul>
        {expenses.length > 0 &&
          expenses.map((expense) => (
            <li key={expense.id}>
              {" "}
              {expense.source}: {expense.amount}SAR on {expense.date}
              <button
                onClick={() => {
                  handleDelete(expense.id);
                }}
              >
                <FaTrashAlt />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ExpenseForm;
