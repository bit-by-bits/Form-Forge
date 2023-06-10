import "./dataTable.css";
import { Button, Table } from "antd";
import data from "../data/form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/formSlice";

const DataTable = () => {
  // STATES

  const dispatch = useDispatch();
  const [schema, setSchema] = useState([]);
  const entries = useSelector(state => state.form.entries);

  const [body, setBody] = useState([]);
  const [head, setHead] = useState([]);

  // EFFECTS

  useEffect(() => {
    setSchema(data?.schema?.field_groups?.[0]?.fields);
  }, []);

  useEffect(() => {
    setHead([
      ...schema?.map(({ name, slug }) => ({
        title: name,
        dataIndex: slug,
        key: slug,
      })),
      {
        title: "-",
        dataIndex: "action",
        key: "action",
      },
    ]);
  }, [schema]);

  useEffect(() => {
    setBody(
      entries?.map((entry, index) => {
        const row = {};
        row["key"] = index;

        schema?.forEach(({ slug }) => (row[slug] = entry[slug]));

        row["action"] = (
          <Button
            danger
            type="primary"
            onClick={() => dispatch(remove({ ...entry }))}
          >
            Delete
          </Button>
        );

        return row;
      })
    );
  }, [schema, entries]);

  // FUNCTIONS

  return (
    <div className="wrapper">
      <Table className="table" columns={head} dataSource={body} />
    </div>
  );
};

export default DataTable;
