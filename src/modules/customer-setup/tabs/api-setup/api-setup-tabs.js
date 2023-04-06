import { Card, Col, Row } from "antd";
import React, { Fragment } from "react";
import PrimaryLabel from "../../../../component/labels/primary-label";
import FormInput from "../../../../component/form-input/form-input";
import SwitchIcon from "../../../../component/switch/switch-icon";
import { ReactComponent as PathIcon } from "../../../../assets/svg/path.svg";
import { ReactComponent as ShieldIcon } from "../../../../assets/svg/shieldStar.svg";
import { ReactComponent as PackageIcon } from "../../../../assets/svg/package.svg";
import { ReactComponent as ImageIcon } from "../../../../assets/svg/image.svg";

function ApiSetupTabs() {
  return (
    <Fragment>
      <Row>
        <Col sm={24}>
          <PrimaryLabel>Account Information</PrimaryLabel>
        </Col>
      </Row>
      <Row className="mt-15" gutter={12}>
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
      <Row className="mt-15" gutter={12}>
        <Col sm={24}>
          <FormInput
            editMode={true}
            label={"Account Number"}
            placeholder={"Enter Account Number"}
            name="accountNumber"
          />
        </Col>

      </Row>
      <Row className="mt-15" gutter={12}>
        <Col sm={24}>
          <PrimaryLabel>What is the purpose of account?</PrimaryLabel>

        </Col>
      </Row>
      <Row className="mt-15 align-items-center " gutter={5}>
        <Col sm={2}>
          <PathIcon />
        </Col>
        <Col sm={20} className="normal-text">
          <PrimaryLabel normal={true}>Activate for Tracking</PrimaryLabel>
        </Col>
        <Col sm={2} className="text-right">
          <SwitchIcon checked={true} />
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
      <Row className="mt-15 align-items-center " gutter={5}>
        <Col sm={2}>
          <ShieldIcon />
        </Col>
        <Col sm={20} className="normal-text">
          <PrimaryLabel normal={true}>Activate for Rate</PrimaryLabel>
        </Col>
        <Col sm={2} className="text-right">
          <SwitchIcon checked={true} />
        </Col>
      </Row>
      <Row className="mt-15 align-items-center " gutter={5}>
        <Col sm={2}>
          <PackageIcon />
        </Col>
        <Col sm={20} className="normal-text">
          <PrimaryLabel normal={true}>Activate for Pickup Request</PrimaryLabel>
        </Col>
        <Col sm={2} className="text-right">
          <SwitchIcon checked={true} />
        </Col>
      </Row>
      <Row className="mt-15 align-items-center " gutter={5}>
        <Col sm={2}>
          <ImageIcon />
        </Col>
        <Col sm={20} className="normal-text">
          <PrimaryLabel normal={true}>Activate for Image</PrimaryLabel>
        </Col>
        <Col sm={2} className="text-right">
          <SwitchIcon checked={true} />
        </Col>
      </Row>
    </Fragment>
  );
}
export default ApiSetupTabs;
