import Rebase from 're-base'

const config = {
  apiKey: "AIzaSyDF7a9yA2EBPjSmLNXnK4S6fWa_fMyniEs",
      authDomain: "star-wars-quiz-game.firebaseapp.com",
      databaseURL: "https://star-wars-quiz-game.firebaseio.com",
      storageBucket: "star-wars-quiz-game.appspot.com",
      messagingSenderId: "576308420404"
};

const base = Rebase.createClass(config)
export default base
