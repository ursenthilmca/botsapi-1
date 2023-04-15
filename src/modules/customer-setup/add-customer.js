import { Drawer, Row, Col, Input, Button } from 'antd'
import "./customer-setup.scss";
import "./add-customer.scss";
import React, { useState } from "react";
import { Footer } from 'antd/es/layout/layout';
import FormInput from "../../component/form-input/form-input";
import { ReactComponent as RightArrowIcon } from "./../../assets/svg/ArrowRight.svg";



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
            maskClosable={false}
            open={open}
            key={placement}
            footer={<Button icon={<RightArrowIcon />} size={"large"} className="m-5  primary-btn d-flex align-items-center flex-direction-row-reverse flex-gap-1 float-right" >
                Add Carrier
            </Button>}

        >
            <div className='customer' >

                <Row>

                    <Col sm={24} >
                        <FormInput
                            editMode={true}
                            label={"Customer Name"}
                            placeholder={"Enter Customer Name"}
                            name="customerName"
                        />
                    </Col>
                    <Col sm={24} >
                        <FormInput
                            editMode={true}
                            label={"Creator Name"}
                            placeholder={"Enter Creator Name"}
                            name="creatorName"
                        />
                    </Col>
                    <Col sm={24} >
                        <FormInput
                            editMode={true}
                            label={"PO No."}
                            placeholder={"Enter PO No."}
                            name="poNo"
                        />
                    </Col>
                    <Col sm={24} >
                        <FormInput
                            editMode={true}
                            label={"Pickup Zipcode"}
                            placeholder={"Enter Pickup Zipcode"}
                            name="zipcode"
                        />
                    </Col>
                </Row>
            </div>
        </Drawer>
    )
}
export default AddCustomer;