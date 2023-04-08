import styles from "../../styles/Dashboard/dashboard.module.scss";
import SummaryData from "./components/summary-data";
import Chart from "./components/chart";
import api from "../../api/api";
import { ReactComponent as HouseIcon } from "../../assets/House.svg";
import { React, useEffect, useState } from "react";

export default function Dashboard() {

  const [summaryData, setSummaryData] = useState([]);

  const getData = async () => {
    const data = [];
    const res_total_record = await api.get("/health-records");
    const res_total_patient = await api.get("/patients");
    data.push({
      "title": "Total patient",
      "icon": <HouseIcon/>,
      "total": res_total_patient.data.length
    })

    data.push({
      "title": "Total record",
      "icon": <HouseIcon/>,
      "total": res_total_record.data.length
    });

    setSummaryData(data);
  }

  useEffect(() => {
    getData();
  },[]);

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        {summaryData.map((item) => (
          <SummaryData item={item} />
        ))}
      </div>
      <div className="col-span-4">
        <Chart />
      </div>
    </div>
  );
}
