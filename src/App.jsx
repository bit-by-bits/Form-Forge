import React from "react";
import "./styles/main.css";
import DataForm from "./components/dataForm";
import DataTable from "./components/dataTable";

const App = () => (
  <div className="app">
    <DataForm />
    <DataTable />
  </div>
);

export default App;
