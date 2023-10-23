import { ChangeEvent, FormEvent, useEffect, useState } from "react";

type TransferType = {
  getCurrentSaving: (amount: number) => void;
  incomeAmount: number;
  expenseAmount: number;
  savingAmount: number;
};

const TransferForm = (props: TransferType) => {
  const [transfer, setTransfer] = useState(0);

  const [balance, setBalance] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);

  const [invalidInput, setInvalidInput] = useState(false);
  useEffect(() => {
    if (transfer < 0) {
      setInvalidInput(true);
    } else {
      setInvalidInput(false);
    }
  }, [transfer]);

  const calculateBalance = () => {
    setBalance(props.incomeAmount - props.expenseAmount - props.savingAmount);
  };

  useEffect(() => {
    calculateBalance();
  }, [props.incomeAmount, props.expenseAmount, props.savingAmount]);

  // useEffect(() => {
  //   calculateTotalBalance();
  //   }, [balance]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let transferInput = Number(event.target.value);
    setTransfer(transferInput);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    props.getCurrentSaving(transfer);
    setTransfer(0);
  };

  return (
    <div className="card">
      {/* const totalBalance = {props.incomeAmount - props.expenseAmount - props.savingAmount;
       <h3>Current balance: {totalBalance}</h3> */}
      <h3>Current balance: {balance}</h3>

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
        <button disabled={invalidInput}>Transfer</button>
      </form>
    </div>
  );
};

export default TransferForm;
