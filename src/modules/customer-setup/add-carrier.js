import { Drawer, Row, Col, Input, Card ,Grid,Divider, Button } from 'antd'
import "./customer-setup.scss";
import "./add-carrier.scss";
import "./add-customer.scss";

import canon from "./../../assets/png/canon.png";
import c2icon  from "./../../assets/png/c2.png";
import {ReactComponent as PaintIcon } from "./../../assets/svg/paint.svg";
import loveclipicon  from "./../../assets/png/loveclip.png";
import  moicon  from "./../../assets/png/mo.png";
import salesforceicon  from "./../../assets/png/salesforce.png";
import susiicon  from "./../../assets/png/susi.png";
import timeicon  from "./../../assets/png/time.png";
import boicon from "./../../assets/png/bo.png";
import {ReactComponent as RightArrowIcon } from "./../../assets/svg/right-arrow.svg";
import React, { useState } from "react";
import { Footer } from 'antd/es/layout/layout';

let AddCarrier = (props) => {
    const [open, setOpen] = useState(props.drawerStatus);
    const [placement, setPlacement] = useState('left');
   
    
    
    const onClose = () => {
        props.updateStatus(false);
        setOpen(false);
    };
   

    return (
        <Drawer className='addcarrier_block '
            title="Add Carrier "
            placement={placement}
            closable={true}
            onClose={onClose}
            open={open}
            key={placement}>        
             <div className='customer'>
             <Row className='mt-7 '>
                <Col sm={6} >
                    <row className=' minismall'>
                    AVAILABLE CARRIER
                    </row>
                    <Row>
                       <Col className='mt-15'>TMS  (10)
                       </Col>
                    </Row>
                     <Row>
                         <Col className='mt-15'>Carrier (8)
                         </Col>
                     </Row>
                
                     <Row>
                         <Col className='mt-15'> ERP (12)
                         </Col>
                    </Row>
                
                     <Row>
                         <Col className='mt-15'>Shipper (20)
                        </Col>
                     </Row>
                
                </Col>
                <Col sm={18}>
                    < Row>
                        <Col sm={24}>
                        <Input   placeholder='Search carrier ... '  />
                       </Col>
                    </Row>
                    <Row gutter={[5,5] }>
                    
                       <Col className='mt-15  ml-15 width1'span={7}>
                        
                          <Row  >
                            <Col className='ml-50 mt-20'> 
                            <img src={canon} alt="canon width= "  width={60} height={60}  /> 
                             </Col> 
                           </Row>
                           <Row>
                             <Col className='ml-44'>
                             SalesForce
                        </Col>
                        </Row>
                
                        </Col>  

                        <Col className='mt-15  ml-15 width1' span={7}>
                        <Row  >
                             <Col className='ml-50 mt-20  '> 
                             <img src={timeicon} alt="time"  width={60} height={60}    />
                             </Col> 
                        </Row>
                        <Row>
                             <Col className='ml-44'>
                             SalesForce
                            </Col>
                        </Row>
                            
                             </Col>
                       <Col className='mt-15  ml-15 width1' span={7}>
                       <Row  >
                             <Col className='ml-50 mt-20  '> 
                             <PaintIcon  width={60} height={60}   />
                             </Col> 
                        </Row>
                        <Row>
                             <Col className='ml-44'>
                             SalesForce
                            </Col>
                        </Row>
                       </Col>

                       <Col className='mt-15 ml-15 width1'  span={7}>
                       <Row  >
                             <Col className='ml-50 mt-20  '> 
                             <img src={moicon} alt="moicon"  width={60} height={60}    />
                             </Col> 
                        </Row>
                        <Row>
                             <Col className='ml-44'>
                             SalesForce
                            </Col>
                        </Row> </Col>
                       <Col className='mt-15 ml-15 width1' span={7}>
                       <Row  >
                             <Col className='ml-50 mt-20  '> 
                             <img src={loveclipicon} alt="loveicon"  width={60} height={60}    />
                             </Col> 
                        </Row>
                        <Row>
                             <Col className='ml-44'>
                             SalesForce
                            </Col>
                        </Row></Col> 
                       <Col className='mt-15 ml-15 width1'span={7}>
                       <Row  >
                             <Col className='ml-50 mt-20  '> 
                             <img src={susiicon} alt="susi"  width={60} height={60}    />
                             </Col> 
                        </Row>
                        <Row>
                             <Col className='ml-44'>
                             SalesForce
                            </Col>
                        </Row> </Col>

                       <Col className='mt-15 ml-15 width1'  span={7}>
                       <Row  >
                             <Col className='ml-50 mt-20  '> 
                             <img src={c2icon} alt="salesicon"  width={60} height={60}    />
                             </Col> 
                        </Row>
                        <Row>
                             <Col className='ml-44'>
                             SalesForce
                            </Col>
                        </Row> </Col>
                       <Col className='mt-15 ml-15 width1' span={7}>
                       <Row  >
                             <Col className='ml-50 mt-20  '> 
                             <img src={boicon} alt="boicon"  width={60} height={60}    />
                             </Col> 
                        </Row>
                        <Row>
                             <Col className='ml-44'>
                             SalesForce
                            </Col>
                        </Row></Col> 
                       <Col className='mt-15 ml-15 width1'span={7}> 
                       <Row  >
                             <Col className='ml-50 mt-20  '> 
                             <img src={salesforceicon} alt="salesicon"  width={60} height={60}    />
                             </Col> 
                        </Row>
                        <Row>
                             <Col className='ml-44'>
                             SalesForce
                            </Col>
                        </Row></Col>

                    </Row>
                </Col>    
                </Row >    
                
                {/* <Col  className='border-line mt-15' ></Col>

<Row>
<Col sm={18}></Col>
           <Col sm={6}> <Button  size={"large"} className="primary-btn mt-15" >
                  Add Customer&nbsp;<RightArrowIcon    width={12} height={12} />
            </Button>
            </Col> 
            </Row> */}
            <Footer style={{ 
        borderTop: '1px solid #e8e8e8',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '850px',
        backgroundColor: 'white',
       }} ><Row>
       <Col sm={19}></Col>
                  <Col sm={5}> <Button  size={"large"} className="primary-btn " >
                         Add Customer&nbsp;<RightArrowIcon width={50} height={12} />
                   </Button>
                   </Col> 
                   </Row></Footer>
            
            </div>
            </Drawer>
            )
        }
        export default AddCarrier;