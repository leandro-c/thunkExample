import * as allActions from './allActions';

export function receiveStuff(data) {
    return {type: allActions.RECEIVE_STUFF, stuff: data};
}

export function fetchStuff() {
    return (dispatch) => {
        fetch('https://football-players-b31f2.firebaseio.com/players.json?print=pretty')
            .then(response =>
                response.json().then(data => ({
                    data: data,
                    status: response.status
                }))
            )
            .then(response => {
                if(response.status === 200){
                    dispatch(receiveStuff(response.data))
                }else{
                    var flash = {
                        type: 'error',
                        title: 'Error getting football-players list',
                        content: 'There was an error getting the football-players list. Please try again.'
                    }
                    dispatch({type: "DISPLAY_FLASH", data: flash})
                }
            });
    };
}

export function setNameFilter(data) {
    return {type: allActions.NAME_SELECTOR, nameFilter: data};
}

export function setAgeFilter(data) {
    return {type: allActions.AGE_SELECTOR, ageFilter: data};
}

export function setPositionFilter(data) {
    return {type: allActions.POSITION_SELECTOR, positionFilter: data};
}