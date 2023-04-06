import { Button, Col, Row, Input, Space, Table, Tag } from "antd";
import React, { Fragment } from "react";
import {
    SearchOutlined,
    PlusOutlined
} from "@ant-design/icons";
import { ReactComponent as EditIcon } from "../../../../assets/svg/edit.svg";
import { ReactComponent as DeleteIcon } from "../../../../assets/svg/delete.svg";
import SimpleTable from "../../../../component/tables/simple-table";

/* table data */
const columns = [
    {
        title: 'CARRIER SCAC',
        dataIndex: 'carrierScac',
        key: 'carrierScac',
        width: '15%'
    },
    {
        title: 'CARRIER STATUS DESC',
        dataIndex: 'carrierStatusDesc',
        key: 'carrierStatusDesc',
        width: '20%'

    },
    {
        title: 'CARRIER STATUS CODE',
        dataIndex: 'carrierStatusCode',
        key: 'carrierStatusCode',
        width: '20%'

    },
    {
        title: 'STANDARD STATUS CODE',
        dataIndex: 'standardStatusCode',
        key: 'standardStatusCode',
        width: '20%'

    },
    {
        title: '',
        dataIndex: 'actions',
        key: 'actions',
        width: '15%',
        render: () => {
            return (
                <div style={{marginLeft: "-10px"}}>
                    <a><EditIcon style={{ width: "35px", marginRight: "5px" }} /></a>

                    <a><DeleteIcon style={{ width: "32px"}} /></a>
                </div>
            )
        },


    },

]

const data = [
    {
        key: '1',
        carrierScac: 'CENF',
        carrierStatusDesc: 'Departed Terminal',
        carrierStatusCode: '',
        standardStatusCode: 'PI',
    },
    {
        key: '2',
        carrierScac: 'CENF',
        carrierStatusDesc: 'Reported Picked p',
        carrierStatusCode: 'x4',
        standardStatusCode: 'IO',
    },

];





let StatusCodeTabs = () => {
    return (
        <Fragment>
            <Row gutter={12} className="mb-20 align-items-center" >
                <Col sm={18}>
                    <Input placeholder="Search here..." prefix={<SearchOutlined />} />
                </Col>
                <Col sm={6}>
                    <Button icon={<PlusOutlined />} size={"large"} className="primary-btn">
                        Add Mapping
                    </Button>
                </Col>
            </Row>


            <SimpleTable columns={columns} data={data} />


        </Fragment>
    )

}
export default StatusCodeTabs;