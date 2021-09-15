import React from 'react'
import { Form } from 'react-bootstrap';
const Discountform = (props) => {
    return (
        <>
            <span className="lableF">{props.title}</span>
            <div className="disrow"><b class="doller">$</b>&nbsp;<Form.Control size="sm" type="text" placeholder={props.inputplaceholder} defaultValue={props.inputvalue} className={props.customeclass} /></div>
        </>
    )
}
export default Discountform;