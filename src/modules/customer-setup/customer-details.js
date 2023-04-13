import { Row, Col, Divider, Tabs } from "antd";
import React, { Fragment } from 'react';


import FiledCard from "../../component/close-icon/cards/fields-card";
import PrimaryLabel from "../../component/labels/primary-label";
import CarriersTab from "./customer-details-tab/carriers-tab";
import ActivityTab from "./customer-details-tab/activity-tab";


let CustomerDetails = () => {

    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: `Carriers`,
            children: <CarriersTab />,
        },
        {
            key: '2',
            label: `Activity`,
            children: <ActivityTab />,
        }
    ];
    return (
        <Fragment >
            <Row gutter={12}>
                <Col sm={24} >
                    <span className="text-24 font-bold">
                        3M Company
                    </span>
                </Col>
                <Col sm={24}>Code: 1102</Col>
            </Row>
            <Row gutter={12} className="mt-15 mx-auto bg-light p-10 justify-content-between" style={{ background: "#F2F4F7", borderRadius: "8px" }}>
                <Col sm={5} >
                    <FiledCard title={"Created Date"}>
                        <PrimaryLabel normal={true} className="text-normal font-normal">01/01/2023</PrimaryLabel>
                    </FiledCard>
                </Col>
                <Col sm={1}>
                    <Divider type="vertical" style={{ height: "40px" }} />
                </Col>

                <Col sm={5}>
                    <FiledCard title={"Created By"}>
                        <PrimaryLabel normal={true} className="text-normal font-normal">Ilango
                        </PrimaryLabel>
                    </FiledCard>
                </Col>
                <Col sm={1}>
                    <Divider type="vertical" style={{ height: "40px" }} />
                </Col>
                <Col sm={6}>
                    <FiledCard title={"Total Transation"}>
                        <PrimaryLabel normal={true} className="text-normal font-normal">23,082</PrimaryLabel>
                    </FiledCard>
                </Col>
                <Col sm={1}>
                    <Divider type="vertical" style={{ height: "40px" }} />
                </Col>
                <Col sm={5}>
                    <FiledCard title={"Total Connection"}>
                        <PrimaryLabel normal={true} className="text-normal font-normal">30</PrimaryLabel>
                    </FiledCard>
                </Col>

            </Row>
            <Fragment >
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} className="mt-5 tabs-info" />

            </Fragment>
        </Fragment >

    )
}
export default CustomerDetails