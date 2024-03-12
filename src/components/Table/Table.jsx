import React, { useState } from 'react';
import { Table } from 'antd';

const index = ({leads,page}) => {
   
    const columns = [
        {
          title: 'Сделки',
          dataIndex: 'name',
          sorter:(a,b)=>{
            if(a.name  > b.name){
                return 1
            }
            if(a.name < b.name){
                return -1
            }
            return 0
          }
        },
        {
          title: 'Цена',
          dataIndex: 'price',
          sorter:(a,b)=>a.price-b.price
        },
        {
          title: 'Созданно',
          dataIndex: 'created_at',
        },
        {
          title: 'Обновленно',
          dataIndex: 'updated_at',
        },
        {
          title: 'Аккаунт Id',
          dataIndex: 'account_id',
        },
      ];
      const data = [];
      for (let i = 0; i < 46; i++) {
        data.push({
          key: i,
          name: `Edward King ${i}`,
          age: 32,
          address: `London, Park Lane no. ${i}`,
        });
      }
  return (
    <div>
      <Table columns={columns} dataSource={leads} pagination={({pageSize:page})}/>
    </div>
  );
};
export default index;