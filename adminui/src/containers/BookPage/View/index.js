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
                    {data?.categoryId?.name && (
                        <Descriptions.Item label="Category" span={24}>
                            {data?.categoryId?.name}
                        </Descriptions.Item>
                    )}
                    {data?.authorId?.name && (
                        <Descriptions.Item label="Category" span={24}>
                            {data?.authorId?.name}
                        </Descriptions.Item>
                    )}
                    {data?.publisherId?.name && (
                        <Descriptions.Item label="Category" span={24}>
                            {data?.publisherId?.name}
                        </Descriptions.Item>
                    )}
                    {data?.descriptions && (
                        <Descriptions.Item label="Description" span={24}>
                            {data?.descriptions}
                        </Descriptions.Item>
                    )}

                    {data?.yearPublisher && (
                        <Descriptions.Item label="Description" span={24}>
                            {data?.yearPublisher}
                        </Descriptions.Item>
                    )}

                    {data?.pages && (
                        <Descriptions.Item label="Description" span={24}>
                            {data?.pages}
                        </Descriptions.Item>
                    )}
                    {data?.price && (
                        <Descriptions.Item label="Description" span={24}>
                            {data?.price}
                        </Descriptions.Item>
                    )}
                </Descriptions>
            </div>
        </Modal>
    );
};

export default View;
