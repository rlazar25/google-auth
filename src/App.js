import './App.css';
import { signInWithGoogle } from "./firebase-config"

function App() {
  return (
    <div className="App">
      <button onClick={signInWithGoogle} > Sign In With Google </button>

      <h1> {localStorage.getItem("name")} </h1>
      <h1> {localStorage.getItem("email")} </h1>
      <img src={localStorage.getItem("profilePic")} alt="T" />
    </div>
  );
}

export default App;
