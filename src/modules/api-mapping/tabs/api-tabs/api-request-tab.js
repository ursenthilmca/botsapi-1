import { Row, Col, Card, Button } from "antd";
import React, { Fragment } from "react";
import FiledCard from "../../../../component/close-icon/cards/fields-card";
import PrimaryLabel from "../../../../component/labels/primary-label";
import { ReactComponent as EditIcon } from "../../../../assets/svg/PencilSimpleLine-green.svg"
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
let ApiRequestTab = () => {
    return (
        <Fragment>
            <PerfectScrollbar style={{ maxHeight: '190px', overflowY: 'scroll !important', overflowX: 'hidden !important' }} className="px-15">

                <div className="api-request-tab h-100 page-scroll px-10">

                    <Row gutter={12} className="mt-15">
                        <Col sm={8}>
                            <FiledCard title={"API Name"} >
                                <PrimaryLabel normal={true} className="text-20 font-normal">API Name</PrimaryLabel>
                            </FiledCard>
                        </Col>
                        <Col sm={8}>
                            <FiledCard title={"API Key"} >
                                <PrimaryLabel normal={true} className="text-20 font-normal">nasjj93bf39nv</PrimaryLabel>
                            </FiledCard>
                        </Col>
                        <Col sm={8}>
                            <FiledCard title={"Context Negotiator"} >
                                <PrimaryLabel normal={true} className="text-20 font-normal">XML</PrimaryLabel>
                            </FiledCard>
                        </Col>
                    </Row>
                    <Row gutter={12} className="mt-20">
                        <Col sm={12}>
                            <FiledCard title={"API Test URL"} >
                                <PrimaryLabel normal={true} className="text-20 font-normal text-info">apitesturlapitesturlapitesturlapitesturl</PrimaryLabel>
                            </FiledCard>
                        </Col>
                        <Col sm={12}>
                            <FiledCard title={"API URL"} >
                                <PrimaryLabel normal={true} className="text-20 font-normal text-info">apitesturlapitesturlapitesturlapitesturl</PrimaryLabel>
                            </FiledCard>
                        </Col>
                    </Row>
                    <Row className="mt-15">
                        <Col sm={24}>

                            <PrimaryLabel normal={true} className="text-normal font-normal ">Format</PrimaryLabel>
                        </Col>
                        <Col sm={24}>

                            <Card style={{ background: "#EAECF0", borderRadius: "5px", height: "150px" }}></Card>
                        </Col>


                    </Row>
                    <Row className="mt-15 ">
                        <Col sm={24} className="">

                            <Button icon={<EditIcon />} size={"large"} className="secondary-btn d-flex flex-gap-half align-items-center justifiy-content-center">Edit</Button>
                        </Col>

                    </Row>
                </div>
            </PerfectScrollbar>
        </Fragment>
    )
}
export default ApiRequestTab;