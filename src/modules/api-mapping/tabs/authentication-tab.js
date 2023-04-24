import { Row, Select, Col, Radio, Switch } from "antd";
import FiledCard from "../../../component/close-icon/cards/fields-card";
import PrimaryLabel from "../../../component/labels/primary-label";

import React, { Fragment, useState } from "react";

let Authentication = () => {
    const [value, setValue] = useState('http');
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const onChangeChecked = (checked) => {
        console.log(`switch to ${checked}`);
    };

    return (
        <Fragment>
            <Row gutter={25} className="page-scroll px-10">
                <Col sm={12}>
                    <Row>
                        <Col sm={24}>
                            <FiledCard title={"Allowed Methods"} className="text-large font-normal">

                                <Select
                                    className="mt-5"
                                    defaultValue="GET"
                                    style={{
                                        width: "100%",
                                    }}

                                />
                            </FiledCard>
                        </Col>
                        <Col sm={24} className="mt-24">
                            <FiledCard title={"Allowed Methods"} className="text-large font-normal">

                                <Radio.Group onChange={onChange} value={value} className="mt-5">
                                    <Radio value='http'>HTTP</Radio>
                                    <Radio value='https'>HTTPS</Radio>

                                </Radio.Group>
                            </FiledCard>
                        </Col>

                    </Row>

                </Col>
                <Col sm={12}>
                    <Row gutter={12}>
                        <Col sm={16}>
                            Required Authorization in Header
                        </Col>
                        <Col sm={8} className="text-right">
                            <Switch defaultChecked onChange={onChangeChecked} />

                        </Col>
                    </Row>
                    <Row gutter={12} className="mt-20">
                        <Col sm={16}>
                            Required Token in Header                        </Col>
                        <Col sm={8} className="text-right">
                            <Switch onChange={onChangeChecked} unCheckedChildren="0" />

                        </Col>
                    </Row>
                    <Row gutter={12} className="mt-20">
                        <Col sm={16}>
                            Required Two Step in Header                        </Col>
                        <Col sm={8} className="text-right">
                            <Switch defaultChecked onChange={onChangeChecked} />

                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )

}
export default Authentication;