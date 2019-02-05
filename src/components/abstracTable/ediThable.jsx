
import React, { Component } from "react";
import { Abstractable, Body, Header, TableContext } from "./contextTable";
import Button from 'material-ui/Button'


export default class EdiThable extends Component {
    constructor(props) {
        super(props);
        this.state = {activeRow: null, data: []
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            activeRow: nextProps.activeRow,
            data: nextProps.data || []
        })
    }

    render() {
        const { columns, update , deleteR } = this.props;
        const {activeRow,  data} = this.state;
        return (
        <TableContext.Provider
            value={{
            data,
            columns,
            activeRow,
            selectRow: id => {this.setState({ activeRow: id })},
            updateRow: (...args) => this.updateRow(...args),
            getRow: (...args) => this.getRow(...args),
            update: update,
            deleteR: deleteR
            }}
        >
            <Abstractable >
            <Header />
            <Body />
            </Abstractable>
            {activeRow && (
                <Button variant="raised" onClick={() => this.setState({ activeRow: null })}>
                    Done
                </Button>
            )}
        </TableContext.Provider>
        );
    }

    updateRow(rowId, field, value) {
        const { data } = this.state;
        const index = data.findIndex(({ id }) => id === rowId);
        //debugger
        data[index][field] = value;
        this.setState({ data });
    }
    getRow(rowId){
        const { data } = this.state;
        const index = data.findIndex(({ id }) => id === rowId);
        return this.state.data[index];
    }
}