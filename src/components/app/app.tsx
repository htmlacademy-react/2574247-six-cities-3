import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../../pages/private-route/private-route';
import Favorites from '../../pages/favorites-page/favorites-page';
import Login from '../../pages/login/login';
import MainPage from '../../pages/main-pages/main-pages';
import OfferPage from '../../pages/offer-page/offer-page';
import Page404 from '../../pages/page-404/page-404';

type AppProps = {
  numbersOfCards: number;
}

function App({numbersOfCards}: AppProps) {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage numbersOfCards={numbersOfCards} />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path="*" element={<Page404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
