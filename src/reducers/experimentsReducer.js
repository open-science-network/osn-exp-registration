const initialState = {
  experimentList: []
}

const experimentsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'REQUEST_EXPERIMENTS_SUCCESSFUL':
      return Object.assign({}, state, {
        experimentList: action.payload
      })
    case 'SUCCESSFUL_REGISTRATION':
      return {
        experimentList: [...state.experimentList, action.hash]
      }
    default:
      return state
  }
}

export default experimentsReducer
