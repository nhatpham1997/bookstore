import React from "react";
import { Button, Modal, Form, Input } from "antd";
import actions from "../actions";
import { useDispatch, useSelector } from "react-redux";
import constants from "../constants";
import selectors from "../selectors";

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};
const formTailLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18, offset: 6 },
};

function ModalPublisher({ visible, setVisible }) {
    const dispatch = useDispatch();
    const publisher = useSelector(selectors.selectPublisher);
    const onCancel = () => {
        dispatch({ type: constants.PUBLISHER_CLEAR_PUBLISHER });
        setVisible(false);
    };
    const onFinish = (values) => {
        console.log(publisher);
        if (publisher && publisher._id) {
            // update
            dispatch(actions.doUpdate(publisher._id, values));
        } else {
            // / create
            dispatch(actions.doCreate(values));
        }
    };

    const getTitle = () => {
        if (publisher && publisher._id) {
            // update
            return `Cập nhật (${publisher._id})`;
        } else {
            // / create
            return `Tạo mới`;
        }
    };

    const getButton = () => {
        if (publisher && publisher._id) {
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
                    initialValue={publisher ? publisher?.name : ""}
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
                    label="Descriptions"
                    name="descriptions"
                    initialValue={publisher ? publisher?.descriptions : ""}
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

export default ModalPublisher;
