import MainPage from '../../pages/main-pages/main-pages';

type AppProps = {
  numbersOfCards: number;
}

function App({numbersOfCards}: AppProps) {
  return(
    <MainPage numbersOfCards={ numbersOfCards} />
  );
}

export default App;
