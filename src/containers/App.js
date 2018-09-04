import React, { Component } from 'react';
import { Layout } from 'antd';
import Menubar from '../components/header';
import Searchbar from '../components/searchbar';
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
      <Header><Menubar /></Header>
      <Layout>
        <Content><Searchbar /></Content>
      </Layout>
      {/*<Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>*/}
    </Layout>
    );
  }
}

export default App;
