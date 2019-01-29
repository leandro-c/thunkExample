import configureStore from 'redux-mock-store';

// Actions to be tested
import * as stuffActions from '../../src/actions/stuffActions';

const mockStore = configureStore();
const store = mockStore();

describe('selectPlayer', () => {
    test('Dispatches the correct action and payload', () => {
        const expectedActions = [
            {
                'payload': 1,
                'type': 'RECEIVE_STUFF',
            },
        ];

        store.dispatch(stuffActions.receiveStuff(1));
        expect(store.getActions()).toEqual(expectedActions);
    });
});