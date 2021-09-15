import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormControl, InputGroup, Row, Table, Col, Tabs, Tab, Button, Form, Card } from 'react-bootstrap';
import Discountform from './Discountform'
import Selectbox from './Selectbox'
import CloseIcon from '@material-ui/icons/Close';
const Rebatefrom = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <>
            <Row>
                <Col md="12">
                    <label className="label_Fixed">{props.formtitle}</label>
                    <Card className="card_space_remove">
                        <Card.Body className="cardbody">
                            <Row className="setspace">
                                <Col md="3">
                                    <Discountform
                                        title="Fixed Rate Amount"
                                        inputplaceholder="10"
                                        inputvalue=""
                                        customeclass="entryfeesinput newamount"
                                    />
                                </Col>
                                <Col md="2">

                                </Col>
                                <Col md="3" className="border_Right">
                                    <Selectbox
                                        title="Currency Type"
                                        inputplaceholder="10"
                                        bydefaultvalue="USD"
                                        customeclass="mycle2"
                                    />
                                    <CloseIcon className="closepostionSet" />
                                </Col>

                                <Col md="4" className="padding_LeftDate">
                                    <Discountform
                                        title="Until no. of shipment Reached"
                                        inputplaceholder="1000"
                                        inputvalue=""
                                        customeclass="entryfeesinput newamount"
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
export default Rebatefrom;