import { Add_to_Cart , Remove_to_Cart} from "../constant";

const initialState = {
  cardData: [],
};
export default function cardItems(state=[], action) {
  switch (action.type) {
    case Add_to_Cart:
        console.log('actionnnn',action)
      return [
        ...state,
        {cardData: action.data}
      ]
      case Remove_to_Cart:
        console.log('reducer',action)
        state.pop();
      return [
        ...state,
        // {cardData: action.data}
      ]
    //   break;
      default:
        return state
  }
}

