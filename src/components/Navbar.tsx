import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/IncomeForm">Income Form</Link>
      <Link to="/ExpenseForm">Expense Form</Link>
      <Link to="/TargetForm">Target Form</Link>
      <Link to="/TransferForm">Transfer Form</Link> */}

      <Link to="/">Home</Link>
      <Link to="/App">App</Link>
    </nav>
  );
};

export default Navbar;
