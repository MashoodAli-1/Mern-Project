import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
// import Transaction from "../../server/models/Transaction";

import TransactionForm from "../components/transactionForm.js";
import TransactionList from "../components/TransactionList.js";
import BarChart from "../components/BarChart.js";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [editTransaction, setEditTransaction] = useState({});

  // const handleInput = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  useEffect(() => {
    console.log("running");
    fetchTransaction();
  }, []);

  const fetchTransaction = async () => {
    const token = Cookies.get("token");
    const res = await fetch("http://localhost:4000/transaction", {
      headers: { Authorization: `bearer ${token}` },
    });
    const { data } = await res.json();
    console.log(data);
    setTransactions(data);
  };
  return (
    <div>
      <Container>
        <BarChart />
        <br />
        <TransactionForm
          fetchTransaction={fetchTransaction}
          editTransaction={editTransaction}
          setEditTransaction={setEditTransaction}
        />

        <TransactionList
          transactions={transactions}
          fetchTransaction={fetchTransaction}
          setEditTransaction={setEditTransaction}
        />
      </Container>
    </div>
  );
}

export default App;
