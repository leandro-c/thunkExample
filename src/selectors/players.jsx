import { createSelector } from 'reselect'

export const positionSelector = createSelector(
    [
        (state, _) => { return state.stuff.players },
        (state, _) => { return state.stuff.positionFilter }
    ],
    (players, positionFilter) => players.filter(s => positionFilter ? new RegExp(`.*${positionFilter}.*`,'i').test(s.position): players)  
)

const nameSelector = createSelector(
    [positionSelector,
        (state, _) => state.stuff.nameFilter    ],
    (players, nameFilter) => players.filter(s => nameFilter ? new RegExp(`.*${nameFilter}.*`,'i').test(s.name): players)
)

const ageSelector = createSelector(
    [positionSelector,
        (state, _) => state.stuff.ageFilter    ],
    (players, ageFilter) => players.filter(s => ageFilter ? new RegExp(`.*${ageFilter}.*`,'i').test(s.dateOfBirth): players)
)

export default nameSelector