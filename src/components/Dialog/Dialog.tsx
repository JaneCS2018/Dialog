import React from 'react'
import './Dialog.scss'

export enum DialogType{
    Simple,
    Alert,
    Form
}
 
export enum DialogTitle{
    Simple,
    Alert,
    Form
}
 
export enum DialogContent{
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
    content?:DialogContent,
     /** set Dialog click open*/
    onOpen?:()=>void,
    /** set Dialog click close*/
    onClose?:()=>void
}

const Dialog:React.FC<DialogProps> = ({
    type=DialogType.Simple,
    title=DialogTitle.Simple,
    content = DialogContent.Simple,
    onOpen,
    onClose
        
})=>{
    return (
        <div className='dialog'>
            <button className='dialog-btn'>ButtonTest</button>
            {/* Dialogue Content */}
            <section className='overlay'>
               <div className='dialog-container-simple'>
                    <header className='dialog-title-simple'>Set backup account</header>
                    <div className='dialog-content-simple'></div>
                </div> 
            </section>

        </div>
    )
}


export default Dialog;
