import React from "react";
import { Select, Space } from "antd";

const index = ({filterPage}) => {
  const handleChange = (value) => {
    filterPage(value)
  };

  return (
    <div style={{textAlign:'end',marginBottom:'10px'}}>
        <label>Фильтр по сделкам : </label>
    <Space wrap>
      <Select
        defaultValue="Все"
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={[
          {
            value: 11,
            label: "Все",
          },
          {
            value: 2,
            label: "По 2",
          },
          {
            value: 5,
            label: "По 5",
          },
          {
            value: 10,
            label: "По 10",
          },
        ]}
      />
    </Space>
    </div>
  );
};
export default index;
