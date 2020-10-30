import React, {useEffect} from "react";
import { Typography } from "antd";
import Toolbar from "./Toolbar";
import List from "./List";
import categoryActions from '../CategoryPage/actions';
import authorActions from '../AuthorPage/actions';
import publisherActions from '../PublisherPage/actions';
import { useDispatch } from "react-redux";
const { Title } = Typography;

function BookPage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(categoryActions.list());
        dispatch(authorActions.list());
        dispatch(publisherActions.list());
    }, []);
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Title level={2}>Book Infor</Title>
                <Toolbar />
            </div>
            <div style={{ marginTop: "15px" }}>
                <List />
            </div>
        </div>
    );
}

export default BookPage;
