import { createSelector } from 'reselect'

const positionSelector = createSelector(
    [
        (state, _) => { return state.stuff.players },
        (state, _) => { return state.stuff.positionFilter }
    ],
    (players, positionFilter) => players //players.filter(s => s.position === positionFilter)
)

const nameSelector = createSelector(
    [positionSelector,
        (state, _) => state.stuff.nameFilter    ],
    (players, nameFilter) => players.filter(s => nameFilter ? new RegExp(`.*${nameFilter}.*`,'i').test(s.name): players)  
)

export default nameSelector
/* 
export const getPlayersSorted = createSelector(
    [
        (state, _) => { return state.stuff },
        (state, _) => { return state.termNameFilter },
        (state, _) => { return state.positionFilter },
        (state, _) => { return state.ageFilter }
    ],
    (players, termNameFilter, positionFilter,ageFilter) => {
        switch (sortMethod) {
            case 'age':
                return players.sort((a, b) => {
                    return a.dateOfBirth - b.dateOfBirth;
                })
            case 'position':
            console.log('Selector state from component',players)
                return players.filter((a, position) => {
                    return a.position === position;
                })
            case 'name': {
                return players.sort((a, b) => {
                    return a.name.localCompare(b.name);
                })
            }
            default:
                return players;
        }
    }
);
 */