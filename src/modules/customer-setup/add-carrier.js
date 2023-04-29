import { Drawer, Row, Col, Input, Card, Grid, Divider, Button, Menu, Checkbox } from 'antd'
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

const carrierList = [
    { id: 1, name: 'Canon', productName: "SalesForce", imges: canon },
    { id: 2, name: 'Time', productName: "SalesForce", imges: timeicon },
    { id: 3, name: 'Mo', productName: "SalesForce", imges: moicon },
    { id: 4, name: 'Love clip', productName: "SalesForce", imges: loveclipicon },
    { id: 5, name: 'c2', productName: "SalesForce", imges: c2icon },
    { id: 6, name: 'Sales Force', productName: "SalesForce", imges: salesforceicon },
    { id: 7, name: 'Time', productName: "SalesForce", imges: timeicon },
    { id: 8, name: 'paint', productName: "SalesForce", imges: paint },
    { id: 9, name: 'Mo', productName: "SalesForce", imges: moicon },

]

let AddCarrier = (props) => {
    const [open, setOpen] = useState(props.drawerStatus);
    const [placement, setPlacement] = useState('left');
    const [filterData, setFilterData] = useState(carrierList);
    const [checked, setChecked] = useState(false);

    const [mode, setMode] = useState('inline');
    const [theme, setTheme] = useState('light');
    const changeMode = (value) => {
        setMode(value ? 'vertical' : 'inline');
    };
    const changeTheme = (value) => {
        setTheme(value ? 'dark' : 'light');
    };

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
        setChecked(true);
    };

    const onClose = () => {
        props.updateStatus(false);
        setOpen(false);
    };

    const filterHandler = (e) => {
        let value = e.target.value.toLowerCase();
        console.log(value);
        let result = [];

        result = carrierList.filter((data) => {
            return data.name.search(value) != -1;
        });

        setFilterData(result)

    }






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
                        < Row align={'middle'} style={{ overflowX: "hidden" }} className='pb-10'>
                            <Col sm={24} >
                                <Input placeholder='Search carrier ... ' type='text' onChange={filterHandler} />
                            </Col>
                        </Row>

                        <PerfectScrollbar style={{ maxHeight: '345px', overflowY: 'scroll !important', overflowX: 'hidden !important' }} className="px-15">
                            <Row className='mt-20 ' gutter={[15, 15]} >
                                {filterData.map((list) => (
                                    <Col lg={8} key={list.id} >
                                        <Card key={list.id} style={{ backgroundColor: checked ? "#E6F6F3" : '', borderColor: checked ? "#05987B" : '' }}>
                                            <Checkbox onChange={onChange}>
                                                <div className='mx-auto text-center'>
                                                    <img src={list.imges} alt={list.name} width={60} height={60} />
                                                    <span>{list.productName}</span>
                                                </div>
                                            </Checkbox>
                                        </Card>
                                    </Col>
                                ))}




                            </Row>
                        </PerfectScrollbar>

                    </Col>
                </Row>


            </div>
        </Drawer >
    )
}
export default AddCarrier;