import React, { useEffect, useState } from "react";
import { Table, Radio, Divider, Button, Space, Upload } from "antd";
import actions from "../actions";
import { useSelector, useDispatch } from "react-redux";
import selectors from "../selectors";
import constants from "../constants";
import View from "../View";
import { isAuthenticated } from "../../shared/routes/permissionChecker";


function List() {
    const dispatch = useDispatch();
    const [viewVisible, setViewVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    useEffect(() => {
        dispatch(actions.list());
    }, []);
    const data = useSelector(selectors.selectAuthors);
    // const showView = (record) => {
    //     dispatch({ type: constants})
    // }
    const showModal = (record) => {
        console.log(record);
        dispatch({ type: constants.TOGGLE_MODAL });
        dispatch({
            type: constants.AUTHOR_FORM_VALUE_CHANGE,
            payload: record,
        });
    };

    const removeAuthor = (id) => {
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
            title: "Born",
            key: "born",
            dataIndex: "born",
        },
        {
            title: "Died",
            key: "died",
            dataIndex: "died",
        },
        // {
        //     title: "Descriptions",
        //     key: 'descriptions',
        //     dataIndex: "descriptions",
        // },
        {
            title: "Category",
            width: "160px",
            render: (_, record) => <span>{record?.categoryId?.name}</span>,
        },
        {
            title: "",
            dataIndex: "",
            width: "160px",
            render: (_, record) => {
                const fileList = record.photos?.map(item => {
                    return {
                        uid: item._id,
                        name: item.name,
                        status: 'done',
                        url: `${process.env.REACT_APP_STATIC_PHOTOS}/${item.path}`,
                        thumbUrl: `${process.env.REACT_APP_STATIC_PHOTOS}/${item.path}`
                    }
                });
                const handleRemove = (file, bookId) => {
                    const photosId = file.uid;
                    dispatch(actions.doDestroyFile(photosId, bookId))
                };
                return (
                    <div className="table-actions">
                        <Space>
                            <Upload
                                name="photos"
                                action={`${process.env.REACT_APP_API_URI}/auth/photos/${record._id}`}
                                headers={{
                                    Authorization:
                                        "Bearer " + isAuthenticated(),
                                }}
                                defaultFileList={[...fileList]}
                                listType="picture-card"
                                onRemove={(file) =>
                                    handleRemove(file, record._id)
                                }
                            >
                                <Button>Thêm ảnh</Button>
                            </Upload>
                            <Button onClick={() => showModal(record)}>
                                Sửa
                            </Button>
                            <Button
                                danger
                                onClick={() => removeAuthor(record._id)}
                            >
                                Xóa
                            </Button>
                        </Space>
                    </div>
                );
            },
        },
    ];

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
