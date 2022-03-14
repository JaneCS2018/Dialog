import React from 'react';
import 'pat-ui/index.css'
import {Dialog, DialogTitle, DialogActions, DialogContent} from 'pat-ui'
import UserAccount from '../asset/icon/account.svg';
import AddUser from '../asset/icon/addUser.svg';


const DialogSimple = () => {
    const emails = ['username@gmail.com', 'user02@gmail.com'];
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
      <div>
        <button onClick={handleClickOpen}>Open simple dialog</button>
        <Dialog isOpen={open} onClose={handleClose}>
          <DialogTitle>Set backup account</DialogTitle>
          <DialogContent>
            {emails.map((email) => (
              <div className="email-row" onClick={handleClose}>
                <img src={UserAccount} alt="userAccount" />
                <span>{email}</span>
              </div>
            ))}
          </DialogContent>
          <div className="dialog-actions-simple-row">
            <img src={AddUser} alt="addUser" />
            <span>Add account</span>
          </div>
        </Dialog>
      </div>
    );
  };

export default DialogSimple;