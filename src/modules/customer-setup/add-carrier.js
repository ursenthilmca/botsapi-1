import { Drawer, Row, Col, Input, Card ,Grid,Divider } from 'antd'
import "./customer-setup.scss";
import "./add-carrier.scss";
import "./add-customer.scss";

import React, { useState } from "react";

let AddCarrier = (props) => {
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
            title="Add Carrier"

            placement={placement}
            closable={false}
            onClose={onClose}
            open={open}
            key={placement}>        
             <div className='customer'>
             <Row className='mt-15'>
                <Col md={6}>
                    AVAILABLE CARRIER
                    <Row>
                       <Col className='mt-15'>TMS  (10)
                       </Col>
                    </Row>
                     <Row>
                         <Col className='mt-15'>Carrier (8)
                         </Col>
                     </Row>
                
                     <Row>
                         <Col className='mt-15'> ERP (12)
                         </Col>
                    </Row>
                
                     <Row>
                         <Col className='mt-15'>Shipper (20)
                        </Col>
                     </Row>
                
                </Col>
                <Col md={18}>
                    < Row>
                        <Col md={24}>
                        <Input   placeholder='Search carrier ... '  />
                       </Col>
                    </Row>
                       <Divider orientation="left">sub-element monospaced arrangement</Divider>
                         <Row justify="space-between" className='mt-15'>
                           <Col span={4}>1</Col>
                           <Col span={4}>2</Col>
                           <Col span={4}>3</Col>
                         </Row>
                         <Row justify="space-between" className='mt-15'>
                           <Col span={4}>1</Col>
                           <Col span={4}>2</Col>
                           <Col span={4}>3</Col>
                         </Row>
                         <Row justify="space-between" >
                           <Col span={4}>1</Col>
                           <Col span={4}>2</Col>
                           <Col span={4}>3</Col>
                         </Row>

                         </Col>
                    </Row>    
                    
            </div>
            </Drawer>
            )
        }
        export default AddCarrier;