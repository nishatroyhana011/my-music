import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './Router/Main';

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
            <div className='row vh-100 p-0'>
                <div className='col-sm-3 bg-info d-flex aligns-items-center px-0'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-sm-9 px-0'>
                    <Main></Main>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
