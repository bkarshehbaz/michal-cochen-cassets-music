export default function (state, action) {
  switch (action.type) {
    case 'secondNameMusic':
      return {
        ...state,
        music: action.payload,
      }
    case 'year':
      return {
        ...state,
        year: action.payload,
      }
    default:
      return state
  }
}
