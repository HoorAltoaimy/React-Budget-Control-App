import { Link } from "react-router-dom";
import App from "../App";

const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/IncomeForm">Income Form</Link>
      <Link to="/ExpenseForm">Expense Form</Link>
      <Link to="/TargetForm">Target Form</Link>
      <Link to="/TransferForm">Transfer Form</Link> */}

      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/App">App</Link>
    </nav>
  );
};

export default Navbar;
