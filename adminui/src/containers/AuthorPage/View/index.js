import { Descriptions, Modal } from "antd";
import React from "react";

const View = ({ visible, toggle, data }) => {
    return (
        <Modal
            title="Info"
            visible={visible}
            maskClosable={false}
            footer={null}
            onCancel={toggle}
        >
            <div>
                <Descriptions title="" column={24} bordered={true}>
                    {data?.name && (
                        <Descriptions.Item label="Name" span={24}>
                            {data?.name}
                        </Descriptions.Item>
                    )}

                    {data?.descriptions && (
                        <Descriptions.Item label="Description" span={24}>
                            {data?.descriptions}
                        </Descriptions.Item>
                    )}

                    {data?.born && (
                        <Descriptions.Item label="Description" span={24}>
                            {data?.born}
                        </Descriptions.Item>
                    )}

                    {data?.died && (
                        <Descriptions.Item label="Description" span={24}>
                            {data?.died}
                        </Descriptions.Item>
                    )}
                    {data?.categoryId?.name && (
                        <Descriptions.Item label="Category" span={24}>
                            {data?.categoryId?.name}
                        </Descriptions.Item>
                    )}
                </Descriptions>
            </div>
        </Modal>
    );
};

export default View;
