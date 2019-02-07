import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as stuffActions from './../../actions/stuffActions';
import EdiThable from "./../../components/abstracTable/ediThable";
import SelectFilter from "./../../components/SelectFilter";
import InputFilter from './../../components/InputFilter'
import { getPlayersSorted } from '../../selectors/players'

const position = [
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
    state = { filterPosition: null, filterName:null}

    componentWillMount() {
        this.props.stuffActions.fetchStuff();
    }
    
    handleNameFilter =(e)=>{
        console.log('handleNameFilter',e)
        this.setState({ filterName: e.target.value })
    }
    
    handlePositionSelect =(e)=>{
        console.log('handlePositionSelect',e)
        this.setState({ filterPosition: e.target.value })
    }

    render() {
        const { filterPosition, filterName } = this.state
        console.log('state', this.state, 'props', this.props)
        if (!this.props.players) {
            return (
                <div>
                    Loading Stuff...
                </div>
            )
        } else {
            return (
                <div >
                    <React.Fragment>
                        <SelectFilter
                            id="positions"
                            label="Positions"
                            values={position}
                            onChange={e => this.handlePositionSelect(e)}
                            onBlur={e => this.handlePositionSelect(e)}
                            value={filterPosition}
                        />
                    </React.Fragment>
                    <React.Fragment>
                        <InputFilter
                            nameValue={filterName}
                            labelValue={'Name Player'}
                            placeholderValue={'filter by name...'}
                            onChange={e => this.handleNameFilter(e)}
                            onBlur={e => this.handleNameFilter(e)}
                        />
                    </React.Fragment>
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

/* const makeMapStateToProps = () => {
    const getPlayerByName = makeGetPlayerByName();
    const mapStateToProps = (state, props) => {
        return {
            players: getPlayerByName(state, props)
        }
    };
    return mapStateToProps
}; */

export const mapStateToProps = (state) => ({
    players: getPlayersSorted(state)
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
