import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Link from 'next/link';
import PageItem from 'react-bootstrap/PageItem'
import { useRouter } from "next/router";
import getAsString from '../../getAsString';

export interface BooksPaginationProps {
  totalPages: number;
}

function BooksPagination({ totalPages }: BooksPaginationProps) {
  let {query} = useRouter();
  let page = parseInt(getAsString(query.page) || '1');
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Link href={{
        pathname: '/books',
        query: { page: number }
      }}
        key={number}
        passHref
      >
          <PageItem key={number} active={number == page}>
            {number}
          </PageItem>
      </Link>
    );
  }

  const prevHandle = () => {
    if(page > 1){
      return (
        <Link href={{
          pathname: '/books',
          query: { page: page-1 }
        }}
        passHref
        >
          <Pagination.Prev/>
        </Link>
      )
    }else{
      return;
    }
  }

  const nextHandle = () => {
    if(page < totalPages){
      return (
        <Link href={{
          pathname: '/books',
          query: { page: page+1 }
        }}
        passHref
        >
          <Pagination.Next/>
        </Link>
      )
    }else{
      return;
    }
  }
  return (
    <Pagination>
      {prevHandle()}
      {items}
      {nextHandle()}
    </Pagination>
  )
}

export default BooksPagination;
