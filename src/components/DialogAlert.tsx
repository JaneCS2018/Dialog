import React from 'react';
import 'pat-ui/index.css'
import {Dialog, DialogTitle, DialogActions, DialogContent} from 'pat-ui'

const DialogAlert = () => {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
      <div>
        <button onClick={handleClickOpen}>Open alert dialog</button>
  
        <Dialog isOpen={open} onClose={handleClose}>
          <DialogTitle>Use Google's location service?</DialogTitle>
          <DialogContent>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContent>
          <DialogActions>
            <div className="dialog-actions-row">
              <button className="dialog-btn" onClick={handleClose}>
                Disagree
              </button>
              <button className="dialog-btn" onClick={handleClose} autoFocus>
                Agree
              </button>
            </div>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  export default DialogAlert;