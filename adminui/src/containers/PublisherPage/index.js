import React from "react";
import { Typography } from "antd";
import Toolbar from "./Toolbar";
import List from "./List";
const { Title } = Typography;
function PublisherPage() {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Title level={2}>Publisher</Title>
                <Toolbar />
            </div>
            <div style={{ marginTop: "15px" }}>
                <List />
            </div>
        </div>
    );
}

export default PublisherPage;
