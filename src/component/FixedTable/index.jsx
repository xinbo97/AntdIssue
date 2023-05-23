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
        title: "Name1",
        dataIndex: "name1",
    },
    {
        title: "Age",
        dataIndex: "age",
        fixed: "right",
        // 此处既有固定列又有筛选项时，会出现bug
        sorter: (a, b) => a.age - b.age,
        width: 150,
    },
    {
        title: "Address",
        dataIndex: "address",
        fixed: "right",
        width: 150,
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

// 强制刷新会发现title为Age 的列的宽度发生异常；但鼠标移入又恢复正常宽度
// imgs文件夹下有截图
const Ori = () => {
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ y: 240, x: 1000 }}
            className={styles.container}
        />
    );
};

export default Ori;
