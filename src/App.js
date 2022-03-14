import React from 'react';
import './App.scss';
import 'pat-ui/index.css'
import {Dialog, DialogTitle, DialogActions, DialogContent} from 'pat-ui'
import DefaultDialog from './components/DefaultDialog.tsx';
import DialogAlert from './components/DialogAlert.tsx';
import DialogForm from './components/DialogForm.tsx'
import DialogSimple from './components/DialogSimple.tsx';

function App() {

  return (
    <div className="App">

       <DialogSimple />
       {/* <DefaultDialog /> */}
       {/* <DialogAlert /> */}
       {/* <DialogForm /> */}
    </div>
  );
}

export default App;
