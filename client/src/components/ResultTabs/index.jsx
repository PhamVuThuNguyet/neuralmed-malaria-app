import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from "../../styles/ResultTabs/result-tabs.module.scss";

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
                    {/* TODO: replace with value */}
                    <p>
                        <span className={styles["span-green"]}>Rate the AI's suggestion for this scan</span>
                    </p>
                    <div className={["flex", "mt-5", "justify-between", styles["btn-cont"]].join(" ")}>
                        <button className='shadow-xl'>
                            Good
                        </button>
                        <button className='shadow-xl'>
                            Not good
                        </button>
                        <button className='shadow-xl'>
                            Feedback
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