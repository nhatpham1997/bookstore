import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import { BookModel } from '../../api/Book';

export interface TablistProps {
    book: BookModel;
}

export default function Tablist({book}: TablistProps) {
    return (
        <Tabs defaultActiveKey="additional information" id="uncontrolled-tab-example">
            <Tab eventKey="additional information" title="Thông tin chi tiết">
                <Table striped hover>
                    <tbody>
                        <tr>
                            <td>Tác giả</td>
                            <td>{book.authorId.name}</td>
                        </tr>
                        <tr>
                            <td>Nhà xuất bản</td>
                            <td>{book.publisherId.name}</td>
                        </tr>
                        <tr>
                            <td>Số trang</td>
                            <td>{book.pages}</td>
                        </tr>
                        <tr>
                            <td>Năm xuất bản</td>
                            <td>{book.yearPublished}</td>
                        </tr>
                    </tbody>
                </Table>
            </Tab>
        </Tabs>
    )
}