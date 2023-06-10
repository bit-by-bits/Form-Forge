import styles from "./dataForm.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import data from "../data/form";
import { add } from "../redux/formSlice";
import { useWindowSize } from "@react-hook/window-size";
import { Form, Select, Input, Button, message } from "antd";

const DataForm = () => {
  // STATES

  const dispatch = useDispatch();
  const [width, height] = useWindowSize();

  const [form] = Form.useForm();
  const [schema, setSchema] = useState([]);

  // EFFECTS

  useEffect(() => {
    setSchema(data?.schema?.field_groups);
  }, []);

  // FUNCTIONS

  const onFinish = values => {
    dispatch(add({ ...values }));

    form.resetFields();
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    message.error("Something went wrong!");
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.wrapper}>
      <Form
        form={form}
        name={data?.slug}
        labelCol={{ span: width > 900 ? 10 : 8 }}
        wrapperCol={{ span: 30 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        {schema?.map(section => (
          <div key={section?.slug}>
            <h2>{section?.name}</h2>
            <div className={styles.form} key={section?.slug}>
              {section?.fields?.map(field => {
                const { name, slug, type, ...rest } = field;
                const key = `${section?.slug}_${slug}`;
                const rules = [
                  {
                    type: type === "EMAIL" ? "email" : "string",
                    pattern: name === "Mobile Phone" ? rest.pattern : null,
                    min: rest.min_length,
                    max: rest.max_length,
                    required: rest.is_required,
                    message: `${name} invalid!`,
                  },
                ];

                switch (type) {
                  case "TEXT":
                  case "EMAIL":
                    return (
                      <Form.Item
                        key={key}
                        label={name}
                        name={slug}
                        rules={rules}
                      >
                        <Input bordered={false} className={styles.input} />
                      </Form.Item>
                    );
                  case "DROPDOWN":
                    return (
                      <Form.Item
                        key={key}
                        label={name}
                        name={slug}
                        rules={rules}
                      >
                        <Select
                          bordered={false}
                          className={styles.input}
                          options={rest.data_source_local?.options?.map(
                            option => ({
                              label: option.label,
                              value: option.value,
                            })
                          )}
                        />
                      </Form.Item>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </div>
        ))}
        <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
          <Button type="primary" className={styles.button} htmlType="submit">
            Submit
          </Button>
          <Button className={styles.button2} onClick={() => form.resetFields()}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DataForm;
