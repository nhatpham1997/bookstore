import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Link from 'next/link';
import { ParsedUrlQuery } from "querystring";
import PageItem from 'react-bootstrap/PageItem'
import { useRouter } from "next/router";
import getAsString from '../../getAsString';


export interface BooksPaginationProps {
  totalPages: number;
  page: number;
}

function BooksPagination({ totalPages }: BooksPaginationProps) {
    let {query} = useRouter();
    let page=parseInt(getAsString(query.page) || '1')

    console.log(page)
  let active = 1;
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Link href={{
        pathname: '/books',
        query: { page: number }
      }}
        shallow
        passHref
      >
        
          <PageItem key={number} active={number == page}>
            {number}
          </PageItem>
        
      </Link>
    );
  }
  return (
    <Pagination>
      <Pagination.Prev />
      {items}
      <Pagination.Next />
    </Pagination>
  )
}

export default BooksPagination;
