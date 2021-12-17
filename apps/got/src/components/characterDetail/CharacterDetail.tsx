import * as React from "react";

export type CharactersProps = { characterDetails: any };

export default class CharacterDetail extends React.Component<CharactersProps, any> {
    render() {
        const { characterDetails } = this.props;
        return (
            <div>
                <h2>Character info</h2>
                {characterDetails ? (
                    <div>
                        <img alt="" src={characterDetails.imageUrl} />
                        <p>
                            {characterDetails.title}: {characterDetails.fullName} of {characterDetails.family}
                        </p>
                        <div>
                            <p>"{characterDetails.quote}"</p>
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
