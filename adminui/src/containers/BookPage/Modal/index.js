import React from "react";
import { Button, Modal, Form, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import actions from "../actions";
import { useDispatch, useSelector } from "react-redux";
import constants from "../constants";
import selectors from "../selectors";
import categorySelectors from "../../CategoryPage/selectors";
import authorSelectors from "../../AuthorPage/selectors";
import publisherSelectors from "../../PublisherPage/selectors";
import {isAuthenticated} from "../../shared/routes/permissionChecker";

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};
const formTailLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18, offset: 6 },
};

function ModalBook({ visible, setVisible }) {
    const dispatch = useDispatch();
    const book = useSelector(selectors.selectBook);
    const categories = useSelector(categorySelectors.selectCategories);
    const authors = useSelector(authorSelectors.selectAuthors);
    const publishers = useSelector(publisherSelectors.selectPublishers);
    const onCancel = () => {
        dispatch({ type: constants.BOOK_CLEAR_BOOK });
        setVisible(false);
    };
    const onFinish = (values) => {
        if (book && book._id) {
            // update
            dispatch(actions.doUpdate(book._id, values));
        } else {
            // / create
            dispatch(actions.doCreate(values));
        }
    };

    const getTitle = () => {
        if (book && book._id) {
            // update
            return `Cập nhật (${book._id})`;
        } else {
            // / create
            return `Tạo mới`;
        }
    };

    const getButton = () => {
        if (book && book._id) {
            // update
            return `Cập nhât`;
        } else {
            // / create
            return `Tạo mới`;
        }
    };

    return (
        <Modal
            title={getTitle()}
            visible={visible}
            maskClosable={false}
            footer={null}
            onCancel={onCancel}
        >
            <Form onFinish={onFinish}>
                <Form.Item
                    {...formItemLayout}
                    label="Name"
                    name="name"
                    initialValue={book ? book?.name : ""}
                    rules={[
                        {
                            required: true,
                            min: 3,
                            max: 128,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Category"
                    name="categoryId"
                    rules={[
                        {
                            required: true,
                            min: 3,
                            max: 128,
                        },
                    ]}
                    initialValue={book?.categoryId ? book?.categoryId?._id : ""}
                >
                    <Select>
                        {categories?.map((item, index) => (
                            <Select.Option key={index} value={item._id}>
                                {item?.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Author"
                    name="authorId"
                    rules={[
                        {
                            required: true,
                            min: 3,
                            max: 128,
                        },
                    ]}
                    initialValue={book?.authorId ? book?.authorId?._id : ""}
                >
                    <Select>
                        {authors?.map((item, index) => (
                            <Select.Option key={index} value={item._id}>
                                {item?.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Publisher"
                    name="publisherId"
                    rules={[
                        {
                            required: true,
                            min: 3,
                            max: 128,
                        },
                    ]}
                    initialValue={
                        book?.publisherId ? book?.publisherId?._id : ""
                    }
                >
                    <Select>
                        {publishers?.map((item, index) => (
                            <Select.Option key={index} value={item._id}>
                                {item?.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Descriptions"
                    name="descriptions"
                    initialValue={book ? book?.descriptions : ""}
                    rules={[
                        {
                            required: true,
                            min: 3,
                            max: 2000,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="YearPublished"
                    name="yearPublished"
                    initialValue={book ? book?.yearPublished : ""}
                    rules={[
                        {
                            required: true,

                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Pages"
                    name="pages"
                    initialValue={book ? book?.pages : ""}
                    rules={[
                        {
                            required: true,
                            min: 1
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Price"
                    name="price"
                    initialValue={book ? book?.price : ""}
                    rules={[
                        {
                            required: true,
                            min: 0
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item {...formTailLayout}>
                    <Button type="primary" htmlType="submit">
                        {getButton()}
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default ModalBook;
