import React from 'react';
import 'pat-ui/index.css'
import {Dialog, DialogTitle, DialogActions, DialogContent} from 'pat-ui'

const DefaultDialog = () => {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
      <div>
        <button onClick={handleClickOpen}>Open default dialog</button>
  
        <Dialog isOpen={open} onClose={handleClose}>
          <DialogTitle>Dialog header</DialogTitle>
          <DialogContent>Dialog body text</DialogContent>
          <DialogActions>
            <div className="dialog-actions-row">
              <button className="dialog-btn" onClick={handleClose}>
                Action1
              </button>
              <button className="dialog-btn" onClick={handleClose} autoFocus>
                Action2
              </button>
            </div>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  export default DefaultDialog;