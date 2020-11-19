import React from 'react';
import style from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Messanger from "./Messanger/Messanger";
import {AddMessangerActionCreater, UpdeateNewMessangerTextActionCreater} from "../../redux/DialogsReduser";

const Dialogs = (props) => {

    let dialogsElement = props.dialogPage.dialogs
        .map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)
    let messangerElement = props.dialogPage.messangers
        .map(messanger => <Messanger messanger={messanger.messanger}/>)

    let onAddMessanger = () => {
        props.addMassenger();
    }

    let onDialogChange = (e) => {
        let text = e.target.value;
        props.updateNewMessangeText(text)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={style.messangers}>
                <div>{messangerElement}</div>
                <div>
                    <div><textarea className={style.dialogsImput}
                    placeholder="Enter your messanger"
                                   onChange={onDialogChange}
                                   value={props.dialogPage.newDialogText}/>
                    </div>
                    <div>
                        <button className={style.button} onClick={onAddMessanger}> Add messanger</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;