import React from "react";
import {Row,Col,Card} from 'antd'
import { ReactComponent as PaintIcon } from "../../../assets/svg/paint.svg";
import { ReactComponent as FullSignalIcon } from "../../../assets/svg/full-signal.svg";
import FiledCard from "../../../component/close-icon/cards/fields-card";
let ActivityTab = () => {
    return (
        <div>
      <Row>
        <Col className='mt-10'>Connected Carrier</Col>
      </Row>

      <Row className="un-selected-card mt-25">
          <Col sm={24}>
              <Row gutter={12} align={"middle"}>
                   <Col sm={2}>
                        <PaintIcon width={40} height={40} />
                   </Col>
                   <Col sm={17}>
                       <FiledCard 
                            title={"CENTRAL FREIGHT LINER (CENF)"}
                             labelClass="title-override"
                             className="colours"
                         ></FiledCard>
                        <FiledCard title={"Code: 1102"}></FiledCard>
                    </Col>
                    <Col sm={3}>
                        <FullSignalIcon />
                   </Col>
                 </Row>
            </Col>     
         </Row>
         <Row className="mt-25">
         <Col sm={24}>
              <Row gutter={12} align={"middle"}>
                   <Col sm={2}>
                        <PaintIcon width={40} height={40} />
                   </Col>
                   <Col sm={21}>
                       <FiledCard
                            title={"CENTRAL FREIGHT LINER (CENF)"}
                             labelClass="title-override"
                             className="text-normal"
                         ></FiledCard>
                        <FiledCard title={"Code: 1102"}></FiledCard>
                    </Col>
                    <Col sm={1}>
                        <FullSignalIcon />
                   </Col>
                 </Row>
            </Col>     
            </Row>
            <Row className="mt-25">
         <Col sm={24}>
              <Row gutter={12} align={"middle"}>
                   <Col sm={2}>
                        <PaintIcon width={40} height={40} />
                   </Col>
                   <Col sm={21}>
                       <FiledCard
                            title={"CENTRAL FREIGHT LINER (CENF)"}
                             labelClass="title-override"
                             className="text-normal"
                         ></FiledCard>
                        <FiledCard title={"Code: 1102"}></FiledCard>
                    </Col>
                    <Col sm={1}>
                        <FullSignalIcon />
                   </Col>
                 </Row>
            </Col>     
            </Row>
            <Row className="mt-25">
         <Col sm={24}>
              <Row gutter={12} align={"middle"}>
                   <Col sm={2}>
                        <PaintIcon width={40} height={40} />
                   </Col>
                   <Col sm={21}>
                       <FiledCard
                            title={"CENTRAL FREIGHT LINER (CENF)"}
                             labelClass="title-override"
                             className="text-normal"
                         ></FiledCard>
                        <FiledCard title={"Code: 1102"}></FiledCard>
                    </Col>
                    <Col sm={1}>
                        <FullSignalIcon />
                   </Col>
                 </Row>
            </Col>     
            </Row>
            
        
  </div>
    )
}
export default ActivityTab;