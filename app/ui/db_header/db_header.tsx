import styles from "./db_header.module.css";
import { getCurrentTimeAMPM } from "@/app/lib";
import Image from "next/image";

export default function DB_Header() {
    const d = new Date();
    const date = d.getDate();
    const month = d.toLocaleDateString('default', { month: 'long' })
    const year = d.getFullYear();

    return (<div className={styles.db_header}>
        <div className={styles.db_icon} >
            <Image
                src={`/favicon.png`}
                alt="LOGO"
                width={40}
                height={40}
                // Fills the parent container while maintaining aspect ratio
                // layout="fill"
            />
        </div>
        <h1 className={styles.db_title} >Employee Activity Dashboard</h1>
        <div className={styles.db_timestamp} >
            <div className={styles.ts_date}>{`${month} ${date}, ${year}`}</div>
            <div className={styles.ts_time}>{getCurrentTimeAMPM()}</div>
        </div>
    </div>)
}