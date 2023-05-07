import { Button, Card, Col, Divider, Input, Row, Tabs, Popover } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import "./customer-setup.scss";
import AddCustomer from "./add-customer";
import AddCarrier from "./add-carrier";
import { CUSTOMER_DATA, CUSTOMER_TYPE, CUSTOMER_DETAILS } from '../../api/data'
import { fetchCustomerHeaderdata, fetchCustomerDetails, customerSetupcomponent } from '../action/CustomerDetail';
import logo from '../image/Rectangle2.png'
import vector from '../image/Vector.png'
import vector1 from '../image/Vector1.png'
import vector2 from '../image/Vector2.png'
import downArrow from '../image/downarrow.png'



function CustomerSetupmodule(props) {

  const [connect, setConnect] = useState(false);
  const [addCustomer, setAddCustomer] = useState(false);
  const [addcarrier, setAddCarrier] = useState(false)
  const customerSetup = useSelector(state => state.customerSetup)

  const dispatch = useDispatch()
  let addCustomerHandler = () => {
    setAddCustomer(!addCustomer)
  }
  let addCarrierHandler = () => {
    setAddCarrier(!addcarrier)
  }

  useEffect(() => {
    dispatch(fetchCustomerHeaderdata(CUSTOMER_DATA))
    dispatch(fetchCustomerDetails(CUSTOMER_DETAILS))
    dispatch(customerSetupcomponent(true))
  }, [])


  return (

    <div className="add-customer">

      {addCustomer && <AddCustomer drawerStatus={addCustomer} updateStatus={addCustomerHandler} />}
      {addcarrier && <AddCarrier drawerStatus={addcarrier} updateStatus={addCarrierHandler} />}

      <Row>
        <Col lg={16}>
          <span className="customer-welcome">Welcome Back, Robert </span>
          <span className="wel-msg">Amet minim mollit non deserunt ullamco est sit aliqua dolor do</span>
        </Col>
        <Col lg={8}>
          <div className="float-btn  d-flex flex-gap-half">
            <Button className="show-btn"  >
              <img src={downArrow} className="downArrow"></img>{'Show: Latest'}
            </Button>
            <Button className="primary-btn"  >
              <img src={vector1} className="vector1" ></img> <img src={vector2} className="vector2"></img> {'Add New Carrier'}</Button>
          </div>

        </Col>
      </Row>
      <Row gutter={{ lg: 12, xs: 4 }}>
        {customerSetup && customerSetup.headerData.map(item => {
          return (
            <Col sm={24} lg={8}>
              <Card bordered={false} className=" card-style" style={{ width: "100%" }}>
                <Row className="span-card">
                  <Col sm={24}>
                    <div className="d-flex align-items-center">
                      <span className="span-card-icon">{item.icon}</span>

                      <span className="span-card-title">{item.title}</span>
                    </div>
                    <Divider className="my-4" />
                    <span className="span-card-count">{item.count}</span>
                    <span className="span-card-val">{item.value}</span>
                  </Col>

                </Row>
                <Row>
                  <Col sm={24}>
                    <span className="span-card-update">{item.lastUpdate}</span>
                  </Col>
                </Row>

              </Card>
            </Col>
          )
        })
        }


      </Row>
      <Fragment>
        <div className="container-maindiv">
          fdjh
          {/* <Row gutter={12} className="mt-15">
            {
              // store it in redux
              CUSTOMER_TYPE.map(item => {
                return (
                  <Col sm={2} lg={2}>
                    <div className="card-header">{item.key}</div>
                  </Col>
                )

              })
            }
          </Row> */}
          dfkd
          {/* <div className="tableFixHead">
            <table>

              <thead>
                <tr>
                  <th >CARRIER</th>
                  <th >DATE</th>
                  <th >CUSTOMER</th>
                  <th >ACTION</th>
                </tr>
              </thead>
              <tbody>
                {
                  customerSetup && customerSetup.customerSetupdetails.map(value => {
                    return (
                      <Fragment>
                        <tr>
                          <td className="border-left">
                            <span className="carrier-span">
                              <span>
                                <img src={vector} className="td-vector"></img>
                                <img src={logo} className="td-img"></img>
                              </span>
                              <div className="carrier-div">
                                <span className="td-carrier">{value.carrier}</span>
                                <span className="td-code">{value.code}</span>
                              </div>

                            </span>

                          </td>
                          <td>
                            <span className="td-code ">{value.date}</span>
                          </td>
                          <td>
                            <div className="carrier-div">
                              <span className="td-carrier">{value.customer}</span>
                              <span className="td-code">{value.customer_code}</span>
                            </div>
                          </td>
                          <td>

                            <Button className="debug-btn"  >Debug</Button>
                            <Button className="disconnect-btn"  >Disconnect</Button>
                          </td>
                        </tr>
                      </Fragment>
                    )
                  })
                }
              </tbody>
            </table>

          </div> */}
        </div>
      </Fragment>
    </div>
  );


}

export default CustomerSetupmodule

