import initialState from './initialState';
import { FETCH_STUFF, RECEIVE_STUFF, NAME_SELECTOR, AGE_SELECTOR, POSITION_SELECTOR} from '../actions/allActions';

export default function stuff(state = initialState.stuff, action) {
  let newState;
  switch (action.type) {
    case FETCH_STUFF:
      //console.log('FETCH_STUFF Action')
      return action;
    case RECEIVE_STUFF:
      newState = { players: action.stuff }
      //console.log('RECEIVE_STUFF Action')
      return newState;
    case NAME_SELECTOR:
      return { ...state, nameFilter: action.nameFilter };
    case AGE_SELECTOR:
      return { ...state, ageFilter: action.ageFilter };
    case POSITION_SELECTOR:
      return { ...state, positionFilter: action.positionFilter };
    default:
      return state;
  }
}