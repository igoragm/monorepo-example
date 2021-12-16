import * as React from "react";
import { connect } from "react-redux";
import { getMovies } from "../../store/actions/movies.actions";
import { Table } from "antd";

const mapDispatchToProps = { getMovies };
const mapStateToProps = ({ movies }) => ({ moviesList: movies.movies });

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        filters: [
            {
                text: "Joe",
                value: "Joe"
            },
            {
                text: "Jim",
                value: "Jim"
            },
            {
                text: "Submenu",
                value: "Submenu",
                children: [
                    {
                        text: "Green",
                        value: "Green"
                    },
                    {
                        text: "Black",
                        value: "Black"
                    }
                ]
            }
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ["descend"]
    },
    {
        title: "Age",
        dataIndex: "age",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.age - b.age
    },
    {
        title: "Address",
        dataIndex: "address",
        filters: [
            {
                text: "London",
                value: "London"
            },
            {
                text: "New York",
                value: "New York"
            }
        ],
        onFilter: (value, record) => record.address.indexOf(value) === 0
    }
];

const data = [
    {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park"
    },
    {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park"
    },
    {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park"
    },
    {
        key: "4",
        name: "Jim Red",
        age: 32,
        address: "London No. 2 Lake Park"
    }
];

class Movies extends React.Component<any, any> {
    state = {
        moviesList: [] as any
    };

    onChange(pagination, filters, sorter, extra) {
        console.log("params", pagination, filters, sorter, extra);
    }

    async componentDidMount() {
        await this.props.getMovies();
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <Table columns={columns} dataSource={data} onChange={this.onChange} />
                <div>movies table</div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
