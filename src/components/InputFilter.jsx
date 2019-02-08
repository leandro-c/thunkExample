import React from "react";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";

const styles = () => ({
    textField: {
        margin: 0,
        width: "100%",
        fontSize: 12,
        color: "gray"
    }
});

const InputFilter = ({
    idValue,
    labelValue,
    nameValue,
    onChange,
    onBlur,
    valued,
    placeholderValue,
    inputProps
}) => (
        <div
            
            style={{ padding: "10px" }}
        >
            <TextField
                id={idValue}
                autoComplete="off"
                label={labelValue}
                name={nameValue}
                onChange={onChange}
                onBlur={onBlur}
                value={valued}
                placeholder={placeholderValue}
            />
        </div>
    );

InputFilter.defaultProps = {
    idValue: "1",
    nameValue: "",
    dataDecidir: null,
    onChange: () => { },
    onBlur: () => { },
    placeholderValue: "placeHolder",
    valued: null,
    inputProps: {}
};

InputFilter.propTypes = {
    idValue: PropTypes.string,
    labelValue: PropTypes.string.isRequired,
    dataDecidir: PropTypes.string,
    nameValue: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    valued: PropTypes.string,
    placeholderValue: PropTypes.string,
    inputProps: PropTypes.object
};

export default withStyles(styles)(InputFilter);
