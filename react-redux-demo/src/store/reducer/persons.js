import { randomName } from "../../containers/randomNames/randomName";

const initialState = {
  persons: [
    { id: 12121, name: "Shahid", age: 23 },
    { id: 1234331, name: "Luffy", age: 18 },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      const newPerson = {
        id: Math.floor(Math.random() * Math.floor(100000)),
        name: randomName[Math.floor(Math.random() * Math.floor(4946))],
        age: Math.floor(Math.random() * Math.floor(100)),
      };
      return {
          ...state,
        persons: state.persons.concat(newPerson),
      };

    case "DELETE_PERSON":
      return {
        ...state,
        persons: state.persons.filter((per) => per.id !== action.personId),
      };
    default:
      return state;
  }
};

export default reducer;
