import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {No005} from "./pages/no005";
import {No001} from "./pages/no001";
import {No002} from "./pages/no002";
import {No003} from "./pages/no003";
import {No004} from "./pages/no004";
import {No007} from "./pages/no007";
import {No006} from "./pages/no006";

function App() {
  return (
      <BrowserRouter basename={'layout'}>
          <Routes>
              <Route path={'/'} element={<No001 />} />
              <Route path={'/no002'} element={<No002 />} />
              <Route path={'/no003'} element={<No003 />} />
              <Route path={'/no004'} element={<No004 />} />
              <Route path={'/no005'} element={<No005 />} />
              <Route path={'/no006'} element={<No006 />} />
              <Route path={'/no007'} element={<No007 />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
