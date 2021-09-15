import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormControl, InputGroup, Row, Table, Col, Tabs, Tab, Button, Form, Card } from 'react-bootstrap';
import Cardbox from './Cardbox'
import Formbox from './Formbox'
import Customerform from './Customerform'
import Rebatefrom from './Rebatefrom'
import Betweenmain from './Betweenmain'
import Updatefull from './Updatefull'
import Fedex from './images/FedEx-Logo-PNG-Transparent.png'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

const Customerpage = () => {
    const n = 18;
    const Addnote = () => {
        alert("add")
    }
    return (
        <>
            <Row className="customerpagebg p-1">

                <Col md={6} className="my-1">
                    {
                        [...Array(n)].map((e, i) =>
                            <Cardbox
                                brand={Fedex}
                                custometitle="Customer"
                                brandname="Lifestyle"
                                contacttitle="Contact"
                                contactemail="ankit.sha@.com"
                                shipmenttitle="ACTIVE SHIPMENT"
                                contactnumber="2345"
                                btnname="Detail"
                            />)
                    }



                </Col>
                <Col md={6} className="my-1 cutomertab">
                    <Tabs defaultActiveKey="finance" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="profile" title="Company profile">
                            <Card>
                                <Card.Body>dsfdsf</Card.Body>
                            </Card>
                        </Tab>
                        <Tab eventKey="contact" title="Contact Detail">
                            <Card>
                                <Card.Body>two</Card.Body>
                            </Card>
                        </Tab>
                        <Tab eventKey="finance" title="Finance">
                            <Card>
                                <Card.Body>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Select size="sm">
                                                <option>SELECT BROKER NAME</option>
                                                <option>Eric</option>
                                                <option>jhone</option>
                                                <option>Enose</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="9">
                                            <Row >
                                                <Col md="12" className="viewpast rowmt10"><a href="#">VIEW PAST FEES Changesa</a></Col>
                                            </Row>
                                            <Table bordered hover size="sm">

                                                <tbody>
                                                    <tr>

                                                        <td>
                                                            <Formbox
                                                                titleform="Entry Fees"
                                                                inputvalue=""
                                                                inputplaceholder="enter"
                                                            />
                                                        </td>
                                                        <td>
                                                            <Formbox
                                                                titleform="exp. fees"
                                                                inputvalue=""
                                                                inputplaceholder="enter"
                                                            />
                                                        </td>
                                                        <td>
                                                            <Formbox
                                                                titleform="flour setup fees"
                                                                inputvalue=""
                                                                inputplaceholder="enter"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td>
                                                            <Formbox
                                                                titleform="Services Fees (General)"
                                                                inputvalue=""
                                                                inputplaceholder="enter"
                                                            />
                                                        </td>
                                                        <td>
                                                            <Formbox
                                                                titleform="Services Fees (Demurrage)"
                                                                inputvalue=""
                                                                inputplaceholder="enter"
                                                            />
                                                        </td>
                                                        <td>
                                                            <Formbox
                                                                titleform="Services Fees (Air Storage)"
                                                                inputvalue=""
                                                                inputplaceholder="enter"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td colSpan="3">
                                                            <Formbox
                                                                titleform="Entry Fees"
                                                                inputvalue=""
                                                                inputplaceholder="enter"
                                                            />
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                        <Col md="3" className="btnupadte">
                                            <Button variant="secondary" size="sm">
                                                update Fees
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6" className="onlyleftalign"><h6 className="onlyleftuppercase discounttext">Discounts</h6></Col>
                                        <Col md="6" className="viewpast "><a href="#">VIEW PAST Discount CHANGESA</a></Col>
                                    </Row>
                                    <Customerform
                                        formtitle="Fixed period Discount (per Shipment)"
                                        locale="mm-dd-y"

                                    />
                                    <Customerform
                                        formtitle="Volume Discount (per Shipment flat)"
                                        locale="mm-dd-y"

                                    />
                                    <Rebatefrom
                                        formtitle="Rebate (per Shipment)"
                                        locale="mm-dd-y"

                                    />
                                    <Betweenmain
                                        formtitle="Tiered Discount (per Shipment)"
                                        locale="mm-dd-y"

                                    />
                                    <Row>
                                        <Col md="12"><PlaylistAddIcon onClick={Addnote} /> Add Tier</Col>
                                    </Row>
                                    <Updatefull />
                                </Card.Body>
                            </Card>
                        </Tab>
                        <Tab eventKey="compliance" title="Compliance">
                            <Card>
                                <Card.Body>three</Card.Body>
                            </Card>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </>
    )
}

export default Customerpage;