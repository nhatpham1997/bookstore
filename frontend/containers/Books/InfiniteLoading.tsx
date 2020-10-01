import InfiniteScroll from 'react-infinite-scroller';
import { useEffect, useState } from 'react';
import Col from "react-bootstrap/Col";
import Link from "next/link";
import styles from '../../styles/Books/InfiniteLoading.module.css';
import Row from "react-bootstrap/Row";

const booksData = [
    {
        id: 1,
        name: 'American Fun',
        category: 'HEALTH, TEENS',
        author: 'PATRICK MODIANO',
        publisher: 'CENGAGE LEARNING',
        language: 'ENGLISH',
        pages: 89,
        yearPublished: 2009,
        picture: '/books/American_Fun.jpg',
        price: 45.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 2,
        name: 'A Girl Is a Half-Formed Thing',
        category: 'ROMANCE, TEENS',
        author: 'ISMAIL KADARE',
        publisher: 'THOMSON/REUTERS',
        language: 'ENGLISH',
        pages: 412,
        yearPublished: 1948,
        picture: '/books/A_Girl_Is_a_Half-Formed_Thing.jpg',
        price: 15.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 3,
        name: 'Your Face in Mine',
        category: 'LITERATURE',
        author: 'LEO TOLSTOY',
        publisher: 'REED ELSEVIER',
        language: 'ENGLISH',
        pages: 514,
        yearPublished: 2002,
        picture: '/books/your_face_in_mine.jpg',
        price: 29.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 4,
        name: 'The Beauty and The Beast',
        category: 'FANTASY',
        author: 'LEO TOLSTOY',
        publisher: 'PEARSON',
        language: 'GERMAN',
        pages: 272,
        yearPublished: 1984,
        picture: '/books/the_beauty_and_the_beast.png',
        price: 28.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 5,
        name: 'All Our Names',
        category: 'LITERATURE',
        author: 'FRANZ KAFKA',
        publisher: 'PEARSON',
        language: 'ENGLISH, GERMAN',
        pages: 319,
        yearPublished: 2014,
        picture: '/books/all_our_names.jpg',
        price: 15.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 6,
        name: 'Into the War',
        category: 'HISTORY',
        author: 'LEO TOLSTOY',
        publisher: 'PEARSON',
        language: 'GERMAN',
        pages: 272,
        yearPublished: 1984,
        picture: '/books/into_the_war.jpg',
        price: 15.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 7,
        name: 'The Third Plate',
        category: 'HISTORY, NOBEL BOOKS',
        author: 'DAN BARBER',
        publisher: 'PEARSON',
        language: 'ENGLISH, GERMAN',
        pages: 319,
        yearPublished: 2014,
        picture: '/books/The_Third_Plate.jpg',
        price: 34.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 8,
        name: 'The Silent History',
        category: 'HISTORY',
        author: 'ISMAIL KADARE',
        publisher: 'WOLTERS KLUWER',
        language: 'FRENCH, GERMAN',
        pages: 194,
        yearPublished: 1977,
        picture: '/books/The_Silent_History.jpg',
        price: 24.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 9,
        name: 'The Casual Optimist',
        category: 'BUSINESS',
        author: 'FRANZ KAFKA',
        publisher: 'REED ELSEVIER',
        language: 'ENGLISH',
        pages: 287,
        yearPublished: 1897,
        picture: '/books/The_Casual_Optimist.jpg',
        price: 19.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 10,
        name: 'Can’t and Won’t',
        category: 'FANTASY',
        author: 'ISMAIL KADARE',
        publisher: 'RANDOM HOUSE',
        language: 'ENGLISH',
        pages: 718,
        yearPublished: 2007,
        picture: '/books/Can’t_and_Won’t.jpg',
        price: 19.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 11,
        name: 'Silence Once Begun',
        category: 'FANTASY, LITERATURE',
        author: 'LEO TOLSTOY',
        publisher: 'THOMSON/REUTERS',
        language: 'ALBANIAN, FRENCH',
        pages: 201,
        yearPublished: 2015,
        picture: '/books/Silence_Once_Begun.jpg',
        price: 29.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 12,
        name: 'Never Love a Gambler',
        category: 'ROMANCE',
        author: 'FYODOR DOSTOYEVSKY',
        publisher: 'WOLTERS KLUWER',
        language: 'ENGLISH',
        pages: 647,
        yearPublished: 2001,
        picture: '/books/Can’t_and_Won’t.jpg',
        price: 21.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 13,
        name: 'Colorless Tsukuru',
        category: 'FANTASY, LITERATURE',
        author: 'HARUKI MURAKAMI',
        publisher: 'REED ELSEVIER',
        language: 'ENGLISH, GERMAN',
        pages: 428,
        yearPublished: 1998,
        picture: '/books/Can’t_and_Won’t.jpg',
        price: 34.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 14,
        name: 'American Fun',
        category: 'HEALTH, TEENS',
        author: 'PATRICK MODIANO',
        publisher: 'CENGAGE LEARNING',
        language: 'ENGLISH',
        pages: 89,
        yearPublished: 2009,
        picture: '/books/American_Fun.jpg',
        price: 45.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 15,
        name: 'A Girl Is a Half-Formed Thing',
        category: 'ROMANCE, TEENS',
        author: 'ISMAIL KADARE',
        publisher: 'THOMSON/REUTERS',
        language: 'ENGLISH',
        pages: 412,
        yearPublished: 1948,
        picture: '/books/A_Girl_Is_a_Half-Formed_Thing.jpg',
        price: 15.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 16,
        name: 'Your Face in Mine',
        category: 'LITERATURE',
        author: 'LEO TOLSTOY',
        publisher: 'REED ELSEVIER',
        language: 'ENGLISH',
        pages: 514,
        yearPublished: 2002,
        picture: '/books/your_face_in_mine.jpg',
        price: 29.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 17,
        name: 'The Beauty and The Beast',
        category: 'FANTASY',
        author: 'LEO TOLSTOY',
        publisher: 'PEARSON',
        language: 'GERMAN',
        pages: 272,
        yearPublished: 1984,
        picture: '/books/the_beauty_and_the_beast.png',
        price: 28.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 18,
        name: 'All Our Names',
        category: 'LITERATURE',
        author: 'FRANZ KAFKA',
        publisher: 'PEARSON',
        language: 'ENGLISH, GERMAN',
        pages: 319,
        yearPublished: 2014,
        picture: '/books/all_our_names.jpg',
        price: 15.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 19,
        name: 'Into the War',
        category: 'HISTORY',
        author: 'LEO TOLSTOY',
        publisher: 'PEARSON',
        language: 'GERMAN',
        pages: 272,
        yearPublished: 1984,
        picture: '/books/into_the_war.jpg',
        price: 15.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 20,
        name: 'The Third Plate',
        category: 'HISTORY, NOBEL BOOKS',
        author: 'DAN BARBER',
        publisher: 'PEARSON',
        language: 'ENGLISH, GERMAN',
        pages: 319,
        yearPublished: 2014,
        picture: '/books/The_Third_Plate.jpg',
        price: 34.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 21,
        name: 'The Silent History',
        category: 'HISTORY',
        author: 'ISMAIL KADARE',
        publisher: 'WOLTERS KLUWER',
        language: 'FRENCH, GERMAN',
        pages: 194,
        yearPublished: 1977,
        picture: '/books/The_Silent_History.jpg',
        price: 24.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 22,
        name: 'The Casual Optimist',
        category: 'BUSINESS',
        author: 'FRANZ KAFKA',
        publisher: 'REED ELSEVIER',
        language: 'ENGLISH',
        pages: 287,
        yearPublished: 1897,
        picture: '/books/The_Casual_Optimist.jpg',
        price: 19.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 23,
        name: 'Can’t and Won’t',
        category: 'FANTASY',
        author: 'ISMAIL KADARE',
        publisher: 'RANDOM HOUSE',
        language: 'ENGLISH',
        pages: 718,
        yearPublished: 2007,
        picture: '/books/Can’t_and_Won’t.jpg',
        price: 19.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 24,
        name: 'Silence Once Begun',
        category: 'FANTASY, LITERATURE',
        author: 'LEO TOLSTOY',
        publisher: 'THOMSON/REUTERS',
        language: 'ALBANIAN, FRENCH',
        pages: 201,
        yearPublished: 2015,
        picture: '/books/Silence_Once_Begun.jpg',
        price: 29.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 25,
        name: 'Never Love a Gambler',
        category: 'ROMANCE',
        author: 'FYODOR DOSTOYEVSKY',
        publisher: 'WOLTERS KLUWER',
        language: 'ENGLISH',
        pages: 647,
        yearPublished: 2001,
        picture: '/books/Can’t_and_Won’t.jpg',
        price: 21.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 26,
        name: 'Colorless Tsukuru',
        category: 'FANTASY, LITERATURE',
        author: 'HARUKI MURAKAMI',
        publisher: 'REED ELSEVIER',
        language: 'ENGLISH, GERMAN',
        pages: 428,
        yearPublished: 1998,
        picture: '/books/Can’t_and_Won’t.jpg',
        price: 34.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
];

export default function InfiniteLoading() {
    const [hasMoreItems, sethasMoreItems] = useState(true);
    const [totalBooks, settotalBooks] = useState([]);
    const [books, setBooks] = useState(booksData.slice(0, 9));
    const totalPage = Math.ceil(books.length/3);
    const items = [];
    books.map((item) => {
        items.push(
            <Col sm="4" key={item.id}>
                <Link href="/book/[id]" as={`/book/${item.id}`}>
                    <div className={styles.product_item}>
                        <div className={styles.item_image}>
                            <img src={item.picture}></img>
                        </div>
                        <div className={styles.item_info}>
                            <h3>{item.name}</h3>
                            <small>{item.category}</small>
                            <p>€{item.price}</p>
                        </div>
                    </div>
                </Link>
            </Col>
        )
    })
    const handleLoadMore = (page) => {
        console.log(page);
        console.log(totalPage);
        const ofset = 0;
        const limit = 3;
        if(page === totalPage){
            sethasMoreItems(false);
        }else {
            
            const moreBooks = books.slice(ofset + ofset*page, limit*page);
            setBooks(books.concat(moreBooks))
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