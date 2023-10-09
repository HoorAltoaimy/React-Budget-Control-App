const ExpenseForm = () => {
    return(
        <div>
            <form>
                <div>
                    <label htmlFor="expenseSource">Expense source</label>
                    <input type="text" name="expenseSource" id="expenseSource"/>
                </div>
            </form>
            <form>
                <div>
                    <label htmlFor="expenseAmount">Amount of expense</label>
                    <input type="number" name="expenseAmount" id="expenseAmount"/>
                </div>
            </form>
            <form>
                <div>
                    <label htmlFor="expenseDate">Date of expense</label>
                    <input type="date" name="expenseDate" id="expenseDate"/>
                </div>
                <button>Add income</button>
            </form>
            <ul>
                <li>Water bill: </li>
                <li>Phone bill: </li>
            </ul>
        </div>
    );
}

export default ExpenseForm;