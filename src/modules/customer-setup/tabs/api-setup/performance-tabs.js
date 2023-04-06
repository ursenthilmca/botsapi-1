import React, { Fragment, Component } from "react";
import { Row, Col, Progress } from 'antd';
// import SemiCircleProgressBar from "react-progressbar-semicircle";

import PrimaryLabel from "../../../../component/labels/primary-label";

import ProgressBar from '../../../../component/progress/progress-bar';
let PerformanceTabs = () => {
    return (
        <Fragment>

            <Row gutter={12}>
                <Col sm={12}>
                    <Row>
                        <Col sm={24}>
                            <PrimaryLabel>Global Performance (8)</PrimaryLabel>


                        </Col>
                        <Col sm={24}>
                            {/* <SemiCircleProgressBar percentage={33} showPercentValue /> */}

                            {/* <Progress type="dashboard" percent={50} /> */}
                            {/* <Progress percent={40} status="active" showInfo={true} /> */}

                        </Col>
                    </Row>

                </Col>
                <Col sm={12}>
                    <Row>
                        <Col sm={24}>
                            <PrimaryLabel>Carrier Performance by Customer (12)</PrimaryLabel>

                        </Col>
                        <Col sm={24}>
                            <Progress percent={20} status="active" showInfo={true} />

                        </Col>
                    </Row>

                </Col>


            </Row>
        </Fragment>
    )

}
export default PerformanceTabs