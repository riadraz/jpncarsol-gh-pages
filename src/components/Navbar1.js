import React, { Component } from 'react';
//import DataTableAnt from '/home/karim/jpncarsol/src/components/DataTableAnt';
//import FormValidation from '/home/karim/jpncarsol/src/components/FormValidation';
import DataTableAnt from '../components/DataTableAnt';
import FormValidation from '../components/FormValidation';
import './App.css';
 class Navbar1 extends React.Component {
    render() {
      return (
          <div className="App">
            <header className="App-header">
             <p className="App-link">API antd form in react JS, 埼玉県 蓮田市〜編集。。</p>
             <FormValidation />
             <DataTableAnt />
             <a 
             className="App-link"
             href="https://github.com/riadraz"
             target="_blank"
             rel="noopener noreferrer"
        >
            Github repo ....
             </a>
           </header>
         </div>
      );
    }
  }
   
  export default Navbar1