import React from 'react';
import 'pat-ui/index.css'
import {Dialog, DialogTitle, DialogActions, DialogContent} from 'pat-ui'

const DialogForm = () => {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };
  
    return (
      <div>
        <button onClick={handleClickOpen}>Open form dialog</button>
        <Dialog isOpen={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={handleChange}
              autoFocus
            />
          </DialogContent>
          <DialogActions>
            <div className="dialog-actions-row">
              <button className="dialog-btn" onClick={handleClose}>
                Cancel
              </button>
              <button className="dialog-btn" onClick={handleClose}>
                Subscribe
              </button>
            </div>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  export default DialogForm;