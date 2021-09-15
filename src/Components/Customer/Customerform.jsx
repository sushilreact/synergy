import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormControl, InputGroup, Row, Table, Col, Tabs, Tab, Button, Form, Card } from 'react-bootstrap';
import Discountform from './Discountform'
import Selectbox from './Selectbox'
import CloseIcon from '@material-ui/icons/Close';
const Customerform = (props) => {
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
                                <Col md="2">
                                    <Discountform
                                        title="Amount"
                                        inputplaceholder="10"
                                        inputvalue=""
                                        customeclass="entryfeesinput newamount"
                                    />
                                </Col>
                                <Col md="3">
                                    <Selectbox
                                        title="Discount Type"
                                        inputplaceholder="10"
                                        bydefaultvalue="Currency"
                                        customeclass="mycle"

                                    />
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

                                <Col md="2" className="padding_LeftDate">
                                    <label className="lableD">Start Date</label>
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="datepicker" />
                                </Col>
                                <Col md="2" className="padding_LeftDate">
                                    <label className="lableD">End Date</label>
                                    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} className="datepicker" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default Customerform;