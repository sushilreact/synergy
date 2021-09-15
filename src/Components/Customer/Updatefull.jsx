import React, { useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import Updatesmall from './Updatesmall'

const Updatefull = (props) => {

    return (
        <>
            <Row>
                <Col md="12">
                    <label className="label_Fixed">{props.formtitle}</label>
                    <Card className="card_space_remove">
                        <Card.Body className="cardbody">
                            <Row className="setspace">
                                <Col md="12">
                                    <Updatesmall
                                        title="Upadte notes"
                                        inputplaceholder=""

                                        customeclass="entryfeesinput updatesmall"
                                    />
                                </Col>





                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default Updatefull;