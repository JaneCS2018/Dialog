import React from 'react'
import Dialog, { DialogType, DialogTitle, DialogContent, DialogActions } from './components/Dialog/Dialog';

import ReactDOM from 'react-dom';



const App = () => {
  return (
    <div style={{margin:'100px'}}>
      <Dialog type={DialogType.Simple} title={DialogTitle.Simple} content={DialogContent.Simple} actions={DialogActions.Simple} />
      <Dialog type={DialogType.Alert} title={DialogTitle.Alert} content={DialogContent.Alert} actions={DialogActions.Alert}/>
      <Dialog type={DialogType.Form} title={DialogTitle.Form} content={DialogContent.Form} actions={DialogActions.Form} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);