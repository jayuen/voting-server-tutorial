import { setEntries, vote, next, INITIAL_STATE } from './core'; 
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_ENTRIES':
      return setEntries(state, action.entries);
    case 'NEXT':
      return next(state);  
    case 'VOTE':
      // It's hard to see the whole state of things if the reducer is pick
      // parts of the state to pass around. Tests only reveal a partial view
      // of the world and the implementation only deals with the same partial
      // view
      return state.update('vote', voteState => vote(voteState, action.entry));
    default:
      return state;
  }
}
