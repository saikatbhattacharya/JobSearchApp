import React from 'react';
import { Layout } from 'antd';
import Menubar from '../components/header';
import Searchbar from '../components/searchbar';
import LeftSideBar from '../components/left-sidebar';
import ContentSection from '../components/content';
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;

const style = {
  leftSideBar: { background: '#F0F2F5', padding: '50px 50px 0 0' },
  content: { background: '#F0F2F5', padding: '50px' },
  rightSideBar: { background: '#F0F2F5', padding: '50px 0 0 50px' }
}

class App extends React.Component {
  render() {
    return (
      <Layout>
      <Header><Menubar /></Header>
      <Layout style={{marginTop: 45}}>
        <Content><Searchbar /></Content>
      </Layout>
      <Layout style={{width: '90%', margin: 'auto'}}>
        <Sider style={style.leftSideBar} width={300} ><LeftSideBar /></Sider>
        <Content style={style.content}><ContentSection /></Content>
        <Sider style={style.rightSideBar} width={300} ><div /></Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    );
  }
}

export default App;
