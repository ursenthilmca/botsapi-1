import { Row, Col, Card } from "antd";
import React, { Fragment } from "react";

let OthersRequestTab = () => {
    return (
        <Fragment>
            <div className="other-request-tabs page-scroll ">

                <Row className="mt-12">
                    <Col sm={24}>Auth Header</Col>
                    <Col sm={24}>
                        <Card style={{ background: "#EAECF0" }}></Card>
                    </Col>
                    <Col sm={24} className="mt-15">Class Map</Col>
                    <Col sm={24} className="mt-25">Run Before Execution</Col>
                    <Col sm={24}>
                        <Card style={{ background: "#EAECF0", height: "220px" }}></Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}
export default OthersRequestTab;