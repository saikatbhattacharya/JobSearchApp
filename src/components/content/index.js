import React from 'react';
import { Row } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import { JobContext } from '../../contexts';

import { PaperBox } from '../common';

class Content extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <JobContext.Consumer>
        {context => (
          <div className="content-body">
            {
              context.jobList.map((each, index) => (
                <PaperBox
                  key={index}
                  jobTitle={each.title}
                  availability={each.availability}
                  payment={each.payRate}
                  companyName={each.companyName}
                  location={each.location}
                  replyRate={each.replyRate}
                  jobDesc={each.jobDesc}
                  tags={each.tags}
                />
              ))
            }
          </div>)}
      </JobContext.Consumer>
    )
  }
}

export default Content;