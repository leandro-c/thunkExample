import React, { createContext } from "react";
//import { Input } from "../shared/inputs";
import { Input} from "material-ui"
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button';
//import AddIcon from 'material-ui/icons/Add';
//import Icon from 'material-ui/Icon';
//import DeleteIcon from '@material-ui/icons/Delete';
//import IconButton from 'material-ui/IconButton';
//import {FaCheck} from 'react-icons/lib/fa'
import {TiPencil} from 'react-icons'
import {TiTrash} from 'react-icons'


export const TableContext = createContext();
const Row = ({ row }) => (
    <TableContext.Consumer>
        {({ columns }) =>
        columns.map((field, i) => <TableCell key={i}>{row[field.name]}</TableCell>)
        }
    </TableContext.Consumer>
    );

const EditRow = ({row}) => {
    return <TableContext.Consumer>
        {({ columns, updateRow, getRow, update , deleteR}) =>
            columns.map((field, i) => {
            //console.log("row ", row)
            return (
            <TableCell key={i}>
                {field.editable ? (
                    <div>
                        <nobr>
                             
                            <Input type={field.type}
                                value={row[field.name]}
                                onChange={e => updateRow(row.id, field.name, e.target.value)}
                            />
                            <Button style={{heig:20,width:20,fontSize:18}} onClick={e => update(getRow(row.id))} aria-label="add">
                                <TiPencil/>
                            </Button >
                            <Button style={{heig:20,width:20,fontSize:18}} onClick={e => deleteR(getRow(row.id))} aria-label="delete">
                                <TiTrash/>
                            </Button >
                        </nobr>
                    </div>
                ) : (
                row[field.name]
                )}
            </TableCell>
            )
            })
        }
    </TableContext.Consumer>
}
;

export const Body = (props) => (
    <TableContext.Consumer>
        {({ columns, data, activeRow, selectRow }) =>
            {
        return (<TableBody>
            {data.map((row, i) => (
            <TableRow key={row.id} onClick={() => selectRow(row.id)}>
                {activeRow === row.id ? <EditRow row={row} /> : <Row row={row} />}
            </TableRow>
            ))}
        </TableBody>)
        }}
    </TableContext.Consumer>
);

export const Header = () => (
    <TableContext.Consumer>
        {({ columns}) => (
        <TableHead>
            <TableRow >{columns.map((field, i) => <TableCell key={i}>{field.displayName}</TableCell>)}</TableRow>
        </TableHead>
        )}
    </TableContext.Consumer>
    );

export const Abstractable = ({ children }) => <Paper><Table>{children}</Table></Paper>;