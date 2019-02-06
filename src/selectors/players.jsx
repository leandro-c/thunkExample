import { createSelector } from 'reselect'

export const makeGetPlayerByName = (state) => {
    return createSelector(
        [
            (state) => {console.log('selector',state), state.stuff},
            (_, { name }) => name
        ],
        (players, playerName) => {
            return players[playerName];
        });
};
export const getSelectedSort = (state) => {
    return state.stuff.sort;
}
