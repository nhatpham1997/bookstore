import React, {useEffect} from "react";
import { Typography } from "antd";
import Toolbar from "./Toolbar";
import List from "./List";
import categoryActions from '../CategoryPage/actions';
import { useDispatch } from "react-redux";
const { Title } = Typography;

function AuthorPage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(categoryActions.list());
    }, []);
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Title level={2}>Thông tin tác giả</Title>
                <Toolbar />
            </div>
            <div style={{ marginTop: "15px" }}>
                <List />
            </div>
        </div>
    );
}

export default AuthorPage;
