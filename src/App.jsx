import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import { HomePage } from './pages';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import GeneralLoading from './components/general-loading/GeneralLoading';
import DefaultLayout from './layouts/DefaultLayout';
import PlaceToStay from './pages/place-to-stay/PlaceToStay';
import Account from './pages/account/account';

import { useDispatch } from 'react-redux';
import { getUser } from './features/authSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <DefaultLayout>
          <Suspense fallback={<GeneralLoading text={`LOADING...`} />}>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/place-to-stay" element={<PlaceToStay />} />
              <Route path="/account" element={<Account />} />
              <Route
                path="*"
                element={<GeneralLoading text="PAGE NOT FOUND" />}
              />
            </Routes>
          </Suspense>
        </DefaultLayout>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
