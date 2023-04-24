import { Row, Col, Card, Button, Select } from "antd";
import React, { Fragment, useState } from "react";
import FiledCard from "../../../../component/close-icon/cards/fields-card";
import PrimaryLabel from "../../../../component/labels/primary-label";
import { ReactComponent as EditIcon } from "../../../../assets/svg/PencilSimpleLine-green.svg";
import FormInput from "../../../../component/form-input/form-input";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';


let ApiResponseTab = () => {
    const [edit, setEdit] = useState(false);
    const editHandler = () => setEdit(true);

    return (
        <Fragment>
            <PerfectScrollbar style={{ maxHeight: '190px', overflowY: 'scroll !important', overflowX: 'hidden !important' }} className="px-15">

                {!edit &&
                    <Fragment>

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

                                <Button icon={<EditIcon />} size={"large"} className="secondary-btn d-flex flex-gap-half align-items-center justifiy-content-center" onClick={editHandler}>Edit</Button>
                            </Col>

                        </Row>
                    </Fragment>
                }

                {edit &&
                    <Fragment>

                        <Row gutter={16} className="mt-15">
                            <Col sm={8}>
                                <FormInput
                                    editMode={true}
                                    label={"API Name"}
                                    placeholder={"Enter API Name"}
                                    name="apiName"
                                />
                            </Col>
                            <Col sm={8}>
                                <FormInput
                                    editMode={true}
                                    label={"API Name"}
                                    placeholder={"Enter API Name"}
                                    name="apiName"
                                />
                            </Col>

                            <Col sm={8}>
                                <FiledCard title={"API Key"} >
                                    <Select
                                        defaultValue="XML"
                                        style={{
                                            width: "100%",
                                        }}
                                        onChange={{}}
                                        options={[

                                        ]}
                                    />
                                </FiledCard>
                            </Col>
                        </Row>
                        <Row gutter={12} className="mt-20">
                            <Col sm={12}>
                                <FormInput
                                    editMode={true}
                                    label={"API Test URL"}
                                    placeholder={"Enter API Test URL"}
                                    name="apiTestUrl"
                                />
                            </Col>
                            <Col sm={12}>
                                <FormInput
                                    editMode={true}
                                    label={"API URL"}
                                    placeholder={"Enter API URL"}
                                    name="apiUrl"
                                />
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
                            <Col sm={24} className="d-flex flex-gap-1 justify-content-end">

                                <Button size={"large"} className="secondary-btn d-flex flex-gap-half align-items-center justifiy-content-center" onClick={() => { setEdit(false) }} >Cancel</Button>
                                <Button size={"large"} className="primary-btn d-flex flex-gap-half align-items-center justifiy-content-center" onClick={[]}>Save</Button>
                            </Col>

                        </Row>

                    </Fragment>
                }
            </PerfectScrollbar>

        </Fragment >

    )
}
export default ApiResponseTab