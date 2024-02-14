import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import "./App.css";
import FormTask from "./components/FormTask";

function App() {
  return (
    <div className="App">
      <div>
        <SignOutButton>
          <button>Sign out</button>
        </SignOutButton>
      </div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <FormTask />
      </SignedIn>
    </div>
  );
}

export default App;
