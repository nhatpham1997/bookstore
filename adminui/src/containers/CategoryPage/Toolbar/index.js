import React, { useEffect, useState } from "react";
import { Button, Space } from "antd";
import EditModal from "../Modal";
import constants from "../constants";
import { useDispatch, useSelector } from "react-redux";
import selectors from "../selectors";

function CategoryPage() {
    const visible = useSelector(selectors.selectIsModalShow);
    const dispatch = useDispatch();

    const setVisible = () => {
        dispatch({ type: constants.TOGGLE_MODAL});
    };
    return (
        <div>
            {visible && <EditModal visible={visible} setVisible={setVisible} />}
            <Space>
                <Button type="primary" onClick={() => setVisible(true)}>
                    Tạo
                </Button>
            </Space>
        </div>
    );
}

export default CategoryPage;
