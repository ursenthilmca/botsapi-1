import { Drawer, Button, Row, Col, Select, Space, Steps, Divider } from 'antd';
import React, { Fragment, useState } from 'react';
import { ReactComponent as NoteBookActiveIcon } from '../../assets/svg/notebook-green.svg';
import { ReactComponent as GitDiffIcon } from '../../assets/svg/GitDiff.svg';
import { ReactComponent as CloudCheckIcon } from '../../assets/svg/cloud-check-outline.svg';
import { ReactComponent as ListDahesIcon } from '../../assets/svg/ListDashes.svg';
import FormInput from '../../component/form-input/form-input';
import FiledCard from '../../component/close-icon/cards/fields-card';



let NewApiCarrier = (props) => {

    const [open, setOpen] = useState(props.drawerStatus);
    const [placement, setPlacement] = useState('left');
    const showDrawer = () => setOpen(true);
    const onClose = () => {
        props.updateStatus(false);
        setOpen(false);
    };
    const onChange = (e) => setPlacement(e.target.value);
    const description = 'This is a description.';

    return (
        <Fragment>
            <Drawer
                title="New API Carrier"
                placement={placement}
                closable={true}
                maskClosable={false}
                style={{ width: "900px" }}
                onClose={onClose}
                open={open}
                key={placement}
                className='new-api-carrier'
                footer={<div className='d-flex justify-content-between'>
                    <Button size={"large"} className="secondary-btn text-center w-20"  >Cancel</Button>
                    <Button size={"large"} className="primary-btn w-20" >Next</Button>
                </div>}

            >
                <Row>

                    <Col sm={8} >
                        <Steps

                            direction="vertical"
                            current={1}
                            items={[
                                {
                                    title: 'General Information',
                                    status: 'finish',
                                    icon: <NoteBookActiveIcon />,
                                },
                                {
                                    title: 'Authentication/Attribute',
                                    status: 'wait',
                                    icon: <GitDiffIcon />,
                                },
                                {
                                    title: 'API',
                                    status: 'wait',
                                    icon: <CloudCheckIcon />,
                                },
                                {
                                    title: 'Others',
                                    status: 'wait',
                                    icon: <ListDahesIcon />,
                                },
                            ]}

                        />

                    </Col>
                    <Col sm={1}>
                        <Divider type="vertical" style={{ height: "500px" }} />
                    </Col>
                    <Col sm={15}>
                        <Space direction="vertical" size="large" style={{ display: 'flex' }}>


                            <FiledCard title={"Carrier"} >
                                <Select
                                    defaultValue="Select Carrier"
                                    style={{
                                        width: "100%",
                                    }}
                                    onChange={{}}
                                    options={[

                                    ]}
                                />
                            </FiledCard>
                            <FiledCard title={"Logistichub API"} >
                                <Select
                                    defaultValue="Select "
                                    style={{
                                        width: "100%",
                                    }}
                                    onChange={{}}
                                    options={[

                                    ]}
                                />
                            </FiledCard>
                            <FiledCard title={"Request Type"}  >
                                <Select
                                    defaultValue="Select Request Type"
                                    style={{
                                        width: "100%",
                                    }}
                                    onChange={{}}
                                    options={[

                                    ]}
                                />
                            </FiledCard>

                            <FormInput
                                editMode={true}
                                label={"Username"}
                                placeholder={"Enter Username"}
                                name="userName"
                            />
                        </Space>

                        <FormInput
                            editMode={true}
                            label={"Password"}
                            placeholder={"Enter Password"}
                            name="password"
                        />
                        <FormInput
                            editMode={true}
                            label={"Account Number"}
                            placeholder={"Enter Account Number"}
                            name="accountNumber"
                        />
                    </Col>

                </Row>

                {/* <Divider /> */}



            </Drawer>



        </Fragment >


    )
}
export default NewApiCarrier;