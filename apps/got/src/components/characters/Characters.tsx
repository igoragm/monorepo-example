import * as React from "react";
import { connect } from "react-redux";
import { getCharacters } from "../../store/actions/characters.actions";
import { Table } from "antd";

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

class Characters extends React.Component<any, any> {
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
            <div>
                <Table
                    onRow={(record, rowIndex) => {
                        return {
                            onClick: event => {
                                console.log(record);
                                // implement api for
                                // https://thronesapi.com/api/v2/Characters/${record.id}
                                // update character details store (upcoming)
                            }
                        };
                    }}
                    columns={columns}
                    dataSource={this.state.charactersList}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
