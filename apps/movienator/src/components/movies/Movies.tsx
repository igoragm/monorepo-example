import * as React from "react";
import { connect } from "react-redux";
import { getMovies } from "../../store/actions/movies.actions";
import { Table } from "antd";

const mapDispatchToProps = { getMovies };
const mapStateToProps = ({ movies }) => ({ moviesList: movies.movies });

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

class Movies extends React.Component<any, any> {
    state = {
        moviesList: [] as any
    };

    async componentDidMount() {
        await this.props.getMovies();
        const { moviesList } = this.props;
        const data = moviesList.data.map(character => {
            return {
                key: character.id,
                family: character.family,
                fullName: character.fullName,
                title: character.title
            };
        });
        this.setState({ moviesList: data });
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
                    dataSource={this.state.moviesList}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
