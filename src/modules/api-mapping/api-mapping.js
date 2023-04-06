import { Button, Select, Card, Col, Divider, Input, Row, Tabs } from "antd";

import { PlusOutlined } from "@ant-design/icons";
import PrimaryLabel from "../../component/labels/primary-label";
import { ReactComponent as PaintIcon } from "./../../assets/svg/paint.svg";
import { ReactComponent as ArrowUpRightIcon } from "../../assets/svg/arrow-up-right.svg";
import { ReactComponent as CloudCheck } from "../../assets/svg/CloudCheck.svg";
import { ReactComponent as Cloud } from "../../assets/svg/cloud.svg";
import { ReactComponent as CheckCloud } from "../../assets/svg/checkCloud.svg";
import FiledCard from "../../component/close-icon/cards/fields-card";


import "./api-mapping.scss";


const list = [
    {
        key: 1,
        type: "Rate",
        btnCheck: true,
        check: true
    },
    {
        key: 2,
        type: "Tracking",
        btnCheck: false,
        check: true
    },
    {
        key: 3,
        type: "spot",
        btnCheck: false,
        check: true
    },
    {
        key: 4,
        type: "KevinCHeck",
        btnCheck: false,
        check: false
    },
    {
        key: 5,
        type: "KevinTest",
        btnCheck: false,
        check: false
    },
    {
        key: 6,
        type: "booking",
        btnCheck: false,
        check: false
    },
    {
        key: 7,
        type: "Small Package",
        btnCheck: false,
        check: false
    },
    {
        key: 8,
        type: "bookingcancel",
        btnCheck: false,
        check: false
    },
    {
        key: 9,
        type: "smallrate",
        btnCheck: false,
        check: false
    },
    {
        key: 10,
        type: "image",
        btnCheck: false,
        check: false
    },
    {
        key: 11,
        type: "BOL",
        btnCheck: false,
        check: false
    },
    {
        key: 12,
        type: "terminal",
        btnCheck: false,
        check: false
    },
    {
        key: 13,
        type: "transit",
        btnCheck: false,
        check: false
    },
    {
        key: 14,
        type: "smallship",
        btnCheck: false,
        check: false
    },
    {
        key: 15,
        type: "EDI",
        btnCheck: false,
        check: false
    },
]

let ApiMapping = () => {
    return (
        <div className="api-mapping w-100 pb-5">
            <Row gutter={12} className="align-items-center">
                <Col sm={12}>
                    <h6>Available Carrier</h6>
                </Col>
                <Col sm={12} className="text-right">
                    <Button icon={<PlusOutlined />} size={"large"} className="primary-btn">New API Carrier</Button>
                </Col>

            </Row>
            <Row gutter={12} >
                <Col sm={8}>
                    <Card
                        bordered={false}
                        style={{
                            width: "100%",
                        }}
                        className="p-0 cards-container"
                    >
                        <Row>
                            <Col sm={24} className="text-normal font-normal mb-4">
                                Available Carrier
                            </Col>
                            <Col sm={24}>
                                <Select
                                    defaultValue="A DYLE PYLE"
                                    style={{
                                        width: "100%"
                                    }}
                                    options={[]}
                                />

                            </Col>

                        </Row>
                        <Row className="mt-15 selected-card">
                            <Col sm={5}>
                                <PaintIcon />
                            </Col>
                            <Col sm={18}>
                                <h6 className="font-bold m-0 mb-5 ">A DYLE PYLE</h6>
                                <div className="d-flex align-content-center flex-gap-1 align-content-center mt-3">
                                    <span className="mt-5">

                                        <FiledCard title={"Code: PYLE"} className="text-large font-light " style={{ marginTop: "15px" }}></FiledCard>
                                    </span>

                                    <div className="d-flex align-content-center flex-gap-half align-content-center">
                                        <a href="#" className="text-underline">API Documents </a>
                                        <ArrowUpRightIcon />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-20">
                            <Col sm={24} >
                                <span className="text-normal font-light">
                                    Method Type
                                </span>
                            </Col>
                            <Row gutter={12} className="method-list ">
                                {list.map((item) => (
                                    <Col sm={12} className="mt-15" key={item.key}>
                                        <Card style={{ background: item.btnCheck ? "#05A787" : "#FFFFFF", color: item.btnCheck ? "#FFF" : "#05A787" }}>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span style={{ color: item.btnCheck ? "#fff" : "#101828", }} className="text-normal font-normal">
                                                    {item.type}
                                                </span>
                                                <span>

                                                    {item.btnCheck && item.check && <CloudCheck />}
                                                    {!item.btnCheck && !item.check && <Cloud />}
                                                    {!item.btnCheck && item.check && <CheckCloud />}
                                                </span>


                                            </div>
                                        </Card>

                                    </Col>
                                ))}

                            </Row>
                        </Row>
                    </Card>
                </Col>
                <Col sm={16}>
                    <Card
                        bordered={false}
                        style={{
                            width: "100%",
                        }}
                        className="p-0 cards-container"
                    >2</Card>

                </Col>

            </Row>
        </div >
    )
}

export default ApiMapping;