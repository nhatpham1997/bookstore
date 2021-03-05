import InfiniteScroll from 'react-infinite-scroller';
import { useEffect, useState } from 'react';
import Col from "react-bootstrap/Col";
import Link from "next/link";
import styles from '../../styles/Books/InfiniteLoading.module.css';
import Row from "react-bootstrap/Row";
import {formatCurrency} from '../../utils';

export default function InfiniteLoading(books) {
    const [hasMoreItems, sethasMoreItems] = useState(true);
    const [totalBooks, setTotalBooks] = useState(books.books);
    const totalPage = Math.ceil(books.books.length/3);
    const items = [];
    totalBooks?.map((item) => {
        items.push(
            <Col sm="4" key={item._id}>
                <Link href="/book/[id]" as={`/book/${item._id}`}>
                    <div className={styles.product_item}>
                        <div className={styles.item_image}>
                            <img src={`${process.env.PHOTOS_API_URL}/${item.photos[0].path}`}></img>
                        </div>
                        <div className={styles.item_info}>
                            <h3>{item.name}</h3>
                            <small>{item.categoryId.name}</small>
                            <p>{formatCurrency(item.price)}</p>
                        </div>
                    </div>
                </Link>
            </Col>
        )
    })
    const handleLoadMore = (page) => {
        const ofset = 0;
        const limit = 3;
        if(page === totalPage){
            sethasMoreItems(false);
        }else {
            const moreBooks = books.books.slice(ofset + ofset*page, limit*page);
            setTotalBooks(books.books.concat(moreBooks))
        }
    }

    return <InfiniteScroll
        pageStart={0}
        loadMore={handleLoadMore}
        hasMore={hasMoreItems}
        loader={<div className="loader" key={0}>Loading ...</div>}
    >
        <Row>
        {items}
        </Row>
    </InfiniteScroll>
}