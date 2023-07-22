import SignIn from "./Components/Sign/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey,faLock } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope, faKey,faLock);

function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route index element={<SignIn />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
