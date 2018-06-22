import Vuex from 'vuex'

const store = () => new Vuex.Store({
  actions: {
    toggle: context => {
      context.state.show = !context.state.show
    }
  },

  state: {
    show: false
  }
});

export default store
