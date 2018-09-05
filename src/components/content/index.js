import React from 'react';
import { Row } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

import { PaperBox } from '../common';

const dummyJobs = [
  {
    jobTitle: 'PHP Developer',
    availability: 'Full-Time',
    payment: '$40/hr',
    companyName: 'ABC Consultant',
    location: 'New York',
    replyRate: '62%',
    jobDesc: 'Some long text. Some long text. Some long text. Some long text.',
    tags: ['UI', 'Web', 'API', 'Development']
  },
  {
    jobTitle: 'PHP Developer',
    availability: 'Full-Time',
    payment: '$40/hr',
    companyName: 'ABC Consultant',
    location: 'New York',
    replyRate: '62%',
    jobDesc: 'Some long text. Some long text. Some long text. Some long text.',
    tags: ['UI', 'Web', 'API', 'Development']
  }
]

class Content extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="content-body">
        {
          dummyJobs.map(each => (
            <PaperBox
              jobTitle={each.jobTitle}
              availability={each.availability}
              payment={each.payment}
              companyName={each.companyName}
              location={each.location}
              replyRate={each.replyRate}
              jobDesc={each.jobDesc}
              tags={each.tags}
            />
          ))
        }
      </div>
    )
  }
}

export default Content;