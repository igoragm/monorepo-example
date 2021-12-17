import * as React from "react";
import { Table } from "antd";

export type CharactersProps = { charactersList: any; columns: Record<string, unknown> };

export class Characters extends React.Component<CharactersProps> {
    render() {
        const { charactersList, columns } = this.props;

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
                    dataSource={charactersList}
                />
            </div>
        );
    }
}
