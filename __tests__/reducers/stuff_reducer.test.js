// Reducer to be tested
import selectReducer from "../../src/reducers/stuffReducer";
import {
    RECEIVE_STUFF // Only ones related to the reducer being tested
} from "../../src/actions/allActions";

describe('INITIAL_STATE', () => {
    test('is correct', () => {
        const action = { type: 'dummy_action' };
        const initialState = { selectedAvatar: 0 };

        expect(selectReducer(undefined, action)).toEqual(initialState);
    });
})