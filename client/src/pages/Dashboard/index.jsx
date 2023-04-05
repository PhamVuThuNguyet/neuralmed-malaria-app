import styles from "../../styles/Dashboard/dashboard.module.scss";
import SummaryData from "./components/summary-data";
import Chart from "./components/chart";
import api from "../../api";
import { ReactComponent as HouseIcon } from "../../assets/House.svg";
import { React, useEffect, useState } from "react";

export default function Dashboard() {

  const [summaryData, setSummaryData] = useState([]);

  const apiConfig = {
    //TODO: token from login
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDI0NDI2ODU1OWE2OWVhZTdlMDgzN2UiLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2ODA3MDQwNjgsImV4cCI6MTY4MDc5MDQ2OH0.8e-t6pM6cbjRVz6o117oD_TeHFQWnwu6U7DC7trk7Hs`}
  }

  const getData = async () => {
    const data = [];

    const res = await api.get("/health-records", apiConfig);

    data.push({
      "title": "Total records",
      "icon": <HouseIcon/>,
      "total": res.data.length
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
