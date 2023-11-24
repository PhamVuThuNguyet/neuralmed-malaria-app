import styles from "../../../styles/Dashboard/dashboard-chart.module.scss";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  registerables,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

import { Doughnut, Bar } from "react-chartjs-2";

export default function Chart() {
  const root = document.documentElement;
  const style = getComputedStyle(root);

  const donutData = {
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

  const donutOptions = {
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

  const donutPlugins = [
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

  const pyramidData = {
    labels: [
      "85+",
      "80-84",
      "75-79",
      "70-74",
      "65-69",
      "60-64",
      "55-59",
      "50-54",
      "45-49",
      "40-44",
      "35-39",
      "30-34",
      "25-29",
      "20-24",
      "15-19",
      "10-14",
      "5-9",
      "0-4",
    ],
    datasets: [
      {
        label: "Male",
        backgroundColor: style.getPropertyValue("--color-blue"),
        data: [
          28, 58, 99, 142, 176, 208, 234, 239, 219, 197, 190, 186, 198, 187,
          159, 118, 82, 38,
        ],
        borderColor: "black",
        borderWidth: 1,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },

      {
        label: "Female",
        backgroundColor: style.getPropertyValue("--color-orange"),
        data: [
          -12, -34, -67, -86, -100, -123, -143, -162, -177, -181, -173, -168,
          -172, -170, -155, -128, -100, -68,
        ],
        borderWidth: 1,
        borderColor: "black",
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },
    ],
  };

  const pyramidOptions = {
    indexAxis: "y",
    aspectRatio: 19 / 20,
    gapWidth: 10,
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        ticks: {
          callback: function (value) {
            return Math.abs(this.getLabelForValue(value));
          },
          beginAtZero: true,
        },
        stacked: true,
        title: {
          display: true,
          text: "Amount",
          color: "white",
          font: {
            family: "Montserrat",
            size: 12,
          },
          align: "end",
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: "Age",
          color: "white",
          font: {
            family: "Montserrat",
            size: 12,
          },
          align: "end",
          padding: 10,
        },
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

  const mixedData = {
    datasets: [
      {
        type: "bar",
        label: "Male",
        data: [100, 200, 600, 300, 100, 200, 600, 300, 100, 200, 600, 300],
        backgroundColor: style.getPropertyValue("--color-blue"),
      },
      {
        type: "bar",
        label: "Female",
        data: [200, 100, 350, 100, 200, 100, 350, 100, 200, 100, 350, 100],
        backgroundColor: style.getPropertyValue("--color-orange"),
      },
      {
        type: "line",
        label: "Total",
        data: [300, 300, 950, 400, 300, 300, 950, 400, 300, 300, 950, 400],
        borderColor: "white",
        borderWidth: 2,
        fill: false,
      },
    ],
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  };

  const mixedOptions = {
    scales: {
      y: {
        beginAtZero: true,
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

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    ArcElement,
    Tooltip,
    Legend,
    ...registerables
  );

  return (
    <>
      <div className="flex gap-14">
        <div className={styles.container}>
          <div className={styles.title}>Positive Case</div>
          <div className={styles["chart-area"]}>
            <div className={styles["main-chart-donut"]}>
              <Doughnut
                data={donutData}
                options={donutOptions}
                plugins={donutPlugins}
              />
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.title}>Population Distributed</div>
          <div className={styles["chart-area"]}>
            <div className={styles["main-chart-pyramid"]}>
              <Bar data={pyramidData} options={pyramidOptions} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles["big-container"]}>
          <div className={styles.title}>Patients per month</div>
          <div className={styles["chart-area"]}>
            <div className={styles["main-chart-mixed"]}>
              <Bar data={mixedData} options={mixedOptions} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}