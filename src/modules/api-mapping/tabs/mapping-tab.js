import { Tabs } from "antd";
import React, { Fragment } from "react";

import MappingRequestTab from "./mapping-tabs/mapping-request-tab";
import MappingResponseTab from "./mapping-tabs/mapping-response-tab";

let Mapping = () => {
    let tabonChangeHandler = (key) => {
        console.log(key);

    }


    const items = [
        {
            key: '1',
            label: `Request`,
            children: <MappingRequestTab />,
        },
        {
            key: '2',
            label: `Response`,
            children: <MappingResponseTab />,
        },

    ];


    return (
        <Fragment>
            <div >

                <Tabs defaultActiveKey="1" items={items} onChange={tabonChangeHandler} className="sub-tab pl-10" />
            </div>

        </Fragment>
    )
}
export default Mapping;