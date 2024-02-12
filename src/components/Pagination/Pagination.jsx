import React from 'react';
import ReactPaginate from 'react-paginate';
import { ArrowBottom } from '../../asset/icon';

export default function Pagination({ pageRangeDisplayed = 5, totalCount = 10, onPageChange = () => { } }) {
    return (
        <div>
            <ReactPaginate
                breakLabel="..."
                previousLabel={
                    <div className="border rounded-l-md border-r-0 w-16 border-primary opacity-50 flex items-center justify-center">
                        <ArrowBottom className="rotate-90 h-[3.9rem] w-9" />
                    </div>
                }
                nextLabel={
                    <div className="border rounded-r-md border-l-0 w-16 border-primary opacity-50 flex items-center justify-center">
                        <ArrowBottom className="-rotate-90 h-[3.9rem] w-9" />
                    </div>
                }
                onPageChange={onPageChange}
                pageRangeDisplayed={pageRangeDisplayed}
                pageCount={totalCount}
                renderOnZeroPageCount={null}
                containerClassName="flex items-center h-16 justify-end w-full overflow-auto"
                breakLinkClassName="p-[1.2rem] border border-l-0 border-r-0 border-primary border-opacity-40"
                activeClassName="bg-primary text-secondary"
                pageClassName="border border-primary border-opacity-40 h-full w-14 flex items-center justify-center text-xl font-normal text-headline"
            />
        </div>
    )
}
