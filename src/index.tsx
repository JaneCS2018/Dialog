import React from 'react'
import Dialog, { DialogType, DialogTitle, DialogContent } from './components/Dialog/Dialog';

import ReactDOM from 'react-dom';



const App = () => {
  return (
    <div style={{margin:'100px'}}>
      <Dialog type={DialogType.Simple} title={DialogTitle.Simple} content={DialogContent.Simple} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);