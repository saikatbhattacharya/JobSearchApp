import React from 'react';
import { Layout } from 'antd';
import axios from 'axios';
import Menubar from '../components/header';
import Searchbar from '../components/searchbar';
import LeftSideBar from '../components/left-sidebar';
import ContentSection from '../components/content';
import 'antd/dist/antd.css';
import config from '../configs';
// import { JobContext } from '../contexts';
import { JobProvider, SearchProvider } from './Provider';

const { Header, Footer, Sider, Content } = Layout;

const style = {
  leftSideBar: { background: '#F0F2F5', padding: '50px 50px 0 0' },
  content: { background: '#F0F2F5', padding: '50px' },
  rightSideBar: { background: '#F0F2F5', padding: '50px 0 0 50px' }
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      jobList: [],
      searchText: ''
    }
    this.callApi = this.callApi.bind(this);
    this.searchJob = this.searchJob.bind(this);
  }

  callApi(url) {
    axios.get(url)
      .then(result => this.setState({jobList: result.data}))
      .catch(e => console.log(e))
  }

  componentWillMount() {
    const url = `http://${config.apiHost}:${config.apiPort}/jobs`;
    this.callApi(url);
  }

  searchJob(value) {
    const url = `http://${config.apiHost}:${config.apiPort}/jobs/search?searchText=${value}`;
    this.callApi(url);
  }

  render() {
    return (
      <Layout>
        <Header><Menubar /></Header>
        <Layout style={{marginTop: 45}}>
          <SearchProvider value={{searchJob: this.searchJob}}>
            <Content><Searchbar /></Content>
          </SearchProvider>
        </Layout>
        <Layout style={{width: '90%', margin: 'auto'}}>
          <Sider style={style.leftSideBar} width={300} ><LeftSideBar /></Sider>
          <JobProvider value={{jobList: this.state.jobList}}>
              <Content style={style.content}><ContentSection /></Content>
          </JobProvider>
          <Sider style={style.rightSideBar} width={300} ><div /></Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default App;
