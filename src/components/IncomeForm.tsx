const IncomeForm = () => {
    return(
        <div>
            <form>
                <div>
                    <label htmlFor="incomeSource">Income source</label>
                    <input type="text" name="incomeSource" id="incomeSource"/>
                </div>
            </form>
            <form>
                <div>
                    <label htmlFor="incomeAmount">Amount of income</label>
                    <input type="number" name="incomeAmount" id="incomeAmount"/>
                </div>
            </form>
            <form>
                <div>
                    <label htmlFor="incomeDate">Date of income</label>
                    <input type="date" name="incomeDate" id="incomeDate"/>
                </div>
                <button>Add income</button>
            </form>
            <ul>
                <li>Salary: </li>
            </ul>
        </div>
    );
}

export default IncomeForm;