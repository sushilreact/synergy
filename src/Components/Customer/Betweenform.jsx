import React from 'react'
import { Form } from 'react-bootstrap';
const Betweenform = (props) => {
    return (
        <>
            <span className="lableF">{props.title}</span>
            <div className="disrow settobetween"><Form.Control size="sm" type="text" placeholder={props.inputplaceholderto} defaultValue={props.inputvalue} className={props.customeclass} /> to <Form.Control size="sm" type="text" placeholder={props.inputplaceholderbetween} defaultValue={props.inputvalue} className={props.customeclass} /> shipment</div>
        </>
    )
}
export default Betweenform;