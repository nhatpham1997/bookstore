import React, { useEffect, useState } from "react";
import { Table, Radio, Divider, Button, Space } from "antd";
import actions from "../actions";
import { useSelector, useDispatch } from "react-redux";
import selectors from "../selectors";
import constants from "../constants";
import View from "../View";

function List() {
    const dispatch = useDispatch();
    const [viewVisible, setViewVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
  
    const data = useSelector(selectors.selectBooks);
    // const showView = (record) => {
    //     dispatch({ type: constants})
    // }
    const showModal = (record) => {
        console.log(record);
        dispatch({ type: constants.TOGGLE_MODAL });
        dispatch({
            type: constants.BOOK_FORM_VALUE_CHANGE,
            payload: record,
        });
    };

    const removeBook = (id) => {
        dispatch(actions.doDestroy(id));
    };

    const columns = [
        {
            title: "Tên",
            dataIndex: "name",
            key: "name",
            render: (text, record) => (
                <a
                    onClick={() => {
                        setViewVisible(!viewVisible);
                        setSelectedItem(record);
                    }}
                >
                    {text}
                </a>
            ),
        },
        {
            title: "Category",
            width: "160px",
            render: (_, record) => <span>{record?.categoryId?.name}</span>,
        },
        {
            title: "Author",
            width: "160px",
            render: (_, record) => <span>{record?.authorId?.name}</span>,
        },
        {
            title: "Publisher",
            width: "160px",
            render: (_, record) => <span>{record?.publisherId?.name}</span>,
        },
        {
            title: "YearPublished",
            key: "yearPublished",
            dataIndex: "yearPublished",
        },
        {
            title: "Pages",
            key: "pages",
            dataIndex: "pages",
        },
        {
            title: "Price",
            key: "price",
            dataIndex: "price",
        },

        // {
        //     title: "Descriptions",
        //     key: 'descriptions',
        //     dataIndex: "descriptions",
        // },
        {
            title: "",
            dataIndex: "",
            width: "160px",
            render: (_, record) => {
                return (
                    <div className="table-actions">
                        <Space>
                            <Button onClick={() => showModal(record)}>
                                Sửa
                            </Button>
                            <Button
                                danger
                                onClick={() => removeBook(record._id)}
                            >
                                Xóa
                            </Button>
                        </Space>
                    </div>
                );
            },
        },
    ];

    const demo = (data) => {
        console.log(data);
        return <div></div>;
    };
    useEffect(() => {
        dispatch(actions.list());
    }, []);
    return (
        <div>
            <View
                visible={viewVisible}
                toggle={() => setViewVisible(!viewVisible)}
                data={selectedItem}
            />
            <Table
                rowKey="_id"
                // rowSelection={{
                //     type: "checkbox",
                //     ...rowSelection,
                // }}
                columns={columns}
                dataSource={data}
                pagination={false}
                scroll={{ x: 1200, y: "500px" }}
            />
        </div>
    );
}

export default List;
