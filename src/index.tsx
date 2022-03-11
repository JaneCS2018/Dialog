import React, {MouseEvent} from 'react'
import Dialog, { DialogType, DialogTitle, DialogContent, DialogActions} from './components/Dialog/Dialog';
import ReactDOM from 'react-dom';
import './index.css'



const App = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = ()=>{
    setOpen(true)
  }

  const handleClose = (event: any)=>{
    console.log("Hello")
    event.stopPropagation()
    setOpen(false)
    console.log(event.target.id)
  }
  

  return (
    <div className="App-contnet">

      <button className="dialog-btn" onClick={handleClickOpen}>Open simple dialog</button>
        {open &&
        <Dialog type={DialogType.Form} onOpen={open} onClose={handleClose} >
            <DialogTitle>Title</DialogTitle>
            <DialogContent>
            <label >Enter email addresses:</label>
                <input type="email" id="emails" name="emails"  size={30} multiple />
            </DialogContent>
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