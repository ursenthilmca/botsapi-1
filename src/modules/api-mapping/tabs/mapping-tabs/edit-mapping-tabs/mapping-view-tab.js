import { Row, Col, Input, Button, } from "antd";
import React, { Fragment } from "react";
import PrimaryLabel from "../../../../../component/labels/primary-label";
import {
    SearchOutlined,
    PlusOutlined
} from "@ant-design/icons";
import MappingViewSourceMenu from "./mapping-view-source-menu";


let MappingViewTab = () => {
    return (
        <Fragment>
            <Row gutter={35} className=" flex-gap-1">
                <Col sm={9} className="b-1 p-15 ">
                    <Row >
                        <Col sm={24} >
                            <PrimaryLabel normal={true} className="text-20 font-normal">Source</PrimaryLabel>

                        </Col>
                        <Col sm={24}>
                            <div className="d-flex flex-gap-half  mt-10">

                                <Input placeholder="Search..." prefix={<SearchOutlined />} />
                                <Button className="primary-btn">Expand</Button>
                            </div>

                        </Col>
                        <Row className="mt-15">
                            <Col sm={24}>
                                <MappingViewSourceMenu />
                            </Col>

                        </Row>

                    </Row>
                </Col>
                <Col sm={14} className="b-1"></Col>
            </Row>

        </Fragment>
    )
}
export default MappingViewTab;