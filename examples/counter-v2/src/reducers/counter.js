

export const Counter = {
  // state1: {
  //   state: 0,
  //   increment(){
  //     return this.state + 1
  //   },
  //   decrement(){
  //     return this.state - 1
  //   }
  // },

  state1(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  },
  

  state2(state = 0, action) {
    if(action.value){
      state = action.value
    }
    return state
  }
  
  
}
