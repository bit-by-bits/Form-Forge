import React from "react";
import "./App.css";
import DataForm from "./components/dataForm";
import DataTable from "./components/dataTable";

const App = () => {
  return (
    <div className="main">
      <DataForm />
      <DataTable />
    </div>
  );
};

export default App;
