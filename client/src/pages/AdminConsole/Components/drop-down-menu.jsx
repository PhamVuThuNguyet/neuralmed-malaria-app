import React, { useMemo } from "react";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import {ReactComponent as CaretDown} from "../../../assets/CaretDown.svg";
import styles from "../../../styles/AdminConsole/adminconsole-doctor-register.module.scss";

const DropMenu = () => {
  const items = useMemo(() => [
    {
      key: "1",
      label: (
        <Link to="http://localhost:3000/admin">
            Doctor
        </Link>
        
      )
    },
    {
      key: "2",
      label: (
        <Link to="http://localhost:3000/admin">
            Technologist
        </Link>
      ),
      disabled: false
    },
    {
      key: "3",
      label: (
        <Link to="http://localhost:3000/admin">
            Employee
        </Link>
      ),
      disabled: false
    }
  ], []);

  const handleOnClick = (e) => {
    e.preventDefault();
  }

  return (
    <Dropdown menu={{ items }}>
      <a onClick={handleOnClick}>
        <Space className={styles.dropmenu}>
          Doctor
          <CaretDown />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropMenu;