import React, { useState } from "react";
import { Typography } from "antd";
import actions from "./actions";
import { useDispatch, useSelector } from "react-redux";
import Toolbar from "./Toolbar";
import List from "./List";
const { Title } = Typography;
function PublisherPage() {
    const [visible, setVisible] = useState(false);

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
