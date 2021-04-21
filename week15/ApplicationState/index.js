let state = {
    reps: 0,
    jogging: 0
}

function reducer(state, action)
{
  switch(action.type)
  {
    case "increment1":
      return {reps: state.reps + 1, jogging: state.jogging};
    case "increment2":
      return {reps: state.reps, jogging: state.jogging + 1};
    case "decrement1":
      return {reps: state.reps - 1, jogging: state.jogging};
    case "decrement2":
      return {reps: state.reps, jogging: state.jogging - 1};
    default:
      throw new Error();
  }
}

export {state, reducer};
