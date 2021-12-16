import * as React from "react";
import styles from "./MovieDetail.module.scss";

export default class MovieDetail extends React.Component<any, any> {
    componentDidMount() {
        console.log("MY STYLINGS", styles);
    }
    render() {
        return <div className={styles.test}>movie details</div>;
    }
}
