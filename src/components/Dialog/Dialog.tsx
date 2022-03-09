import React, { useState } from 'react'
import './Dialog.scss'
import { ReactComponent as UserAccount } from '../../asset/icon/Account.svg';
import { ReactComponent as AddUser } from '../../asset/icon/AddUser.svg';
declare module "*.svg"

export enum DialogType {
    Simple,
    Alert,
    Form
}

export enum DialogTitle {
    Simple,
    Alert,
    Form
}

export enum DialogContent {
    Simple,
    Alert,
    Form
}

export enum DialogActions {
    Simple,
    Alert,
    Form
}

interface DialogProps {
    /** set Dialog Type*/
    type?: DialogType
    /** set Dialog Title*/
    title?: DialogTitle,
    /** set Dialog Content*/
    content?: DialogContent,
    /** set Dialog Actions*/
    actions?: DialogActions,
    /** set Dialog click open*/
    onOpen?: () => void,
    /** set Dialog click close*/
    onClose?: () => void
}

const Dialog: React.FC<DialogProps> = ({
    type = DialogType.Simple,
    title = DialogTitle.Simple,
    content = DialogContent.Simple,
    actions = DialogActions.Simple,
    onOpen,
    onClose

}) => {
  
    const [isShow, setIsShow] = useState<boolean>(false)

    const onOpenHandler = () => {
        setIsShow(true)
    }

    const onCloseHandler = () => {
        setIsShow(false)
    }

    return (
        <div className='dialog'>
            <button className='dialog-btn' onClick={onOpenHandler}>{generateDialogButtonText(type)}</button>
            {/* Dialogue Content */}
            <section className={isShow ? 'overlay' : ' overlay overlay-display'} onClick={onCloseHandler}>
                <div className={generateDialogWindow(type)}>
                    <header className='dialog-header'>
                        <div className='dialog-title-simple'>
                            {generateDialogTitle(title)}
                        </div>
                    </header>
                    <div>
                        {generateDialogContent(content)}
                        <footer>
                          {generateDialogActions(actions)}
                        </footer>
                       
                    </div>
                   
                </div>
            </section>
        </div>
    )
}

const generateDialogButtonText = (type: DialogType) => {
    return type === DialogType.Simple ? 'OPEN SIMPLE DIALOG' :
        type === DialogType.Alert ? 'OPEN ALERT DIALOG' :
            'OPEN FORM DIALOG'

}

const generateDialogWindow = (type: DialogType) => {
    return type === DialogType.Simple ? 'dialog-container-simple' :
        type === DialogType.Alert ? 'dialog-container-alert' :
            'dialog-container-form'
}

const generateDialogTitle = (title: DialogTitle) => {
    return title === DialogTitle.Simple ? 'Set backup account' :
        title === DialogTitle.Alert ? "Use Google's location service?" :
            'Subscribe'
}

const generateDialogContent = (content: DialogContent) => {

    
    
    if(content === DialogContent.Simple){
        const items = [
            { 
              email: 'username@gmail.com'
            },
            { email: 'user02@gmail.com' }]
        return <div className='dialog-content-simple'>
                {items.map(item =>
                    <div className="dialog-row">
                        <UserAccount />
                        <span>{item.email}</span>
                    </div>
                )}
            </div>
    }else if (content === DialogContent.Alert){
            return <div>Alert</div>
    }else if (content === DialogContent.Form){
            return <div>Form</div>
    }    


}

const generateDialogActions = (action: DialogActions) => {
    if(action === DialogActions.Simple){
        return  <div className="dialog-row dialog-row-addUser">
                    <AddUser />
                     <span >Add account</span>
                </div>
    }else if (action === DialogActions.Alert){
         return <div>Alert</div>
    }else if (action === DialogActions.Form){
         return <div>Form</div>
    }    
}

export default Dialog;
