import React from 'react';
import { Layout } from 'antd';
import Menubar from '../components/header';
import Searchbar from '../components/searchbar';
import LeftSideBar from '../components/left-sidebar';
import ContentSection from '../components/content';
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;

const style = { background: '#F0F2F5', padding: '50px' };

class App extends React.Component {
  render() {
    return (
      <Layout>
      <Header><Menubar /></Header>
      <Layout style={{marginTop: 45}}>
        <Content><Searchbar /></Content>
      </Layout>
      <Layout>
        <Sider style={style} width={300} ><LeftSideBar /></Sider>
        <Content style={style}><ContentSection /></Content>
        <Sider style={style} width={300} ><div /></Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    );
  }
}

export default App;
