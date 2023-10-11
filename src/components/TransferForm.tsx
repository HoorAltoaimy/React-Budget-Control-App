import { ChangeEvent, FormEvent, useState } from "react";


const TransferForm = () => {

    const [transfer, setTransfer] = useState(0);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTransfer(Number(event.target.value));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(transfer);
        setTransfer(0);
    }

    return(
        <div className="card">
            <h3>Current balance: </h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="transfer">Transfer for saving account</label>
                    <input type="number" name="transfer" id="transfer" value={transfer} onChange={handleChange} required/>
                </div>
                <button>Transfer</button>
            </form>
        </div>
    );
}

export default TransferForm;