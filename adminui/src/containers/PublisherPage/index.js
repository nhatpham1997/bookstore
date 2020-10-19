import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import actions from "./actions";
import { useDispatch } from "react-redux";

function PublisherPage() {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const showModal = () => {
        setVisible(true);
    };
    const onCancel = () => {
        setVisible(false);
    };
    const onFinish = (values) => {
        dispatch(actions.doCreate(values));
    };
    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Tạo
            </Button>
            <Modal
                title="Create Publisher"
                visible={visible}
                maskClosable={false}
                footer={null}
                onCancel={onCancel}
            >
                <Form onFinish={onFinish}>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Descriptions"
                        name="descriptions"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        Tạo
                    </Button>
                </Form>
            </Modal>
            <Button>Export to Excel</Button>
        </div>
    );
}

export default PublisherPage;
