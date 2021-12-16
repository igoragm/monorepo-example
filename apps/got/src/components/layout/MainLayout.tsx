import React from "react";
import styles from "./MainLayout.module.scss";

export default function MainLayout(props) {
    const { children } = props;

    return (
        <div className={styles.container}>
            <div className={styles.layoutMain}>
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
}
