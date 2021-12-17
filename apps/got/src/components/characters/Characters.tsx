import * as React from "react";
import { Table } from "antd";

export type CharactersProps = { charactersList: any; columns: Record<string, unknown>; baseEventHandler: Function };

export class Characters extends React.Component<CharactersProps> {
    render() {
        const { charactersList, columns, baseEventHandler } = this.props;

        return (
            <div>
                <Table
                    onRow={(record: any) => {
                        return {
                            onClick: event => {
                                event.preventDefault();
                                if (baseEventHandler) {
                                    baseEventHandler(record);
                                }
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
