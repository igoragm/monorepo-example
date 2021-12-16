import * as React from "react";
import Movies from "../../components/movies/Movies";
import MainLayout from "../../components/layout/MainLayout";
import MovieDetail from "../../components/movieDetail/MovieDetail";
import styles from "./Main.module.scss";

export default function Main() {
    return (
        <MainLayout>
            <div className={styles.left}>
                <Movies />
            </div>
            <div className={styles.right}>
                <MovieDetail />
            </div>
        </MainLayout>
    );
}
