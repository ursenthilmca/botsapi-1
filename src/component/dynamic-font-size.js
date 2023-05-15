import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import IconButton from "../component/Button/IconButton";


const lowest = "-30%";
const middle = "-10%";
const highest = "10%";

const DynamicFontSize = () => {
    const [percent, setPercent] = useState(middle);

    useEffect(() => {
        const p = localStorage.getItem("fontZoomLevel");
        if (p) {
            handleClick(p);
        }
    }, []);

    const handleClick = (p) => {
        localStorage.setItem("fontZoomLevel", p);
        setPercent(p);
        document.documentElement.style.setProperty("--fontSizePercent", p);
    };
    return (
        <div className="dynamic-font-size-container">
            <Row className="text-container" gutter={5} justify={"space-between"}>
                <Col>
                    <IconButton
                        onClick={() => handleClick(lowest)}
                        className={`${percent === lowest && "active"}`}
                    >
                        A
                    </IconButton>
                </Col>
                <Col>
                    <IconButton
                        onClick={() => handleClick(middle)}
                        className={`${percent === middle && "active"}`}
                    >
                        A
                    </IconButton>
                </Col>
                <Col>
                    <IconButton
                        onClick={() => handleClick(highest)}
                        className={`${percent === highest && "active"}`}
                    >
                        A
                    </IconButton>
                </Col>
            </Row>
            <div className="line-container">
                <span className={`${percent === lowest && "active"}`}></span>
                <span className={`${percent === middle && "active"}`}></span>
                <span className={`${percent === highest && "active"}`}></span>
            </div>
        </div>
    );
};

export default DynamicFontSize;
