import React from 'react';
import style from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Messanger from "./Messanger/Messanger";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/formControls/FormControl";
import {maxLenghtCreator, required} from "../../untils/validators/validators";

const Dialogs = (props) => {

    let dialogsElement = props.dialogPage.dialogs
        .map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)
    let messangerElement = props.dialogPage.messangers
        .map(messanger => <Messanger messanger={messanger.messanger}/>)

    let onAddMessanger = (values) => {
        props.addMassenger(values.addMassenger);
    }


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={style.messangers}>
                <div>{messangerElement}</div>
                <div>
                    <AddDialogMassengerFormRedux onSubmit = {onAddMessanger}/>
                </div>
            </div>
        </div>
    )
}

const maxLenght = maxLenghtCreator(35);

const AddDialogMassengerForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field className={style.dialogsImput}
                   component={Textarea}
                   validate={[required,maxLenght]}
                        placeholder="Enter your messanger"
                        name={"addMassenger"}/>
            <div>
                <button className={style.button} > Add messanger</button>
            </div>
        </form>
    )
}
const AddDialogMassengerFormRedux = reduxForm({form : "addMassengerDialog"})(AddDialogMassengerForm)

export default Dialogs;