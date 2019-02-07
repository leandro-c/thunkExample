import { createSelector } from 'reselect'

export const getPlayersSorted = createSelector(
    [
        (state, _) => {return state.stuff},
        (state, _ ) => { return state.stuff.sortMethod }
    ],
    (players, sortMethod) =>{
        switch (sortMethod){
            case 'age':
                return players.sort((a, b)=>{
                    return a.age - b.age;
                })
            case 'name':{
                return players.sort((a, b)=>{
                    return a.name.localCompare(b.name);
            })
            }
            default:
                return players;
        }
    }
);

/* const getVisibleTodos = createSelector(
    [
        (state, _) => {return state.stuff},
        (_, ownProps) => {return ownProps.sortMethod}
    ],
    (visibilityFilter, todos) => {
      switch (visibilityFilter) {
        case 'SHOW_COMPLETED':
          return todos.filter(todo => todo.completed)
        case 'SHOW_ACTIVE':
          return todos.filter(todo => !todo.completed)
        default:
          return todos
      }
    }
  ) */