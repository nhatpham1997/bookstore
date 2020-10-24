import React from "react";
import { Typography } from "antd";
import Toolbar from "./Toolbar";
import List from "./List";
const { Title } = Typography;
function CategoryPage() {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Title level={2}>Category</Title>
                <Toolbar />
            </div>
            <div style={{ marginTop: "15px" }}>
                <List />
            </div>
        </div>
    );
}

export default CategoryPage;
