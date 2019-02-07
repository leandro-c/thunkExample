import initialState from './initialState';
import { FETCH_STUFF, RECEIVE_STUFF, nameSelector } from '../actions/allActions';

export default function stuff(state = initialState.stuff, action) {
  let newState;
  switch (action.type) {
    case FETCH_STUFF:
      //console.log('FETCH_STUFF Action')
      return action;
    case RECEIVE_STUFF:
      newState = {players: action.stuff}
      //console.log('RECEIVE_STUFF Action')
      return newState;
    case nameSelector:
      return {...state, nameFilter: action.nameFilter};
    default:
      return state;
  }
}