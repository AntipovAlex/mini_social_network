import {NavLink} from "react-router-dom";
import React from "react";
import style from "../Dialogs.module.css";

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={style.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnHg-gHuCXAIO8K5J7g0T8ugOoi-fKoSBeWg&usqp=CAU"/>
            <NavLink to={path} activeClassName={style.aktivLink}>{props.name}</NavLink>
        </div>
    );
}
export default DialogsItem;