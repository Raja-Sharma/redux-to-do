let todos = [
  "go to bank",
  "get gas",
  "pick up dry cleaning",
  "candy run"
]

export default function(state=todos, action) {
  switch (action.type) {
    case 'ADD':
      return [action.payload].concat(state)
    case 'REMOVE':
      return state.filter((item) => item !== action.payload)
    default:
      return state
  }
}
