import { Row, Col, Table, Card, Button, Modal } from "antd";
import React, { Fragment, useState } from "react";
import PrimaryLabel from "../../../../component/labels/primary-label";
import { ReactComponent as EditIcon } from "../../../../assets/svg/PencilSimpleLine.svg";
import SimpleTable from "../../../../component/Tables/simple-table";
import { ReactComponent as DeleteIcon } from "../../../../assets/svg/Trash-withoutOutline-red.svg";
import EditMapping from "./edit-mapping";

let MappingRequestTab = () => {

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [editMapping, setEditMapping] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    const columns = [
        {
            title: 'BOTS API NODE',
            dataIndex: 'botsApiNode',
            key: 'botsApiNode',
            width: '40%'
        },
        {
            title: 'CARRIER API Node',
            dataIndex: 'carrierApiNode',
            key: 'carrierApiNode',
            width: '30%'

        },

        {
            title: '',
            dataIndex: 'actions',
            key: 'actions',
            width: '30%',
            render: () => {
                return (
                    <div>

                        <a className="d-flex" onClick={showModal}>
                            <DeleteIcon style={{ width: "32px" }} />
                            <span className="text-large font-normal text-danger" >
                                Delete
                            </span>
                        </a>
                    </div>
                )
            },


        },

    ]
    const data = [
        {
            key: '1',
            botsApiNode: 'origin.postalCode',
            carrierApiNode: 'oZip'

        },
        {
            key: '2',
            botsApiNode: 'origin.postalCode',
            carrierApiNode: 'oZip'


        },

    ];

    const editMappingHandler = (data) => {
        setEditMapping(data)

    }
    return (
        <Fragment>
            {editMapping && <EditMapping drawerStatus={editMapping} updateStatus={editMappingHandler} />}
            <Row className="mt-20" gutter={15}>
                <Col sm={8} className="h-100">
                    <Card style={{ background: "#EAECF0" }}>
                        <PrimaryLabel normal={true} className="text-large font-normal ">Actions</PrimaryLabel>
                        <Button icon={<EditIcon />} size={"large"} className="primary-btn d-flex flex-gap-1 align-items-center justify-content-center mt-12 w-100" onClick={() => setEditMapping(true)}>Edit Mapping</Button>
                        <Button size={"large"} className="light-btn  mt-12 w-100">Delete All Mapped Nodes</Button>
                    </Card>

                </Col>
                <Col sm={16}>
                    <SimpleTable columns={columns} data={data} />


                </Col>
            </Row>
            <Modal
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}

                className="map-request-model"
            >                <DeleteIcon className="mb-10 p-10 bg-danger border-rounded " style={{}} />
                <br />
                <PrimaryLabel normal={true} className="text-large font-bold mb-20">Delete Node</PrimaryLabel>
                <br />
                <br />

                <PrimaryLabel normal={true} className="text-normal font-light pt-15 ">Are you sure you want to delete this API node?</PrimaryLabel>
                <div className="mt-25 mb-15 d-flex flex-gap-1 align-items-center justify-content-center">
                    <Button size={"large"} className="light-btn w-50" onCancel={handleCancel}
                    >Cancel</Button>
                    <Button size={"large"} className="danger-btn w-50">Yes, delete node</Button>
                </div>
            </Modal>

        </Fragment>
    )


}
export default MappingRequestTab