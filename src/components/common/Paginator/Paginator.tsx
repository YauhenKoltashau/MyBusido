import React from "react";
import styles from './Paginator.module.css'
import {v1} from "uuid";

type PageType = {
    id: string,
    number: number
}
type PaginatorPropsType = {
    totalCount: number
    usersOnPage: number
    currentPageNumber: number
    onClickPageChosen:(pageNumber: number) => void
   }

export const Paginator:React.FC<PaginatorPropsType> = ({totalCount,usersOnPage, currentPageNumber,onClickPageChosen, ...props}) => {
    let totalPages = Math.ceil(totalCount / usersOnPage)
    let pages: Array<PageType> = []
    for (let i = 1; i <= totalPages; i++) {
        let newPage = {
            id: v1(),
            number: i
        }
        pages.push(newPage)
    }
    return (
        <div>
            {pages.map((p) => {
                return (
                    <span key={p.id} onClick={() => onClickPageChosen(p.number)}
                          className={currentPageNumber === p.number ? styles.chosedPage : styles.unChosedPage}>{p.number}</span>
                )
            })
            }

        </div>
    )
}





