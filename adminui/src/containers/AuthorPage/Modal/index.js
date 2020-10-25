import React from "react";
import { Button, Modal, Form, Input, Select } from "antd";
import actions from "../actions";
import { useDispatch, useSelector } from "react-redux";
import constants from "../constants";
import selectors from "../selectors";
import categorySelectors from '../../CategoryPage/selectors';

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};
const formTailLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18, offset: 6 },
};

function AuthorPage({ visible, setVisible }) {
    const dispatch = useDispatch();
    const author = useSelector(selectors.selectAuthor);
    const categories = useSelector(categorySelectors.selectCategories);
    const onCancel = () => {
        dispatch({ type: constants.AUTHOR_CLEAR_AUTHOR });
        setVisible(false);
    };
    const onFinish = (values) => {
        if (author && author._id) {
            // update
            dispatch(actions.doUpdate(author._id, values));
        } else {
            // / create
            dispatch(actions.doCreate(values));
        }
    };

    const getTitle = () => {
        if (author && author._id) {
            // update
            return `Cập nhật (${author._id})`;
        } else {
            // / create
            return `Tạo mới`;
        }
    };

    const getButton = () => {
        if (author && author._id) {
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
            <Form onFinish={onFinish} >
                <Form.Item
                    {...formItemLayout}
                    label="Name"
                    name="name"
                    initialValue={author ? author?.name : ""}
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
                    label="Born"
                    name="born"
                    initialValue={author ? author?.born : ""}
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
                    label="Died"
                    name="died"
                    initialValue={author ? author?.died : ""}
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
                    initialValue={author?.categoryId ? author?.categoryId?._id : ""}
                >
                    <Select>
                        {categories?.map((item, index)=>(
                            <Select.Option value={item._id}>{item?.name}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Descriptions"
                    name="descriptions"
                    initialValue={author ? author?.descriptions : ""}
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
                <Form.Item {...formTailLayout}>
                    <Button type="primary" htmlType="submit">
                        {getButton()}
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default AuthorPage;
