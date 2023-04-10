import { Drawer, Tabs, Row } from "antd";
import React, { Fragment, useState } from "react";
import "./edit-mapping.scss";
import MappingItemTab from "./edit-mapping-tabs/mapping-item-tab";
import MappingViewTab from "./edit-mapping-tabs/mapping-view-tab";

let EditMapping = (props) => {
    const [open, setOpen] = useState(props.drawerStatus);

    const [placement, setPlacement] = useState('left');


    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        props.updateStatus(false);
        setOpen(false);
    };

    const items = [
        {
            key: '1',
            label: `Mapping View`,
            children: <MappingViewTab />,
        },
        {
            key: '2',
            label: `Mapping Items`,
            children: <MappingItemTab />,
        },

    ];
    let tabonChangeHandler = (key) => {
        console.log(key);

    }
    return (
        <Fragment>

            <Drawer
                title="Edit Mapping"
                placement={placement}
                closable={true}
                onClose={onClose}
                open={open}
                style={{ width: "1000px" }}
                key={placement}
                className="edit-mapping"

            >
                <div className='' >

                    <Tabs defaultActiveKey="1" items={items} onChange={tabonChangeHandler} className="sub-tab w-100" />
                </div>
            </Drawer>
        </Fragment >



    )
}
export default EditMapping;