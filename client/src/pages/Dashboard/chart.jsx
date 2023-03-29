import styles from "../../styles/Dashboard/dashboard-chart.module.scss";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  registerables,
} from "chart.js";

import { Doughnut, Bar } from "react-chartjs-2";

export default function Chart() {
  const root = document.documentElement;
  const style = getComputedStyle(root);

  const data = {
    labels: ["Positive", "Negative"],
    datasets: [
      {
        data: [3700, 1000],
        backgroundColor: [
          style.getPropertyValue("--color-blue"),
          style.getPropertyValue("--color-orange"),
        ],
        hoverBackgroundColor: [
          style.getPropertyValue("--color-blue"),
          style.getPropertyValue("--color-orange"),
        ],
      },
    ],
  };

  const options = {
    cutout: "70%",
    borderWidth: 0,

    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "white",
          font: {
            family: "Montserrat",
            size: 12.3,
          },
          usePointStyle: true,
          padding: 41.5,
        },
      },
    },
  };

  const plugins = [
    {
      beforeDatasetsDraw(chart) {
        const { ctx } = chart;

        ctx.save();
        ctx.font = "bold 2.5rem Montserrat";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(
          "1700/2000",
          chart.getDatasetMeta(0).data[0].x,
          chart.getDatasetMeta(0).data[0].y
        );
      },
    },
  ];

  const female = [90, 450, 1500, 130, 240, 500, 670];
  const femaleData = [];
  female.forEach((e) => femaleData.push(e * -1));

  const chartData = {
    labels: ["65+", "56-65", "46-55", "36-45", "26-35", "13-25", "0-12"],
    datasets: [
      {
        label: "Male",
        backgroundColor: style.getPropertyValue("--color-blue"),
        data: [100, 300, 1000, 1300, 500, 500, 300],
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Female",
        backgroundColor: style.getPropertyValue("--color-orange"),
        data: femaleData,
        borderWidth: 1,
        borderColor: "black",
      },
    ],
  };

  const chartOptions = {
    indexAxis: "y",
    aspectRatio: 19 / 20,
    scales: {
      x: {
        stacked: true,
        ticks: {
          callback: function (value, index, values) {
            return Math.abs(value);
          },
        },
      },
      y: {
        beginAtZero: true,
        stacked: true,
      },
    },

    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "white",
          font: {
            family: "Montserrat",
            size: 12.3,
          },
          usePointStyle: true,
          padding: 41.5,
        },
      },
    },
  };

  ChartJS.register(ArcElement, Tooltip, Legend, ...registerables);

  return (
    <div className="flex gap-14">
      <div className={styles.container}>
        <div className={styles.title}>Positive Case</div>
        <div className={styles["chart-area"]}>
          <div className={styles["main-chart-donut"]}>
            <Doughnut data={data} options={options} plugins={plugins} />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.title}>Population Distributed</div>
        <div className={styles["chart-area"]}>
          <div className={styles["main-chart-pyramid"]}>
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
