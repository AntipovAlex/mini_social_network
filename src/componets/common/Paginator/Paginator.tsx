import styles from "./Paginator.module.css";
import React, {useState, FC} from 'react';
import  cn from "classnames";


type propsType = {
    portionSize?: number
    totalItemCount: number
    pageSize: number
    currentPage: number
    onCurrentPage: (pageNumber: number) => void
}

const Paginator: FC<propsType> = ({portionSize = 20, totalItemCount, pageSize, currentPage, onCurrentPage}) => {

    let pagesCount = Math.ceil(totalItemCount / pageSize);
    let page: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }

    let [portionNumber, setPortionNumber] = useState(1);
    let portionCount = Math.ceil(pagesCount/portionSize);
    let leftPortionPagesNumber = (portionNumber - 1) * portionSize + 1;
    let rigtPortionPagesNumber = portionNumber * portionSize;

    return  <div className={styles.paginator}>
            {portionNumber > 1 &&
            <button className={styles.button} onClick={() => {setPortionNumber(portionNumber - 1 )}}> PREV </button>}

                {page
                .filter(p =>  p >= leftPortionPagesNumber && p <= rigtPortionPagesNumber)
                .map(p => {
                return <span key={p} className={ cn ({
                    [styles.selectPage] : currentPage === p}, styles.pageNumber)}
                             onClick={(e) => {
                                 onCurrentPage(p)
                             }}>{p}</span>
            })}
        {portionCount > portionNumber &&
        <button className={styles.button} onClick={() => { setPortionNumber(portionNumber + 1)}}> NEXT </button>}
        </div>
}
 

export default Paginator;