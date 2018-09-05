import React from 'react';
import { Menu, Dropdown, Button, Icon, Avatar } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const menu = (
  <Menu>
    <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
    <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
    <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
  </Menu>
);

const Header = () => (
  <React.Fragment>
    <div className="logo" />
    {/*<Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>*/}
    <div className="menu-items">
      <span className="menu-text">How it works</span>
      <Dropdown className="menu-text" overlay={menu}>
        <Button style={{ marginLeft: 8, border: 'none' }}>
          BROWSE <Icon type="down" />
        </Button>
      </Dropdown>
      <span className="menu-text">search</span>
      <Dropdown className="menu-text" overlay={menu}>
        <Button style={{ marginLeft: 8, border: 'none' }}>
          <Avatar icon="user" size={20} /><span style={{marginLeft:5}}>My Account </span><Icon type="down" />
        </Button>
      </Dropdown>
    </div>
  </React.Fragment>
);

export default Header;