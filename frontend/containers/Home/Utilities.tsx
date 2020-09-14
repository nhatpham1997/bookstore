import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from '../../styles/Home/Utilities.module.css';

function Utilities() {
    return (
        <div className={styles.utilities}>
            <Container>
                <Row >
                    <Col sm="12" className={styles.shipping}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>FREE SHIPPING</Card.Title>
                                <Card.Text>FREE SHIPPING OVER $59 FOR INTERNATIONAL ORDERS</Card.Text>
                                <Button variant="dark">Get a book!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <div className={styles.card}>
                            <a>
                                <img className={styles.card_image} src="/card_01.jpg" />
                                <div className={styles.card_text}>
                                    <strong>Library</strong>
                                    <p>Reading space</p>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col sm="4">
                        <div className={styles.card}>
                            <a>
                                <img className={styles.card_image} src="/card_02.jpg" />
                                <div className={styles.card_text}>
                                    <strong>Furnishing</strong>
                                    <p>Home furnishment</p>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col sm="4">
                        <div className={styles.card}>
                            <a>
                                <img className={styles.card_image} src="/card_03.jpg" />
                                <div className={styles.card_text}>
                                    <strong>Ebooks</strong>
                                    <p>Your reading tool</p>
                                </div>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Utilities;
