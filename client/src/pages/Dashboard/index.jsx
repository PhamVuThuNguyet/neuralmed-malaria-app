import styles from "../../styles/Dashboard/dashboard.module.scss";
import SummaryData from "./summary-data";
import { data } from "../../data/data-summary-list";
import Chart from "./chart";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        {data.map((item) => (
          <SummaryData item={item} />
        ))}
      </div>
      <div className="col-span-4">
        <Chart />
      </div>
    </div>
  );
}
