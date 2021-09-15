import React from 'react'
import { Form } from 'react-bootstrap';
const Selectbox = (props) => {
    return (
        <>
            <span className="lableF">{props.title}</span>
            <div className="disrow">
                <b class="doller">$</b>&nbsp;&nbsp;
                <Form.Select size="sm" className={props.customeclass}>
                    <option> {props.bydefaultvalue}</option>
                </Form.Select></div>
        </>
    )
}
export default Selectbox;