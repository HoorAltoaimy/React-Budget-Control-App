import { ChangeEvent, FormEvent, useState } from "react";

type TransferType = {
  getCurrentSaving: (amount: number) => void; 
  incomeAmount: number;
  expenseAmount: number;
  savingAmount: number;
}

const TransferForm = (props: TransferType) => {
  const [transfer, setTransfer] = useState(0);
  const [transfers, setTransfers] = useState([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTransfer(Number(event.target.value));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    props.getCurrentSaving(transfer);
    setTransfer(0);
  };

  return (
    <div className="card">
      <h3>Current balance: {props.incomeAmount - props.expenseAmount - props.savingAmount}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="transfer">Transfer for saving account</label>
          <input
            type="number"
            name="transfer"
            id="transfer"
            value={transfer}
            onChange={handleChange}
            required
          />
        </div>
        <button>Transfer</button>
      </form>
    </div>
  );
};

export default TransferForm;
