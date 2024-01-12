import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/formSlice";
import { useWindowSize } from "@react-hook/window-size";
import data from "../data/form";
import "../styles/dataTable.css";

const DataTable = () => {
  const dispatch = useDispatch();
  const [width] = useWindowSize();
  const entries = useSelector(state => state.form.entries);

  const [schema, setSchema] = useState([]);
  const [head, setHead] = useState([]);
  const [body, setBody] = useState([]);

  useEffect(() => {
    setSchema(data?.schema?.field_groups?.[0]?.fields);
  }, []);

  useEffect(() => {
    const HEAD = [
      { title: "No.", dataIndex: "key", key: "key" },
      ...schema?.map(({ name, slug }) => ({
        title: name,
        dataIndex: slug,
        key: slug,
      })),
      { title: "-", dataIndex: "action", key: "action" },
    ];

    const adjustHead = length => {
      if (width > 1500) return HEAD;
      else if (width < 1500 && width > 1200) return HEAD.slice(1);
      else if (width < 1200 && width > 900)
        return HEAD.filter((_, index) => index % 3 !== 0);
      else if (width < 900 && width > 601)
        return HEAD.filter((_, index) => index % 2 === 0);
      else if (width < 601)
        return HEAD.filter((_, index) => [0, 1, length - 1].includes(index));
      return [];
    };

    const BODY = entries?.map((entry, index) => {
      const row = { key: `${index + 1}.` };
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

    setHead(adjustHead(HEAD.length));
    setBody(BODY);
  }, [entries, schema, width, dispatch]);

  return (
    <div className="wrapper">
      <Table className="table" columns={head} dataSource={body} />
    </div>
  );
};

export default DataTable;
