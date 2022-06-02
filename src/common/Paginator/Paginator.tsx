import React from 'react';
import s from "../../components/Users/Users.module.css";
import {Pagination} from "@mui/material";

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator: React.FC<PaginatorPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={s.pagination}>
            <Pagination count={pages.length}
                        page={props.currentPage}
                        onChange={(e, num) => props.onPageChanged(num)}
                        color={"primary"}
            />
        </div>
    );
};

