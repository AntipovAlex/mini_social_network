import style from "../Dialogs.module.css";

const Messanger = (props) => {
    return (
        <div className={style.messanger}>
            {props.messanger}
        </div>
    )
}
export default Messanger;