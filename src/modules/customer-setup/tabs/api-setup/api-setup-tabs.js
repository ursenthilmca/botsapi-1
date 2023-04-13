import { Card, Col, Row, Switch } from "antd";
import React, { Fragment } from "react";
import PrimaryLabel from "../../../../component/labels/primary-label";
import FormInput from "../../../../component/form-input/form-input";
// import SwitchIcon from "../../../../component/switch/switch-icon";
import { ReactComponent as PathIcon } from "../../../../assets/svg/path.svg";
import { ReactComponent as ShieldIcon } from "../../../../assets/svg/shieldStar.svg";
import { ReactComponent as PackageIcon } from "../../../../assets/svg/package.svg";
import { ReactComponent as ImageIcon } from "../../../../assets/svg/image.svg";
import { useSelector } from "react-redux";


function ApiSetupTabs() {
  const show = useSelector(state => state.menubar.menuVisible);
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);

  }

  return (
    <Fragment>
      <div className="page-scroll api-set-tab" style={{ overflowX: "hidden" }}>
        <Row>
          <Col sm={24}>
            <PrimaryLabel>Account Information</PrimaryLabel>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col sm={12}>
            <FormInput
              editMode={true}
              label={"Username"}
              placeholder={"Enter User Name"}
              name="username"
            />
          </Col>
          <Col sm={12}>
            <FormInput
              inputType="password"
              editMode={true}
              label={"Password"}
              placeholder={"Enter Password"}
              name="username"
            />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col sm={24}>
            <FormInput
              editMode={true}
              label={"Account Number"}
              placeholder={"Enter Account Number"}
              name="accountNumber"
            />
          </Col>

        </Row>
        <Row gutter={12}>
          <Col sm={24}>
            <PrimaryLabel>What is the purpose of account?</PrimaryLabel>

          </Col>
        </Row>
        <Row className="mt-5 align-items-center " gutter={5}>
          <Col lg={show ? 3 : 2}>
            <PathIcon />
          </Col>
          <Col lg={show ? 16 : 19} className="normal-text">
            <PrimaryLabel >Activate for Tracking</PrimaryLabel>
          </Col>
          <Col lg={show ? 4 : 3} className="text-right">
            <Switch defaultChecked onChange={onChange} />
          </Col>
        </Row>
        <Row className="mt-15" gutter={12}>
          <Col sm={24}>
            <FormInput
              editMode={true}
              placeholder={"Tracking or Pro Number"}
              name="trackingNumber"
            />
          </Col>

        </Row>
        <Row className="mt-5 align-items-center " gutter={5}>
          <Col lg={show ? 3 : 2}>
            <ShieldIcon />
          </Col>
          <Col lg={show ? 16 : 19} className="normal-text">
            <PrimaryLabel >Activate for Rate</PrimaryLabel>
          </Col>
          <Col lg={show ? 4 : 3} className="text-right">
            <Switch defaultChecked onChange={onChange} />
          </Col>
        </Row>
        <Row className="mt-5 align-items-center " gutter={5}>
          <Col lg={show ? 3 : 2}>
            <PackageIcon />
          </Col>
          <Col lg={show ? 16 : 19} className="normal-text">
            <PrimaryLabel >Activate for Pickup Request</PrimaryLabel>
          </Col>
          <Col lg={show ? 4 : 3} className="text-right">
            <Switch defaultChecked onChange={onChange} />
          </Col>
        </Row>
        <Row className="mt-15 align-items-center " gutter={5}>
          <Col lg={show ? 3 : 2}>
            <ImageIcon />
          </Col>
          <Col lg={show ? 16 : 19} className="normal-text">
            <PrimaryLabel >Activate for Image</PrimaryLabel>
          </Col>
          <Col lg={show ? 4 : 3} className="text-right">
            <Switch defaultChecked onChange={onChange} />
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}
export default ApiSetupTabs;
