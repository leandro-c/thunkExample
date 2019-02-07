import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import PropTypes from 'prop-types'
import InputLabel from '@material-ui/core/InputLabel'
import { withStyles } from '@material-ui/core/styles'

const SelectFilter = ({ classes, error, label, values, idValue, placeHolder, id, ...props }) => (
    <div className="card-form padding10">


        <InputLabel />
        <Select
            style={{height: 58}}
            {...props}
            inputProps={{
                name: id,
                id
            }}
            displayEmpty={Boolean(label)}
        >
            {label && (
                <MenuItem value={null} style={{ color: 'rgba(0,0,0,0.54)' }}>
                    {label}
                </MenuItem>
            )}
            {values.map(item => (
                <MenuItem value={item.value}>{item.label}</MenuItem>
            ))}
        </Select>



    </div>
)

SelectFilter.defaultProps = {
    label: '',
    values: [
        {
            title: 'Valor',
            value: 10
        }
    ]
}
SelectFilter.propTypes = {
    label: PropTypes.string,
    values: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            value: PropTypes.any.isRequired
        })
    ),
    error: PropTypes.bool.isRequired
}

export default withStyles(() => ({
    formControl: {
        width: '100%'
    }
}))(SelectFilter)
