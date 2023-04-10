import { Row, Col, Button } from "antd";
import React, { Fragment } from "react";
import FiledCard from "../../../component/close-icon/cards/fields-card";
import PrimaryLabel from "../../../component/labels/primary-label";
import { ReactComponent as EditIcon } from "../../../assets/svg/PencilSimpleLine-green.svg";


let GeneralInformation = () => {
    return (
        <Fragment>
            <div className="page-scroll">

                <Row gutter={12} className="mt-15">
                    <Col sm={8}>
                        <FiledCard title={"Username"} className="text-large font-normal">
                            <PrimaryLabel normal={true} className="text-20 font-normal">akjsnejv@lkmfkr.com</PrimaryLabel>
                        </FiledCard>
                    </Col>
                    <Col sm={8}>
                        <FiledCard title={"Password"} className="text-large font-normal">
                            <PrimaryLabel normal={true} className="text-20 font-normal">•••••••••••••••••••••</PrimaryLabel>
                        </FiledCard>
                    </Col>
                    <Col sm={8}>
                        <FiledCard title={"Account Number"} className="text-large font-normal">
                            <PrimaryLabel normal={true} className="text-20 font-normal">9000HlA949</PrimaryLabel>
                        </FiledCard>
                    </Col>



                </Row>
                <Row className="mt-15 float-right">
                    <Col sm={24} className="">

                        <Button icon={<EditIcon />} size={"large"} className="secondary-btn d-flex flex-gap-half align-items-center justifiy-content-center">Edit</Button>
                    </Col>

                </Row>
            </div>
        </Fragment>
    )

}

export default GeneralInformation;