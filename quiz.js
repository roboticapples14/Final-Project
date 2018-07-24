var quiz = {}

 quiz.view = function(state, props) {

  state.$looks = state.$smarts = {
    _onclick: function(event) {
      props.totals[this.name] = parseInt(this.value)
    }
  }

  state.results = props.totals.smarts + props.totals.looks
}

var props = {
  totals: {
    smarts: 0,
    looks: 0
  }
}

mag.module("quiz", quiz, props)
