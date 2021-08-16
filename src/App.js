
import './App.css';
import Profile from "./Profile/Profile.js"

function App() {
  const handleName=(fullName)=>alert(fullName)
  return (
    <div className="App">
     <Profile 
     fullName="Landon Neil"
     profession="student"
     bio="good mythical morning participant"
     handleName={handleName}>
       <img src='https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png' alt="profile" style={{height:'200px'}}></img>
     </Profile>
    </div>
  );
}

export default App;
