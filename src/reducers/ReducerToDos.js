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
    default:
      return state
  }
}
