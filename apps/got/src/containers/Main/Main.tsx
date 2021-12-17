import * as React from "react";
import { Characters } from "../../components/characters/Characters";
import MainLayout from "../../components/layout/MainLayout";
import CharacterDetail from "../../components/characterDetail/CharacterDetail";
import styles from "./Main.module.scss";
import { connect } from "react-redux";
import { getCharacters } from "../../store/actions/characters.actions";

const mapDispatchToProps = { getCharacters };
const mapStateToProps = ({ characters }) => ({ charactersList: characters.characters });

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
        charactersList: [] as any
    };

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
                    <Characters charactersList={this.state.charactersList} columns={columns} />
                </div>
                <div className={styles.right}>
                    <CharacterDetail />
                </div>
            </MainLayout>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
