import { Drawer, Row, Col, Input, Card, Grid, Divider, Button, Menu } from 'antd'
import "./customer-setup.scss";
import "./add-carrier.scss";
import { PlusOutlined } from "@ant-design/icons";
import PrimaryLabel from "../../component/labels/primary-label";

import canon from "./../../assets/png/canon.png";
import paint from "../../assets/png/paint.png"
import c2icon from "./../../assets/png/c2.png";
import { ReactComponent as PaintIcon } from "./../../assets/svg/paint.svg";
import loveclipicon from "./../../assets/png/loveclip.png";
import moicon from "./../../assets/png/mo.png";
import salesforceicon from "./../../assets/png/salesforce.png";
import susiicon from "./../../assets/png/susi.png";
import timeicon from "./../../assets/png/time.png";
import boicon from "./../../assets/png/bo.png";
import { ReactComponent as RightArrowIcon } from "../../assets/svg/ArrowRight.svg";
import React, { useState } from "react";
import { Footer } from 'antd/es/layout/layout';
import { ReactComponent as Minusicon } from '../../assets/svg/minus.svg';
import { ReactComponent as SixDotIcon } from '../../assets/svg/DotsSixVertical.svg';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';


function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    // getItem('Navigation One', '1', '<MailOutlined />'),
    // getItem('Navigation Two', '2', '<CalendarOutlined />'),
    getItem('All (50)', 'all', ''),
    getItem('TMS (10)', 'tms', ''),
    getItem('Carrier (8)', 'carrier', ''),
    getItem('ERP (12)', 'erp', ''),
    getItem('Shipper (20)', 'sHipper', ''),



];

let AddCarrier = (props) => {
    const [open, setOpen] = useState(props.drawerStatus);
    const [placement, setPlacement] = useState('left');

    const [mode, setMode] = useState('inline');
    const [theme, setTheme] = useState('light');
    const changeMode = (value) => {
        setMode(value ? 'vertical' : 'inline');
    };
    const changeTheme = (value) => {
        setTheme(value ? 'dark' : 'light');
    };



    const onClose = () => {
        props.updateStatus(false);
        setOpen(false);
    };


    return (
        <Drawer className='addcarrier_block p-0 carrier'
            title="Add Carrier "
            placement={placement}
            closable={true}
            maskClosable={false}
            onClose={onClose}
            open={open}
            key={placement}
            footer={<Button icon={<RightArrowIcon />} size={"large"} className="m-5  primary-btn d-flex align-items-center flex-direction-row-reverse flex-gap-1 float-right" >
                Add Carrier
            </Button>}
        >

            <div className=''>
                <Row >
                    <Col lg={8} className='carrier-menubar p-20' style={{ overflowX: "hidden" }}>
                        <Row>
                            <Col lg={24}>
                                <div className=' minismall'>
                                    AVAILABLE CARRIER
                                </div>
                            </Col>
                            <Col lg={24} className='mt-10'>
                                <Menu
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['soap-envelope', 'soap-body', 'ns1RateEstimateResponseVO']}
                                    mode='inline'
                                    theme={theme}
                                    items={items}
                                    style={{ width: "100%", border: "none" }}
                                    className="b-0"
                                    expandIcon={({ isActive }) => !isActive ? <Minusicon /> : <PlusOutlined fill='#05987B' />}
                                />
                            </Col>
                        </Row>


                    </Col>

                    <Col lg={16} className='p-20'>
                        < Row align={'middle'} style={{ overflowX: "hidden" }}>
                            <Col sm={24} >
                                <Input placeholder='Search carrier ... ' />
                            </Col>
                        </Row>

                        <PerfectScrollbar style={{ maxHeight: '395px', overflowY: 'scroll !important', overflowX: 'hidden !important' }} className="px-15">
                            <Row className='mt-20 ' gutter={[15, 15]} >

                                <Col lg={8}>
                                    <Card>
                                        <div className='mx-auto text-center'>
                                            <img src={canon} alt="canon " width={60} height={60} />
                                            <span>SalesForce</span>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={8}>
                                    <Card>
                                        <div className='mx-auto text-center'>
                                            <img src={timeicon} alt="time " width={60} height={60} />
                                            <span>SalesForce</span>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={8}>
                                    <Card>
                                        <div className='mx-auto text-center'>
                                            <img src={paint} alt="Paint " width={60} height={60} />
                                            <span>SalesForce</span>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={8}>
                                    <Card>
                                        <div className='mx-auto text-center'>
                                            <img src={moicon} alt="M" width={60} height={60} />
                                            <span>SalesForce</span>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={8}>
                                    <Card>
                                        <div className='mx-auto text-center'>
                                            <img src={loveclipicon} alt="Love Clip" width={60} height={60} />
                                            <span>SalesForce</span>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={8}>
                                    <Card>
                                        <div className='mx-auto text-center'>
                                            <img src={susiicon} alt="Susi" width={60} height={60} />
                                            <span>SalesForce</span>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={8}>
                                    <Card>
                                        <div className='mx-auto text-center'>
                                            <img src={c2icon} alt="c2" width={60} height={60} />
                                            <span>SalesForce</span>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={8}>
                                    <Card>
                                        <div className='mx-auto text-center'>
                                            <img src={boicon} alt="bo" width={60} height={60} />
                                            <span>SalesForce</span>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={8}>
                                    <Card>
                                        <div className='mx-auto text-center'>
                                            <img src={salesforceicon} alt="sales force" width={60} height={60} />
                                            <span>SalesForce</span>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={8}>
                                    <Card>
                                        <div className='mx-auto text-center'>
                                            <img src={timeicon} alt="time" width={60} height={60} />
                                            <span>SalesForce</span>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={8}>
                                    <Card>
                                        <div className='mx-auto text-center'>
                                            <img src={paint} alt="pain" width={60} height={60} />
                                            <span>SalesForce</span>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={8}>
                                    <Card>
                                        <div className='mx-auto text-center'>
                                            <img src={moicon} alt="mo" width={60} height={60} />
                                            <span>SalesForce</span>
                                        </div>
                                    </Card>
                                </Col>

                            </Row>
                        </PerfectScrollbar>

                    </Col>
                </Row>


            </div>
        </Drawer>
    )
}
export default AddCarrier;