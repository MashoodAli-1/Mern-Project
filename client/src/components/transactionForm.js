import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";

const initialForm = {
  amount: 0,
  description: "",
  date: new Date(),
};
export default function TransactionForm({
  fetchTransaction,
  editTransaction,
  setEditTransaction,
}) {
  const [form, setForm] = useState(initialForm);
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDate = (newValue) => {
    setForm({ ...form, date: newValue });
  };
  useEffect(() => {
    console.log(editTransaction);
    if (editTransaction !== {}) {
      setForm(editTransaction);
    }
  }, [editTransaction]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const res =
      editTransaction.amount === undefined ? await create() : await update();

    const data = await res.json();
    setForm(initialForm);
    setEditTransaction({});
    if (res.ok) {
      fetchTransaction();
    }
    console.log(data);
  };

  const create = async () => {
    const res = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });
    return res;
  };

  const update = async () => {
    const res = await fetch(
      `http://localhost:4000/transaction/${editTransaction._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(form),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    return res;
  };
  return (
    <Card sx={{ minWidth: 275, marginTop: 10 }}>
      <CardContent>
        <Typography variant="h6">Add New Transaction</Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ marginRight: 5 }}
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            size="small"
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
          />
          <TextField
            sx={{ marginRight: 5 }}
            id="outlined-basic"
            label="Description"
            variant="outlined"
            size="small"
            name="description"
            value={form.description}
            onChange={handleChange}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Transaction Date"
              inputFormat="MM/DD/YYYY"
              value={form.date}
              onChange={handleDate}
              renderInput={(params) => (
                <TextField sx={{ marginRight: 5 }} {...params} size="small" />
              )}
            />
          </LocalizationProvider>
          {editTransaction.amount === undefined && (
            <Button type="submit" variant="contained">
              Submit
            </Button>
          )}
          {editTransaction.amount !== undefined && (
            <Button type="submit" variant="contained">
              Edit
            </Button>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
