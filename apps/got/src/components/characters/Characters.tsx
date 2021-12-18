import * as React from "react";
import { Table, Input, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

export type CharactersProps = {
    charactersList: any;
    columns: Object[];
    baseEventHandler: Function;
    isLoading: boolean;
};

export class Characters extends React.Component<CharactersProps> {
    state = {
        searchText: "",
        searchedColumn: ""
    };

    getColumnSearchProps = (dataIndex: string) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={(node: any) => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e: { target: { value: any } }) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: "block" }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            this.setState({
                                searchText: selectedKeys[0],
                                searchedColumn: dataIndex
                            });
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: any) => <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />,
        onFilter: (value: string, record: { [x: string]: { toString: () => string } }) =>
            record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : "",
        onFilterDropdownVisibleChange: (visible: any) => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: (text: { toString: () => any }) =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            )
    });

    handleSearch = (selectedKeys: any[], confirm: () => void, dataIndex: string) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex
        });
    };

    handleReset = (clearFilters: () => void) => {
        clearFilters();
        this.setState({ searchText: "" });
    };

    render() {
        let { charactersList, columns, baseEventHandler, isLoading } = this.props;

        columns = columns.map((col: { dataIndex: string }) => {
            return {
                ...col,
                ...this.getColumnSearchProps(col.dataIndex)
            };
        });
        return (
            <div>
                <Table
                    onRow={(record: any) => {
                        return {
                            onClick: (event: { preventDefault: () => void }) => {
                                event.preventDefault();
                                if (baseEventHandler) {
                                    baseEventHandler(record);
                                }
                            }
                        };
                    }}
                    columns={columns}
                    dataSource={charactersList}
                    loading={isLoading}
                />
            </div>
        );
    }
}
