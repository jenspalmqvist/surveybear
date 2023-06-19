
import styled from 'styled-components';
import SurveyPage from './pages/SurveyPage';
import StartPage from './pages/StartPage';


import { Route, Routes } from 'react-router-dom';



const StyledApp = styled.div`
    // Your style here
`;


export function App() {

  return (
    <StyledApp>
      <button onClick={() => {throw Error("Method does not exist")}}>Break the world</button>
      <Routes>
        <Route
          path="/survey/:surveyId"
          element={<SurveyPage />}
        />
        {process.env['NX_STARTPAGE_ENABLED'] === 'true' &&
          <Route
          path="/"
          element={<StartPage/>} />
        }
      </Routes>
    </StyledApp>
  );

}


export default App;
