import "./dataTable.css";
import { Button, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import data from "../data/form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/formSlice";
import { useWindowSize } from "@react-hook/window-size";

const DataTable = () => {
  // STATES

  const dispatch = useDispatch();
  const [width, height] = useWindowSize();

  const [schema, setSchema] = useState([]);
  const entries = useSelector(state => state.form.entries);

  const [body, setBody] = useState([]);
  const [head, setHead] = useState([]);

  // EFFECTS

  useEffect(() => {
    setSchema(data?.schema?.field_groups?.[0]?.fields);
  }, []);

  useEffect(() => {
    const HEAD = [
      {
        title: "No.",
        dataIndex: "key",
        key: "key",
      },
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
    ];

    const BODY = entries?.map((entry, index) => {
      const row = {};
      row["key"] = `${index + 1}.`;

      schema?.forEach(({ slug }) => (row[slug] = entry[slug]));

      row["action"] = (
        <Button
          danger
          icon={<DeleteOutlined />}
          type="primary"
          onClick={() => dispatch(remove({ ...entry }))}
        />
      );

      return row;
    });

    if (width > 1500) {
      setHead(HEAD);
    } else if (width < 1500 && width > 1200) {
      setHead(HEAD?.slice(1));
    } else if (width < 1200 && width > 900) {
      setHead(HEAD?.filter((_, index) => index % 3 !== 0));
    } else if (width < 900 && width > 601) {
      setHead(HEAD?.filter((_, index) => index % 2 === 0));
    } else if (width < 601) {
      setHead(
        HEAD?.filter((_, index) => [0, 1, HEAD?.length - 1].includes(index))
      );
    }

    setBody(BODY);
  }, [schema, entries]);

  // FUNCTIONS

  return (
    <div className="wrapper">
      <Table className="table" columns={head} dataSource={body} />
    </div>
  );
};

export default DataTable;
