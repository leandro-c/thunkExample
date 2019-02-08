import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as stuffActions from './../../actions/stuffActions';
import EdiThable from "./../../components/abstracTable/ediThable";
import SelectFilter from "./../../components/SelectFilter";
import InputFilter from './../../components/InputFilter'
import nameSelector from '../../selectors/players'

const positions = [
    { value: 'Attacking Midfield', label: 'Attacking Midfield' },
    { value: 'Central Midfield', label: 'Central Midfield' },
    { value: 'Centre-Back', label: 'Centre-Back' },
    { value: 'Centre-Forward', label: 'Centre-Forward' },
    { value: 'Centre-Forward', label: 'Centre-Forward' },
    { value: 'Defensive Midfield', label: 'Defensive Midfield' },
    { value: 'Keeper', label: 'Keeper' },
    { value: 'Left Midfield', label: 'Left Midfield' },
    { value: 'Left Wing', label: 'Left Wing' },
    { value: 'Left-Back', label: 'Left-Back' },
    { value: 'Right-Back', label: 'Right-Back' }
]

class Players extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                displayName: "Player",
                name: "name",
                type: "name",
                editable: false
            },
            {
                displayName: "Position",
                name: "position",
                type: "position",
                editable: false
            },
            {
                displayName: "Age",
                name: "dateOfBirth",
                type: "date",
                editable: false
            }
        ];
    }
    state = { filterPosition: null, filterName: null }

    componentWillMount() {
        this.props.stuffActions.fetchStuff();
    }

    handleNameFilter = (e) => {
        this.setState({ filterName: e.target.value })
        this.props.stuffActions.setNameFilter(e.target.value);
    }

    handlePositionSelect = (e) => {
        this.setState({ filterPosition: e.target.value })
        this.props.stuffActions.setPositionFilter(e.target.value);
    }

    render() {
        const { filterPosition, filterName } = this.state
        const { nameFilter, positionFilter } = this.props

        if (!this.props.players) {
            return (
                <div>
                    Loading Stuff...
                </div>
            )
        } else {
            return (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', maxWidth: 1200, margin: '0 auto' }}>
                    <div style={{ display: 'flex'}}>
                        <SelectFilter
                            id="positions"
                            label="Positions"
                            values={positions}
                            onChange={e => this.handlePositionSelect(e)}
                            onBlur={e => this.handlePositionSelect(e)}
                            value={filterPosition}
                        />

                        <InputFilter
                            nameValue={nameFilter}
                            labelValue={'Name Player'}
                            placeholderValue={'filter by name...'}
                            onChange={e => this.handleNameFilter(e)}
                            onBlur={e => this.handleNameFilter(e)}
                            value={positionFilter}
                        />
                    </div>
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



export const mapStateToProps = (state) => ({
    players: nameSelector(state),
    nameFilter: state.nameFilter,//checkear esto 
    positionFilter: state.positionFilter,//checkear esto 
});

function mapDispatchToProps(dispatch) {
    return {
        stuffActions: bindActionCreators(stuffActions, dispatch)
    };
}

export default connect(
    mapStateToProps,//makeMapStateToProps,
    mapDispatchToProps
)(Players);
