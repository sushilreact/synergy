import React from 'react'
import { Form } from 'react-bootstrap';
const Updatesmall = (props) => {
    return (
        <>
            <span className="lableF">{props.title}</span>
            <div className="disrow"><Form.Control size="sm" type="text" placeholder={props.inputplaceholder} defaultValue={props.inputvalue} className={props.customeclass} /></div>
        </>
    )
}
export default Updatesmall;