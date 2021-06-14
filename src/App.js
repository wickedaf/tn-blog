import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./components/Home/Blog/Blog"
import { createContext, useEffect, useState } from "react";
import Profile from "./components/Home/Profile/Profile";
import AllUser from "./components/Home/AllUser/AllUser";
import AddPost from "./components/Home/AddPost/AddPost";
import NavBar from "./components/Home/NavBar/NavBar";

export const BlogContext = createContext();

function App() {
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() => {

setTimeout(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => setUser(data));
      }, 2000)
    
  }, []);

  return (
    <BlogContext.Provider
      value={{ userData: [user, setUser], postData: [post, setPost] }}
    >
      <Router>
        <NavBar></NavBar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/profile/:userId">
            <Profile></Profile>
          </Route>
          <Route path="/allUser">
            <AllUser></AllUser>
          </Route>
          <Route path="/addPost">
            <AddPost></AddPost>
          </Route>
          <Route path="/">
            <Blog></Blog>
          </Route>
        </Switch>
      </Router>
    </BlogContext.Provider>
  );
}

export default App;
