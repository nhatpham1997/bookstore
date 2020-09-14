import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import { BookModel } from '../../api/Book';
import Link from 'next/link';
import styles from '../../styles/Book/Tablist.module.css';

export interface TablistProps {
    book: BookModel;
}

export default function Tablist({book}: TablistProps) {
    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" defaultActiveKey="additional information">
            <Tab eventKey="additional information" title="Additional information">
                <Table striped hover>
                    <tbody>
                        <tr>
                            <td>BOOK AUTHOR</td>
                            <td><Link href="#"><a className={styles.link}>{book.author}</a></Link></td>
                        </tr>
                        <tr>
                            <td>PUBLISHER</td>
                            <td><Link href="#"><a className={styles.link}>{book.publisher}</a></Link></td>
                        </tr>
                        <tr>
                            <td>LANGUAGE</td>
                            <td><Link href="#"><a className={styles.link}>{book.language}</a></Link></td>
                        </tr>
                        <tr>
                            <td>PAGES</td>
                            <td><Link href="#"><a className={styles.link}>{book.pages}</a></Link></td>
                        </tr>
                        <tr>
                            <td>YEAR PUBLISHED</td>
                            <td><Link href="#"><a className={styles.link}>{book.yearPublished}</a></Link></td>
                        </tr>
                    </tbody>
                </Table>
            </Tab>
            <Tab eventKey="reviews" title="Reviews (0)">
                <div>Reviews</div>
            </Tab>
        </Tabs>
    )
}