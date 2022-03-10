import React from 'react'
import Dialog, { DialogType, DialogTitle, DialogContent, DialogActions} from './components/Dialog/Dialog';
import ReactDOM from 'react-dom';
import './index.css'



const App = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = ()=>{
    setOpen(true)
  }

  const handleClose = ()=>{
    setOpen(false)
  }
  
  return (
    <div className="App-contnet">
      <button className="dialog-btn" onClick={handleClickOpen}>Open simple dialog</button>
        {open &&
        <Dialog type={DialogType.Simple} onOpen={open} onClose={handleClose} >
            <DialogTitle>Title</DialogTitle>
            <DialogContent>Content</DialogContent>
            <DialogActions>
               Actions
            </DialogActions>
        </Dialog>}

    </div>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);