import React from 'react';
import { Switch } from "antd"

function SwitchIcon({ onChange = () => { }, checked = false }) {
    return (
        <Switch
            style={{ background: "#05987B" }}
            className=""
            onChange={onChange}
            checked={checked}
        />
    );
}

export default SwitchIcon;