import * as React from "react";
import Characters from "../../components/characters/Characters";
import MainLayout from "../../components/layout/MainLayout";
import CharacterDetail from "../../components/characterDetail/CharacterDetail";
import styles from "./Main.module.scss";

export default function Main() {
    return (
        <MainLayout>
            <div className={styles.left}>
                <Characters />
            </div>
            <div className={styles.right}>
                <CharacterDetail />
            </div>
        </MainLayout>
    );
}
