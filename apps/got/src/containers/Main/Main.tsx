import * as React from "react";
import { connect } from "react-redux";
import { Layout } from "antd";

import ICharacter from "@monorepo/utils/src/types/ICharacter";
import { getCharacters, getCharacterDetails } from "../../store/actions/characters.actions";
import { Characters } from "../../components/characters/Characters";
import CharacterDetail from "../../components/characterDetail/CharacterDetail";
import styles from "./Main.module.scss";

const mapDispatchToProps = { getCharacters, getCharacterDetails };
const mapStateToProps = ({ characters, characterDetails }) => ({ charactersList: characters, characterDetails });

const { Sider, Content } = Layout;

const columns = [
    {
        title: "Family",
        dataIndex: "family",
        sorter: (a: { family: string }, b: { family: string }) => a.family.localeCompare(b.family),
        sortDirections: ["descend", "ascend"]
    },
    {
        title: "Name",
        dataIndex: "fullName",
        sorter: (a: { fullName: string }, b: { fullName: string }) => a.fullName.localeCompare(b.fullName),
        sortDirections: ["descend", "ascend"]
    },
    {
        title: "Title",
        dataIndex: "title",
        sorter: (a: { title: string }, b: { title: string }) => a.title.localeCompare(b.title),
        sortDirections: ["descend", "ascend"]
    }
];
class Main extends React.Component {
    state = {
        charactersList: [],
        characterDetails: undefined,
        selectedCharacter: ""
    };

    async rowClick(record: { key: string }) {
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
        const data = charactersList.data.map((character: ICharacter) => {
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
            <Layout>
                <Sider className={styles.sidebar}>
                    Character details
                    <CharacterDetail
                        characterDetails={this.state.characterDetails}
                        isLoading={this.props.characterDetails.isFetching}
                    />
                </Sider>
                <Layout>
                    <Content>
                        <Characters
                            charactersList={this.state.charactersList}
                            columns={columns}
                            baseEventHandler={this.rowClick.bind(this)}
                            isLoading={this.props.charactersList.isFetching}
                        />
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
