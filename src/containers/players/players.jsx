import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as stuffActions from './../../actions/stuffActions';
import EdiThable from "./../../components/abstracTable/ediThable";
//import default from "material-ui/Card/CardContent";


class Players extends Component {
    constructor(props) {
        super(props);
        this.activeRow = 1;
        this.columns = [
        {
            displayName: "Player",
            name: "name",
            type:"name",
            editable: false
        },
        {
            displayName: "Position",
            name: "position",
            type:"position",
            editable: false
        },
        {
            displayName: "Age",
            name: "dateOfBirth",
            type:"date",
            editable: false
        }
        ];
    }
    
    componentWillMount() {
        this.props.stuffActions.fetchStuff();
    }

    render() {
        console.log('props container',this.props.players)
        if (!this.props.players) {
            return (
                <div>
                    Loading Stuff...
                </div>
            )
        } else {
            return (
                <div >
                    <EdiThable
                        columns={this.columns}
                        data={this.props.players}
                    />
                </div>
            )
        }
    }
}

Players.propTypes = {
    stuffActions: PropTypes.object,
    stuff: PropTypes.array
};

function mapStateToProps(state) {
    return {
        players: state.stuff
    };
}

function mapDispatchToProps(dispatch) {
    return {
        stuffActions: bindActionCreators(stuffActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Players);
