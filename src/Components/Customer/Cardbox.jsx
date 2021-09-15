import React from 'react'
import { FormControl, InputGroup, Row, Col, Button, Form, Card } from 'react-bootstrap'


const Cardbox = (props) => {
    return (
        <>
            <Card className="hoverset">
                <Card.Body className="card_space_remove">
                    <Row className="productcustomespace">
                        <Col md={1}>
                            <Card.Img variant="top" src={props.brand} className="card_img_mr" />
                        </Col>
                        <Col md={2} className="txalleft customerText ptL">
                            <h6>{props.custometitle}</h6>
                            <h4>{props.brandname}</h4>
                        </Col>
                        <Col md={3} className="txalleft customerText ptL">
                            <h6>{props.contacttitle}</h6>
                            <h5>{props.contactemail}</h5>
                        </Col>
                        <Col md={4} className="txalleft customerText ptL26">
                            <h6>{props.shipmenttitle}</h6>
                            <h5>{props.contactnumber}</h5>
                        </Col>
                        <Col md={2} className="colpdR">
                            <Button variant="outline-info" className="btncustomespace detailbtn">{props.btnname}</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}
export default Cardbox;