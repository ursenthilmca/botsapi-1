import { Row, Col, Input, Button, Affix } from "antd";
import React, { Fragment, useState } from "react";
import PrimaryLabel from "../../../../../component/labels/primary-label";
import PerfectScrollbar from 'react-perfect-scrollbar';

import {
    SearchOutlined,
    PlusOutlined
} from "@ant-design/icons";
import MappingViewSourceMenu from "./mapping-view-source-menu";


let MappingViewTab = () => {
    const [container, setContainer] = useState(null);

    return (
        <Fragment>
            <Row gutter={35} className=" flex-gap-1">
                <Col sm={9} className="b-1 p-15 ">
                    <Row >
                        <Col sm={24} >
                            <PrimaryLabel normal={true} className="text-20 font-normal">Source</PrimaryLabel>

                        </Col>
                        <Col sm={24}>
                            <div className="d-flex flex-gap-half  mt-10">

                                <Input placeholder="Search..." prefix={<SearchOutlined />} />
                                <Button className="primary-btn">Expand</Button>
                            </div>

                        </Col>
                        <Row className="mt-15">
                            <Col sm={24}>
                                <MappingViewSourceMenu />
                            </Col>

                        </Row>

                    </Row>
                </Col>

                <Col sm={14} className="b-1">
                    {/* <div className="scrollable-container" ref={setContainer}>
                        <div className="background">
                            <Affix target={() => container} > */}
                    {/* <PerfectScrollbar style={{ maxHeight: '100px', overflow: 'hidden' }}> */}

                    <p>
                        Ayodhya, also called Oudh or Awadh, town, south-central Uttar Pradesh state, northern India. It lies on the Ghaghara River just east of Faizabad.
                    </p>
                    <p>An ancient town, Ayodhya is regarded as one of the seven sacred cities of the Hindus, revered because of its association in the great Indian epic poem Ramayana with the birth of Rama and with the rule of his father, Dasharatha. According to this source, the town was prosperous and well fortified and had a large population.</p>
                    <p>In traditional history, Ayodhya was the early capital of the kingdom of Kosala, though in Buddhist times (6th–5th century BCE) Shravasti became the kingdom’s chief city. Scholars generally agree that Ayodhya is identical with the town of Saketa, where the Buddha is said to have resided for a time. Its later importance as a Buddhist centre can be gauged from the statement of the Chinese Buddhist monk Faxian in the 5th century CE that there were 100 monasteries there (although he cited 100, Faxian probably did not mean that exact number, just that there were many monasteries). There were also a number of other monuments, including a stupa (shrine) reputed to have been founded by the Mauryan emperor Ashoka (3rd century BCE).</p>
                    <p>
                        The Kanauj kingdom arose in Ayodhya, then called Oudh, during the 11th and 12th centuries CE. The region was later included in the Delhi sultanate, the Jaunpur kingdom, and, in the 16th century, the Mughal Empire. Oudh gained a measure of independence early in the 18th century but became subordinate to the British East India Company in 1764. In 1856 it was annexed by the British; the annexation and subsequent loss of rights by the hereditary land revenue receivers provided one of the causes of the Indian Mutiny in 1857. Oudh was joined with the Agra Presidency in 1877 to form the North-Western Provinces and later the United Provinces of Agra and Oudh, now Uttar Pradesh state.
                    </p>
                    {/* </Affix>
                        </div>
                    </div> */}
                    {/* </PerfectScrollbar> */}

                </Col>

            </Row>

        </Fragment >
    )
}
export default MappingViewTab;