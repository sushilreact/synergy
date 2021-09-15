import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';
const Formbox = (props) => {
    return (
        <>
            <Row>
                <Col md="12 onlyleftalign lableF">{props.titleform}</Col>
            </Row>
            <Row>
                <Col md="12 onlyleftalign"><b>$</b>  <Form.Control size="sm" type="text" placeholder={props.inputplaceholder} defaultValue={props.inputvalue} className="entryfeesinput" /></Col>

            </Row>
        </>
    )
}
export default Formbox;