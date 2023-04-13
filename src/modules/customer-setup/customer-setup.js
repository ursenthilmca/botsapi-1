import { Button, Card, Col, Divider, Input, Row, Tabs, Popover } from "antd";
import React, { useState } from "react";
import {
  PlusOutlined,
  SearchOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  UserOutlined,
  CloseOutlined
} from "@ant-design/icons";
import "./customer-setup.scss";
import FiledCard from "../../component/close-icon/cards/fields-card";
import PrimaryLabel from "../../component/labels/primary-label";
import VerticalLine from "../../component/vertical-line/vertical-line";
import { ReactComponent as RightArrowIcon } from "./../../assets/svg/right-arrow.svg";
import { ReactComponent as PaintIcon } from "./../../assets/svg/paint.svg";
import { ReactComponent as NoSignalIcon } from "./../../assets/svg/no-signal.svg";
import { ReactComponent as FullSignalIcon } from "./../../assets/svg/full-signal.svg";
import { ReactComponent as DotIcon } from "./../../assets/svg/dot.svg";
import { ReactComponent as DotSuccessIcon } from "./../../assets/svg/dot-green.svg";
import { ReactComponent as QuestionIcon } from "./../../assets/svg/question.svg";

import ApiSetupTabs from "./tabs/api-setup/api-setup-tabs";
import ApiTestTabs from "./tabs/api-setup/api-test-tabs";
import PerformanceTabs from "./tabs/api-setup/performance-tabs";
import StatusCodeTabs from "./tabs/api-setup/status-code-tabs";
import AddCustomer from "./add-customer";
import CustomerDetails from "./customer-details";
import { useSelector } from "react-redux";
import AddCarrier from "./add-carrier";



function CustomerSetup(props) {
  const show = useSelector(state => state.menubar.menuVisible);

  const [connect, setConnect] = useState(false);
  const [addCustomer, setAddCustomer] = useState(false);
  const [addcarrier, setAddCarrier] = useState(false);
  const [open, setOpen] = useState(false)
  let addCustomerHandler = () => {
    setAddCustomer(!addCustomer)
  }
  let addCarrierHandler = () => {
    setAddCarrier(!addcarrier)
  }
  const connectHandler = () => {
    setConnect(true);
  }
  const handleOpenChange = () => {
    setOpen(true);
  }

  const disoCnnectHandler = () => {
    setConnect(false);

  }

  const tabsItem = [
    {
      key: '1',
      label: `API Setup`,
      children: <ApiSetupTabs />,
    },
    {
      key: '2',
      label: `API Test`,
      children: <ApiTestTabs />,
    },
    {
      key: '3',
      label: `Status Code Mapping`,
      children: <StatusCodeTabs />,
    },
    {
      key: '4',
      label: `Performance`,
      children: <PerformanceTabs />,
    },
  ]


  return (
    <div className="add-customer">

      {addCustomer && <AddCustomer drawerStatus={addCustomer} updateStatus={addCustomerHandler} />}
      {addcarrier && <AddCarrier drawerStatus={addcarrier} updateStatus={addCarrierHandler} />}


      <Row gutter={{ lg: 12, xs: 4 }} className="customer-setup justify-content-center

">
        <Col sm={24} lg={show === true ? 7 : 6} className="custmer-card ">
          <Card
            bordered={false}
            style={{
              width: "100%",
            }}
            className="p-0 cards-container"
          >
            <Row gutter={{ xl: 12, lg: 5 }} align={"middle"} className="justify-content-between">
              <Col xl={10} >
                <span className="title">
                  Customers
                </span>
              </Col>
              <Col xl={14} className="text-right">
                <Button icon={<PlusOutlined />} size={"large"} className="primary-btn" onClick={() => setAddCustomer(true)}>
                  Add Customer
                </Button>
              </Col>
            </Row>
            <Row className="mt-15 ">
              <Col sm={24}>
                <Input placeholder="Search Profile" prefix={<SearchOutlined />} />
              </Col>
            </Row>
            <div className="page-scroll mt-15 ">
<<<<<<< HEAD
             
=======
>>>>>>> e63602a216da12a712559aa20dbb593466e29333


              <Row className={open ? "mt-10 un-selected-card selected-card" : "mt-10 un-selected-card "}>
                <Col sm={24}>
                  <Row>
                    <Col sm={12} className="text-normal font-normal">
                      3M Company
                    </Col>
                    <Col sm={12} className="d-flex justify-content-end">
                      <FiledCard title={"Code:1102"} className="text-normal font-light"></FiledCard>
                    </Col>
                  </Row>

                  <Row className=" inside-wrapper mt-5" gutter={12}>
                    <Col lg={12} >
                      <div>
                        <FiledCard title={"Created Date"}>
                          <PrimaryLabel normal={true} className="text-normal font-normal">01/01/2023</PrimaryLabel>
                        </FiledCard>
                      </div>
                      <div className="mt-15">
                        <FiledCard title={"Total Transation"} >
                          <PrimaryLabel normal={true} className="text-normal font-normal">23,082</PrimaryLabel>
                        </FiledCard>
                      </div>

                    </Col>

                    <Col lg={12}>
                      <div >
                        <FiledCard title={"Created By "}>
                          <PrimaryLabel normal={true} className="text-normal font-normal">Ilango</PrimaryLabel>
                        </FiledCard>
                      </div>
                      <div className="mt-15">
                        <FiledCard title={"Total Connection "}>
                          <PrimaryLabel normal={true} className="text-normal font-normal">30</PrimaryLabel>
                        </FiledCard>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-15">
                    <Col
                      sm={24}
                      className="d-flex justify-content-center pr-15 align-items-center"
                    >
                      <Popover closable={true}
                        content={CustomerDetails} placement="right"
                        trigger="click"
                        title={<div className="d-flex justify-content-between">
                          Customer Detail < CloseOutlined style={{ cursor: "pointer" }} onClick={() => setOpen(false)} /></div>}
                        style={{ width: "580px !important" }}
                        open={open}
                        className="popovers"
                        onOpenChange={handleOpenChange}
                      >
<<<<<<< HEAD
                        
  
                        <Popover closable={true} placement="right" title={<div className="d-flex justify-content-between headers  ">
                  Customer Detail </div> }  content={CustomerDetails} trigger="click" style={{ width: "800px" }}>
                        <Button>
                        <RightArrowIcon />
                        </Button>
                        </Popover>
                      </Col>
                    </Row>
                  </Col>
                </Row>
            


              <Row className="mt-15 un-selected-card">
                <Col sm={24}>
                  <Row>
                    <Col sm={12} className="text-normal font-normal">3M Company</Col>
                    <Col sm={12} className="d-flex justify-content-end">
                      <FiledCard title={"Code:1102"}></FiledCard>
=======
                        <RightArrowIcon style={{ cursor: "pointer" }} />
                      </Popover>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className={open ? "mt-15 un-selected-card selected-card" : "mt-15 un-selected-card "}>
                <Col sm={24}>
                  <Row>
                    <Col sm={12} className="text-normal font-normal">
                      3M Company
                    </Col>
                    <Col sm={12} className="d-flex justify-content-end">
                      <FiledCard title={"Code:1102"} className="text-normal font-light"></FiledCard>
>>>>>>> e63602a216da12a712559aa20dbb593466e29333
                    </Col>
                  </Row>

                  <Row className=" inside-wrapper mt-5">
                    <Col sm={12} >
                      <div>
                        <FiledCard title={"Created Date"}>
                          <PrimaryLabel normal={true} className="text-normal font-normal">01/01/2023</PrimaryLabel>
                        </FiledCard>
                      </div>
                      <div className="mt-15">
                        <FiledCard title={"Total Transation"} >
                          <PrimaryLabel normal={true} className="text-normal font-normal">23,082</PrimaryLabel>
                        </FiledCard>
                      </div>

                    </Col>

                    <Col sm={12}>
                      <div >
                        <FiledCard title={"Created By "}>
                          <PrimaryLabel normal={true} className="text-normal font-normal">Ilango</PrimaryLabel>
                        </FiledCard>
                      </div>
                      <div className="mt-15">
                        <FiledCard title={"Total Connection "}>
                          <PrimaryLabel normal={true} className="text-normal font-normal">30</PrimaryLabel>
                        </FiledCard>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-15">
                    <Col
                      sm={24}
                      className="d-flex justify-content-center pr-15 align-items-center"
                    >
                      {/* <Popover closable={true}
                        content={CustomerDetails} placement="right"
                        trigger="click"
                        title={<div className="d-flex justify-content-between">
                          Customer Detail < CloseOutlined style={{ cursor: "pointer" }} onClick={() => setOpen(false)} /></div>}
                        style={{ width: "800px" }}
                        open={open}
                        onOpenChange={handleOpenChange}
                      > */}
                      <RightArrowIcon style={{ cursor: "pointer" }} />
                      {/* </Popover> */}
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className={open ? "mt-15 un-selected-card selected-card" : "mt-15 un-selected-card "}>
                <Col sm={24}>
                  <Row>
                    <Col sm={12} className="text-normal font-normal">
                      3M Company
                    </Col>
                    <Col sm={12} className="d-flex justify-content-end">
                      <FiledCard title={"Code:1102"} className="text-normal font-light"></FiledCard>
                    </Col>
                  </Row>

                  <Row className=" inside-wrapper mt-5">
                    <Col sm={12} >
                      <div>
                        <FiledCard title={"Created Date"}>
                          <PrimaryLabel normal={true} className="text-normal font-normal">01/01/2023</PrimaryLabel>
                        </FiledCard>
                      </div>
                      <div className="mt-15">
                        <FiledCard title={"Total Transation"} >
                          <PrimaryLabel normal={true} className="text-normal font-normal">23,082</PrimaryLabel>
                        </FiledCard>
                      </div>

                    </Col>

                    <Col sm={12}>
                      <div >
                        <FiledCard title={"Created By "}>
                          <PrimaryLabel normal={true} className="text-normal font-normal">Ilango</PrimaryLabel>
                        </FiledCard>
                      </div>
                      <div className="mt-15">
                        <FiledCard title={"Total Connection "}>
                          <PrimaryLabel normal={true} className="text-normal font-normal">30</PrimaryLabel>
                        </FiledCard>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-15">
                    <Col
                      sm={24}
                      className="d-flex justify-content-center pr-15 align-items-center"
                    >
                      {/* <Popover closable={true}
                        content={CustomerDetails} placement="right"
                        trigger="click"
                        title={<div className="d-flex justify-content-between">
                          Customer Detail < CloseOutlined style={{ cursor: "pointer" }} onClick={() => setOpen(false)} /></div>}
                        style={{ width: "800px" }}
                        open={open}
                        onOpenChange={handleOpenChange}
                      > */}
                      <RightArrowIcon style={{ cursor: "pointer" }} />
                      {/* </Popover> */}
                    </Col>
                  </Row>
                </Col>
              </Row>



            </div>

          </Card>
        </Col>
        <Col sm={24} lg={show === true ? 8 : 7} className="carrier-card">
          <Card
            bordered={false}
            style={{
              width: "100%",
            }}
            className="p-0 cards-container"
          >
            <Row align={"middle"}>
              <Col xl={18} >
                <span className="title">
                  Connected Carrier(3)
                </span>

              </Col>
              <Col xl={6} className="d-flex justify-content-end ">
                <Button
                  icon={<PlusOutlined />}
                  size={"large"}
                  className="primary-btn"
                  onClick={addCarrierHandler}
                >
                  Add Carrier
                </Button>
              </Col>
            </Row>
            <Row className="mt-15">
              <Col sm={24}>
                <Input placeholder="Search Carrier..." prefix={<SearchOutlined />} />
              </Col>
            </Row>
            <div className="page-scroll mt-15">

              <Row className="mt-15 selected-card">
                <Col sm={24}>
                  <Row gutter={12} align={"middle"}>
                    <Col sm={4}>
                      <PaintIcon width={40} height={40} />
                    </Col>
                    <Col sm={17}>
                      <FiledCard
                        title={"CENTRAL FREIGHT LINER (CENF)"}
                        labelClass="title-override"
                        className="text-normal"
                      ></FiledCard>
                      <FiledCard title={"Code: 1102"}></FiledCard>
                    </Col>
                    <Col sm={3}>
                      <NoSignalIcon />
                    </Col>
                  </Row>
                  <Row className="mt-15 inside-wrapper" align={"middle"}>
                    <Col
                      sm={24}
                      className="d-flex align-items-center flex-gap-half mb-10"
                    >
                      <AppstoreOutlined />
                      <FiledCard
                        textClass="pt-5"
                        title={"JkalanqN2nd 12"}
                      ></FiledCard>
                    </Col>
                    <Col
                      sm={24}
                      className="d-flex align-items-center flex-gap-half mb-10"
                    >
                      <CalendarOutlined />
                      <FiledCard textClass="pt-5" title={"12/12/2022"}></FiledCard>
                    </Col>
                    <Col
                      sm={24}
                      className="d-flex align-items-center flex-gap-half"
                    >
                      <UserOutlined />
                      <FiledCard textClass="pt-5" title={"Ilango"}></FiledCard>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mt-15 un-selected-card">
                <Col sm={24}>
                  <Row gutter={12} align={"middle"}>
                    <Col sm={4}>
                      <PaintIcon width={40} height={40} />
                    </Col>
                    <Col sm={17}>
                      <FiledCard
                        title={"CENTRAL FREIGHT LINER (CENF)"}
                        labelClass="title-override"
                        className="text-normal"

                      ></FiledCard>
                      <FiledCard title={"Code: 1102"}></FiledCard>
                    </Col>
                    <Col sm={3}>
                      <FullSignalIcon />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Divider />
              <Row className=" un-selected-card">
                <Col sm={24}>
                  <Row gutter={12} align={"middle"}>
                    <Col sm={4}>
                      <PaintIcon width={40} height={40} />
                    </Col>
                    <Col sm={17}>
                      <FiledCard
                        title={"CENTRAL FREIGHT LINER (CENF)"}
                        labelClass="title-override"
                        className='text-bold font-bold'
                      ></FiledCard>
                      <FiledCard title={"Code: 1102"}></FiledCard>
                    </Col>
                    <Col sm={3}>
                      <FullSignalIcon />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>

          </Card>
        </Col>
        <Col sm={19} lg={show === true ? 9 : 11}>
          <Card
            bordered={false}
            style={{
              width: "100%",
              height:"100%"
            }}
            className="cards-container"
          >
            <Row className=" selected-card b-none align-items-center" >
              <Col lg={show ? 15 : 17}>
                {connect &&
                  <Button
                    icon={<DotSuccessIcon className="pr-10" />}
                    size={"large"}
                    style={{ borderRadius: 20, fontSize: '1rem', fontWeight: 400, borderColor: "#039855", color: "#039855", background: "#ECFDF3" }}
                  >
                    Connected{connect}

                  </Button>
                }
                {!connect &&
                  <Button
                    icon={<DotIcon className="pr-10" />}
                    size={"large"}
                    style={{ borderRadius: 20, fontSize: '1rem', fontWeight: 400, color: "#667085" }}
                  >
                    Not Connected{connect}

                  </Button>
                }
                <Row gutter={12} align={"middle"} className="mt-15">

                  <Col sm={24}>
                    <FiledCard
                      title={"CENTRAL FREIGHT LINER (CENF)"}
                      labelClass="title-override"
                    ></FiledCard>
                  </Col>
                  <Col sm={24} className="mt-5">
                    <FiledCard title={"Customer: 3M Company - 1102"} ></FiledCard>
                    <div className="d-flex flex-direction-row flex-gap-1 mt-5">
                      <FiledCard title={"Carrier Instruction"} ></FiledCard>
                      <QuestionIcon />
                    </div>
                  </Col>

                </Row>
              </Col>
              <Col lg={show ? 9 : 7} className="text-right mt-10">
                {connect &&
                  <div className="d-flex flex-direction-column ">
                    <Button
                      type="primary"
                      size={"large"}
                      style={{ fontSize: '1.125rem', fontWeight: 500, background: '#D92D20' }}
                      onClick={disoCnnectHandler}
                    >
                      Disconnect
                    </Button>
                    <Button
                      type="primary"
                      size={"large"}
                      className="mt-10"
                      style={{ fontSize: '1.125rem', fontWeight: 500, background: '#fff', color: "#000" }}
                    >
                      Debug
                    </Button>
                  </div>
                }
                {!connect &&
                  <div style={{ textAlign: "right" }}>
                    <Button
                      type="primary"
                      size={"large"}
                      style={{ fontSize: '1.125rem', fontWeight: 500 }}
                      onClick={connectHandler}
                      className=" align-center"
                    >
                      Connected
                    </Button>
                  </div>
                }

              </Col>
            </Row>
            <Row className="mt-15">
              <Col sm={24}>
                <Tabs defaultActiveKey="1" items={tabsItem} onChange={() => { }} className="tabs-info" />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row >
    </div >


  );
}
export default CustomerSetup;
