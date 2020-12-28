import styles from "./Paginator.module.css";
import React from 'react';


const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let page = [];
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }
    return (
        <div>
            <div>{page.map(p => {
                return <span key={p} className={props.currentPage === p ? styles.selectPage : null}
                             onClick={(e) => {
                                 props.onCurrentPage(p)
                             }}>{p}</span>
            })}
            </div>
        </div>)
}


export default Paginator;