import React from "react";
import { Table } from "antd";
import styles from "./index.module.less";


const columns = [
    {
        title: "Name",
        dataIndex: "name",
        width: 150,
    },
    {
        title: "Age",
        dataIndex: "age",
        width: 150,
    },
    {
        title: "Address",
        dataIndex: "address",
        // width: 150,
    },
];

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

// 强制刷新会发现表头宽度发生突变
const Ori = () => {
    return (
        <Table
            columns={columns}
            dataSource={[]}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 240, x: 1000 }}
            className={styles.container}
        />
    );
};

export default Ori;
