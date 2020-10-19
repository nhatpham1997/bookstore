import React, { useState } from "react";
import { Layout as AntLayout, Menu } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = AntLayout;

const Layout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const doToggleMenu = () => {
        setCollapsed(!collapsed);
    };
    return (
        <AntLayout>
            <Sider
                trigger={null}
                
                collapsed={collapsed}
                style={{ height: "100vh" }}
                collapsedWidth={0}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                         Publisher
                    </Menu.Item>
                </Menu>
            </Sider>
            <AntLayout>
                <Header
                    style={{ background: "white", padding: "0px 20px" }}
                >
                    
                    {collapsed ? (
                        <MenuUnfoldOutlined
                            // className="trigger"
                            onClick={doToggleMenu}
                            size={22}
                        />
                    ) : (
                        <MenuFoldOutlined
                            // className="trigger"
                            onClick={doToggleMenu}
                            size={22}
                        />
                    )}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        background: "white"
                    }}
                >
                    {children}
                </Content>
            </AntLayout>
        </AntLayout>
    );
};

export default Layout;
