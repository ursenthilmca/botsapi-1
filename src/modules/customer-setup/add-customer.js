import { Drawer, Row, Col, Input ,Button} from 'antd'
import "./customer-setup.scss";
import "./add-customer.scss";
import {ReactComponent as RightArrowIcon } from "./../../assets/svg/right-arrow.svg";
import React, { useState } from "react";
import { Footer } from 'antd/es/layout/layout';


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
        <Drawer className='widths'
            title="Add Customer"
            placement={placement}
            closable={true}
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
                        <Input placeholder='Enter Customer Name' />

                    </Col>
                </Row>
                <Row className='mt-15'>
                    <Col sm={24}>
                        Creator Name
                    </Col>
                </Row>
                <Row className='mt-15'>
                    <Col sm={24}>
                        <Input placeholder='Enter Creator Name' />
                    </Col>
                </Row>
                <Row className='mt-15'>
                    <Col sm={24}>
                        PO No.
                    </Col>
                </Row>
                <Row className='mt-15'>
                    <Col sm={24}>
                        <Input placeholder='Enter PO No.' />
                    </Col>
                </Row>
                <Row className='mt-15'>
                    <Col sm={24}>
                        Pickup Zipcode
                    </Col>
                </Row>
                <Row className='mt-15 fw-7'>
                    <Col sm={24}>
                        <Input placeholder='Enter Pickup Zipcode' />
                    </Col>
                </Row>
                <Footer style={{ 
        borderTop: '1px solid #e8e8e8',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '500px',
        backgroundColor: 'white',
       }} ><Row>
       <Col sm={19}></Col>
                  <Col sm={5}> <Button  size={"large"} className="primary-btn " >
                         Add Customer&nbsp;<RightArrowIcon  width={12} height={12} />
                   </Button>
                   </Col> 
                   </Row></Footer>
            
            </div>
        </Drawer>
    )
}
export default AddCustomer;