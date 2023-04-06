import { Drawer , Row,Col, Input } from 'antd'
import "./customer-setup.scss";
import "./add-customer.scss";

import React, { useState } from "react";

let AddCustomer = (props) => {
    const [open, setOpen] = useState(props.drawerStatus);
    const [placement, setPlacement] = useState('left');
    console.log("open", open);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        props.updateStatus(false);
        setOpen(false);
    };
    const onChange = (e) => {
        setPlacement(e.target.value);
    };

    return (
        <Drawer 
            title="Add Customer"
            placement={placement}
            closable={false}
            onClose={onClose}
            open={open}
            key={placement}
            
        >
            <div className='customer' >
                
            <Row>

             <Col sm={24} >
             Customer Name
             </Col>
            </Row>
            <Row className='mt-15'>
            <Col sm={24}>
            <Input placeholder='Enter Customer Name'/> 

            </Col>
            </Row>
            <Row className='mt-15'>
                <Col sm={24}>
                Creator Name
                </Col>
            </Row>    
            <Row className='mt-15'>
                <Col sm={24}>
                <Input placeholder='Enter Creator Name'/> 
                </Col>
            </Row>
            <Row className='mt-15'>
                <Col sm={24}>
                PO No.
                </Col>
            </Row>
            <Row className='mt-15'>
                <Col sm={24}>
                <Input placeholder='Enter PO No.'/> 
                </Col>
            </Row>
            <Row className='mt-15'>
                <Col sm={24}>
                Pickup Zipcode
                </Col>
            </Row>
            <Row className='mt-15 fw-7'>
                <Col sm={24}>
                <Input placeholder='Enter Pickup Zipcode'/> 
                </Col>
            </Row>
            </div>
      </Drawer>
    )
}
export default AddCustomer;
