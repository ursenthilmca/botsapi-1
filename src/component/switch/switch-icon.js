import React from 'react';
import { Switch } from "antd"

function SwitchIcon({ onClick = () => { }, checked = false }) {
    return (
        <Switch
            style={{ background: "#05987B" }}
            className=""
            onClick={onClick}
            checked={checked}
        />
    );
}

export default SwitchIcon;