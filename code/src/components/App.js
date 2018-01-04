import React, { Component } from 'react';

import { employees, companyInfo } from '../company-data';

import Header from './Header';
import PageHeader from './UI/Page-Header';
import Card from './Card';

class App extends Component {
  constructor() {
    super();

    this.state = {
      companyInfo,
      employees
    };
  }
  
  render() {
    return (
      <div className="App">
        <Header data={this.state.companyInfo}/>
        <PageHeader pageName="Our Employees"/>
        
        <div className="wrapper">
          <div className="content">
            {
              Object
                .keys(this.state.employees)
                .map(key => <Card key={key} meta={this.state.employees[key]} />)
            }
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
