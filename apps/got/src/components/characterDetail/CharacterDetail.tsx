import * as React from "react";
import { Spin } from "antd";
import styles from "./CharacterDetail.module.scss";
import ICharacter from "@monorepo/utils/src/types/ICharacter";

export type CharactersProps = { characterDetails: ICharacter; isLoading: boolean };

export default class CharacterDetail extends React.Component<CharactersProps> {
    render() {
        const { characterDetails, isLoading } = this.props;
        return (
            <div data-cy="main-character-details">
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>Character info</h2>
                </div>
                {isLoading ? (
                    <Spin className={styles.loadingIndicator} size="large" />
                ) : characterDetails ? (
                    <div className={styles.charImgContainer}>
                        <img
                            data-cy="main-character-img"
                            alt=""
                            className={styles.charImg}
                            src={characterDetails.imageUrl}
                        />
                        <p data-cy="main-character-desc" className={styles.imgTextDesc}>
                            {characterDetails.title}: {characterDetails.fullName} of {characterDetails.family}
                        </p>
                        <div>
                            <p data-cy="main-character-quote" className={styles.quoteText}>
                                "{characterDetails.quote}"
                            </p>
                            <p>
                                - {characterDetails.title}, {characterDetails.fullName}
                            </p>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}
