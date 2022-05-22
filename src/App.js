import './App.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./actions/posts"

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getPosts());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const posts = useSelector((state) => state.posts); 

  return (
    <div className="App">
      {posts.map((test, index) => {
        return (
          <>
            <div key={index}>
              <h1>{test.id}</h1>
              <h1>{test.name}</h1>
            </div>
          </>
        )
      })}
    </div>
  );
}

export default App;
