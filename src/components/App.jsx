import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyled/global.styled.js';
import SharedLayout from './SharedLayout/SharedLayout.jsx';
import { HomePage } from 'pages/HomePage/HomePage.jsx';
import { TweetsPage } from 'pages/TweetsPage/TweetsPage.jsx';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
        </Route>
        {/* <Route path="*" element={<HomePage /> replace}  /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
