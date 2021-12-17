import * as React from "react";
import { Characters } from "../../components/characters/Characters";
import MainLayout from "../../components/layout/MainLayout";
import CharacterDetail from "../../components/characterDetail/CharacterDetail";
import styles from "./Main.module.scss";
import { connect } from "react-redux";
import { getCharacters, getCharacterDetails } from "../../store/actions/characters.actions";

const mapDispatchToProps = { getCharacters, getCharacterDetails };
const mapStateToProps = ({ characters, characterDetails }) => ({ charactersList: characters, characterDetails });

const columns = [
    {
        title: "Family",
        dataIndex: "family",
        sorter: (a, b) => a.family.length - b.family.length
    },
    {
        title: "Name",
        dataIndex: "fullName",
        sorter: (a, b) => a.fullName.length - b.fullName.length
    },
    {
        title: "Title",
        dataIndex: "title",
        sorter: (a, b) => a.title.length - b.title.length
    }
];

class Main extends React.Component<any, any> {
    state = {
        charactersList: [] as any,
        characterDetails: undefined,
        selectedCharacter: ""
    };

    async rowClick(record: any) {
        if (record.key === this.state.selectedCharacter) {
            return;
        }
        await this.props.getCharacterDetails(record.key);
        const { characterDetails } = this.props;
        this.setState({ characterDetails: characterDetails.data, selectedCharacter: record.key });
    }

    async componentDidMount() {
        await this.props.getCharacters();
        const { charactersList } = this.props;
        const data = charactersList.data.map(character => {
            return {
                key: character.id,
                family: character.family,
                fullName: character.fullName,
                title: character.title
            };
        });
        this.setState({ charactersList: data });
    }

    render() {
        return (
            <MainLayout>
                <div className={styles.left}>
                    <Characters
                        charactersList={this.state.charactersList}
                        columns={columns}
                        baseEventHandler={this.rowClick.bind(this)}
                    />
                </div>
                <div className={styles.right}>
                    <CharacterDetail characterDetails={this.state.characterDetails} />
                </div>
            </MainLayout>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
