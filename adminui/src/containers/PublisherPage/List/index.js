import React, { useEffect } from "react";
import { Table, Radio, Divider, Button, Space } from "antd";
import actions from "../actions";
import { useSelector, useDispatch } from "react-redux";
import selectors from "../selectors";
import constants from "../constants";

function List() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.list());
    }, []);
    const data = useSelector(selectors.selectPublishers);
    const showModal = (record) => {
        console.log(record);
        dispatch({ type: constants.TOGGLE_MODAL});
        dispatch({
            type: constants.PUBLISHER_FORM_VALUE_CHANGE,
            payload: record
        });
    };

    const removePublisher = (id) => {
        dispatch(actions.doDestroy(id));
    }
    
    const columns = [
        {
            title: "Tên",
            dataIndex: "name",
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Mô tả",
            key: 'descriptions',
            dataIndex: "descriptions",
        },
        {
            title: "",
            dataIndex: "",
            width: "160px",
            render: (_, record) => {
                return (
                    <div className="table-actions">
                        <Space>
                        <Button onClick={()=>showModal(record)}>Sửa</Button>
                        <Button danger onClick={()=>removePublisher(record._id)}>Xóa</Button>
                        </Space>
                    </div>
                )
            }
        }
    ];


    const demo = (data)=>{
        console.log(data)
        return (<div></div>)
    }
    return (
        <div>
            <Table
                rowKey="_id"
                // rowSelection={{
                //     type: "checkbox",
                //     ...rowSelection,
                // }}
                columns={columns}
                dataSource={data}
                pagination={false}
            />
        </div>
    );
}

export default List;
