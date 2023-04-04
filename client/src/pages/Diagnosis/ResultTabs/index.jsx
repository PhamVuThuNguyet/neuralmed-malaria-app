import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from "../../../styles/Diagnosis/result-tabs.module.scss";

import { ReactComponent as ThumbUp } from "../../../assets/ThumbUp.svg";
import { ReactComponent as ThumbDown } from "../../../assets/ThumbDown.svg";
import { ReactComponent as Feedback } from "../../../assets/Feedback.svg";

export default function ResultTabs(props) {
    return (
        <Tabs>
            <TabList className={styles["tabs-list"]}>
                <Tab selectedClassName={styles["tab-selected"]}>
                    <span>
                        AI result
                    </span>
                </Tab>
                <Tab selectedClassName={styles["tab-selected"]}>
                    <span>
                        Doctor result
                    </span>
                </Tab>
            </TabList>
            {/* AI */}
            <TabPanel>
                <p className={styles["res-label"]}>
                    Description
                </p>
                <div className={[styles["res-desc"], "mb-5"].join(" ")}>
                    {/* TODO: replace with value */}
                    <p>
                        <span className={styles["span-red"]}>1(s)</span> Infected red blood cell found
                    </p>
                </div>
                <p className={styles["res-label"]}>
                    Conclusion
                </p>
                <div className={[styles["res-desc"], "flex", "justify-between", "max-w-2xl", "mb-10"].join(" ")}>
                    <p>
                        <span className={styles["span-yellow"]}>
                            Risk of infection
                        </span>
                    </p>
                    {/* TODO: replace with value */}
                    <p>
                        <span className={styles["span-yellow"]}>69%</span>
                    </p>
                </div>
                <div className={[styles["res-desc"], "mb-5", "max-w-2xl"].join(" ")}>
                    <p>
                        <span className={styles["span-green"]}>Rate the AI's suggestion for this scan</span>
                    </p>
                    <div className={["flex", "mt-5", "justify-between", styles["btn-cont"]].join(" ")}>
                        <button>
                            <ThumbUp className="inline-block"/> <span>Good</span>
                        </button>
                        <button>
                            <ThumbDown className="inline-block"/> <span>Not good</span>
                        </button>
                        <button>
                            <Feedback className="inline-block"/> <span>Feedback</span>
                        </button>
                    </div>
                </div>
            </TabPanel>
            {/* Doctor */}
            <TabPanel>
            <p className={styles["res-label"]}>
                    Description
                </p>
                <div className={[styles["res-desc"], "mb-5"].join(" ")}>
                    {/* TODO: replace with value */}
                    <p>
                        <span className={styles["span-red"]}>1(s)</span> Infected red blood cell found
                    </p>
                </div>
                <p className={styles["res-label"]}>
                    Conclusion
                </p>
                <div className={[styles["res-desc"], "flex", "justify-between", "max-w-2xl", "mb-10"].join(" ")}>
                    <p>
                        <span className={styles["span-yellow"]}>
                            Risk of infection
                        </span>
                    </p>
                    {/* TODO: replace with value */}
                    <p>
                        <span className={styles["span-yellow"]}>69%</span>
                    </p>
                </div>
            </TabPanel>
        </Tabs>
    )
}