import React from 'react'
import { FormControl, InputGroup, Row, Col, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const Customerheader = () => {
    return (
        <>
            <Row className="customeHeaderbg">

                <Col md={6} className="my-1">
                    <Form>
                        <Row>
                            <Col md={2} className="pt-1">Customer</Col>
                            <Col md={6} className="">
                                <InputGroup>
                                    <InputGroup.Text>@</InputGroup.Text>
                                    <FormControl id="inlineFormInputGroupUsername" placeholder="Username" />
                                </InputGroup>
                            </Col>
                            <Col md={4} className=""> <Button type="submit" size="sm">New</Button></Col>
                        </Row>
                    </Form>
                </Col>
                <Col md={6} className="my-1">
                    sadsd
                </Col>
            </Row>
        </>
    )
}

export default Customerheader;