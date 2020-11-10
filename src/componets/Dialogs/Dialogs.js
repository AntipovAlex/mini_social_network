import React from 'react';
import style from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Messanger from "./Messanger/Messanger";


const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs
        .map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)
    let messangerElement = props.state.messangers
        .map(messanger => <Messanger messanger={messanger.messanger}/>)

    let newMessangerElement = React.createRef();

    let addMessanger = () => {
        let text = newMessangerElement.current.value;
        alert(text);
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={style.messangers}>
                {messangerElement}
            </div>
            <div>
                <textarea ref={newMessangerElement}></textarea>
                <div>
                    <button onClick={addMessanger}> Add messanger</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;