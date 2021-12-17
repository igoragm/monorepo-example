import * as React from "react";
import styles from "./CharacterDetail.module.scss";
import ICharacter from "@monorepo/utils/src/types/ICharacter";

export type CharactersProps = { characterDetails: ICharacter };

export default class CharacterDetail extends React.Component<CharactersProps> {
    render() {
        const { characterDetails } = this.props;
        return (
            <div>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>Character info</h2>
                </div>
                {characterDetails ? (
                    <div className={styles.charImgContainer}>
                        <img alt="" className={styles.charImg} src={characterDetails.imageUrl} />
                        <p className={styles.imgTextDesc}>
                            {characterDetails.title}: {characterDetails.fullName} of {characterDetails.family}
                        </p>
                        <div>
                            <p className={styles.quoteText}>"{characterDetails.quote}"</p>
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
