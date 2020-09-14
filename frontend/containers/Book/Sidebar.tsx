import Card from "react-bootstrap/Card";
import { BookModel } from "../../api/Book";
import styles from '../../styles/Book/Sidebar.module.css';
import Link from "next/link";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export interface SidebarProps {
    books: BookModel[];
}

export default function Sidebar({ books }: SidebarProps) {
    return (
        <div className={styles.sidebar}>
            <Card className={styles.card_dimensions}>
                <Card.Header>
                    <div className={styles.card_header}>Bestsellers</div>
                </Card.Header>
                {books.map((item) => (
                    <Link key={item.id} href="/book/[id]" as={`/book/${item.id}`}>
                        <Card.Body className={styles.card_item}>
                            <Card.Img src={item.picture} />
                            <Card border="white">
                                <div className={styles.card_name}>{item.name}</div>
                                <div className={styles.card_price}>€{item.price}</div>
                            </Card>
                        </Card.Body>
                    </Link>
                ))}
            </Card>
            <Card className={styles.card_dimensions}>
                <Card.Header>
                    <div className={styles.card_header}>Book Genres</div>
                </Card.Header>
                {books.map((item) => (
                    <Link key={item.id} href="/book/[id]" as={`/book/${item.id}`}>
                        <Card.Body className={styles.card_item}>
                            <div className={styles.card_name}>{item.category}</div>
                        </Card.Body>
                    </Link>
                ))}
            </Card>
            <Card className={styles.card_dimensions}>
                <Card.Header>
                    <div className={styles.card_header}>Search The Library</div>
                </Card.Header>
                <Card.Body>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-lg-1" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}