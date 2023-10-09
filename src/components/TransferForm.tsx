const TransferForm = () => {
    return(
        <div>
            <h3>Current balance: </h3>
            <form>
                <div>
                    <label htmlFor="transfer">Transfer for saving account</label>
                    <input type="number" name="transfer" id="transfer"/>
                </div>
                <button>Transfer</button>
            </form>
        </div>
    );
}

export default TransferForm;