import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as stuffActions from '../actions/stuffActions';
import PropTypes from 'prop-types';
import React from 'react';

class stuffList extends React.Component {
    componentWillMount() {
        this.props.stuffActions.fetchStuff();
    }

    renderData(item) {
        return <div key={item.jerseyNumber}>{item.name}</div>;
    }

    render() {
        if(!this.props.stuff){
            return (
                <div>
                    Loading Stuff...
                </div>
            )
        }else{
            return (
                <div className="">
                    {
                        this.props.stuff.map((item, index) => {
                            return (
                                //this.renderData(item)
                                <pre>{JSON.stringify(item,1,null)}</pre>
                            );
                        })
                    }
                </div>
            )
        }
    }
}

stuffList.propTypes = {
    stuffActions: PropTypes.object,
    stuff: PropTypes.array
};

function mapStateToProps(state) {
    return {
        stuff: state.stuff
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
)(stuffList);