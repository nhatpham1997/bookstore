import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';
import { CommentModel } from '../../api/Comment';
import styles from '../../styles/Home/Comments.module.css';

export interface CommentsProps {
    comments: CommentModel[];
}

export default function Comments({ comments }: CommentsProps) {
    return (
        <Container className={styles.comments}>
            <Row>
                <Col sm="12" className={styles.comments_header}>
                    <h3>What people say?</h3>
                </Col>
                <Col sm="12">
                    <Carousel controls={false} indicators={true}>
                        {comments?.map((item) => (
                            <Carousel.Item key={item.id}>
                                <div className={styles.comment_content}>
                                    <div className={styles.avatar}>
                                        <img src={item.avatar} className={styles.avatar_dimensions} />
                                    </div>
                                    <div>
                                        <p>{item.descriptions}</p>
                                        <small>{item.owner}</small>
                                    </div>
                                </div>

                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </Container>

    )
}