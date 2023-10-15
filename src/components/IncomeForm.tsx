import { FormEvent, ChangeEvent, useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

import { FormTypes } from "../types/componentsTypes";

type IncomeType = {
  getIncome: (myIncome: number) => void;
};

const IncomeForm = (props: IncomeType) => {
  const [income, setIncome] = useState<FormTypes>({
    id: "",
    source: "",
    amount: 0,
    date: "",
  });

  const [incomes, setIncomes] = useState<FormTypes[]>([]);

  const [invalidInput, setInvalidInput] = useState(false);
  useEffect(() => {
    if (income.amount < 0) {
      setInvalidInput(true);
    } else {
      setInvalidInput(false);
    }
  }, [income]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setIncome((prevIncome) => {
      return { ...prevIncome, [name]: value };
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (income.source && income.amount && income.date) {
      const newIncome = { ...income, id: uuidv4() };
      //add income to incomes array
      setIncomes((prevIncomes) => {
        return [...prevIncomes, newIncome];
      });
      setIncome({
        id: "",
        source: "",
        amount: 0,
        date: "",
      });
    }
    props.getIncome(income.amount);
  };

  const handleDelete = (id: string) => {
    const filteredIncomes = incomes.filter((income) => income.id !== id);
    setIncomes(filteredIncomes);
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="source">Income source</label>
          <input
            type="text"
            name="source"
            id="source"
            value={income.source}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount of income</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={income.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date of income</label>
          <input
            type="date"
            name="date"
            id="date"
            value={income.date}
            onChange={handleChange}
            required
          />
        </div>
        <button disabled={invalidInput}>Add income</button>
      </form>

      <ul>
        {incomes.length > 0 &&
          incomes.map((income, index) => (
            <li key={index}>
              {" "}
              {income.source}: {income.amount}SAR on {income.date}{" "}
              <button
                onClick={() => {
                  handleDelete(income.id);
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

export default IncomeForm;
