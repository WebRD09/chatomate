import SignIn from "./Components/Sign";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey,faLock } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey,faLock);

// ...
function App() {
  return (
    <div><SignIn/></div>
  );
}

export default App;
