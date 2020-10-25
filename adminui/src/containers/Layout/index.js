import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    Layout as AntLayout,
    Menu,
    Dropdown,
    Space,
    Button,
} from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    LogoutOutlined
} from "@ant-design/icons";
import { Link,useLocation } from "react-router-dom";
import actions from "./actions";
const { Header, Sider, Content } = AntLayout;

const Layout = ({ children }) => {
    const user = JSON.parse(window.localStorage.getItem("auth"));
    const [collapsed, setCollapsed] = useState(false);
    const doToggleMenu = () => {
        setCollapsed(!collapsed);
    };
    let doSignout = () => {
        actions.doSignout();
    };
    let userMenu = (
        <Menu selectedKeys={[]} triggerSubMenuAction="click" >
            <Menu.Item onClick={doSignout} key="logout">
                <LogoutOutlined />
                Thoát
            </Menu.Item>
        </Menu>
    );
    let location = useLocation();
    console.log(location)
    return (
        <AntLayout>
            <Sider
                trigger={null}
                collapsed={collapsed}
                style={{ height: "100vh" }}
                collapsedWidth={0}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
                    <Menu.Item icon={<UserOutlined />} key="/publisher" >
                        <Link to="/publisher">Publisher</Link>
                    </Menu.Item>
                    <Menu.Item icon={<UserOutlined />} key="/category" >
                        <Link to="/category">Category</Link>
                    </Menu.Item>
                    <Menu.Item icon={<UserOutlined />} key="/author" >
                        <Link to="/author">Author</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <AntLayout>
                <Header style={{ background: "white", padding: "0px 20px" }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
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
                        <Space>
                            <Dropdown
                                className="user-dropdown"
                                overlay={userMenu}
                                trigger={["click"]}
                                
                            >
                                <span style={{cursor: "pointer"}}>
                                    <span className="user-dropdown-text">
                                        {user?.user.name}
                                    </span>
                                </span>
                            </Dropdown>
                        </Space>
                    </div>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        background: "white",
                    }}
                >
                    {children}
                </Content>
            </AntLayout>
        </AntLayout>
    );
};

export default Layout;
