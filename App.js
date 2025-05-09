// import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [Data, setData] = useState("");
  const [val, setVal] = useState();
  const [show, setShow] = useState(false);

  const results = async () => {
    const d = await fetch(`https://dummyjson.com/recipes/search?q=${Data}`);
    const json = await d.json();
    setVal(json);
  };

  const handleChange = (e) => {
    setData(e.target.value);
    setShow(true); // Show results when user types
  };

  const toggle = () => {
    setShow(true); // Toggle the show state when the input is focused
  };

  const eve = () => {
    if (!Data) setShow(false); // Hide results if the input is blurred and no data is present
  };

  useEffect(() => {
    if (Data) results();
    else setVal(null);
  }, [Data]);

  return (
    <div className="App">
      <h1>Searchbar</h1>
      <input
        type="text"
        value={Data}
        onChange={handleChange}
        onFocus={toggle}
        onBlur={eve}
      />
      {show ? (
        val?.recipes ? (
          <ul>
            {val.recipes.map((recipe) => (
              <li key={recipe.id}>{recipe.name}</li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )
      ) : (
        <p>Type something to search...</p>
      )}
    </div>
  );
}

// // What is Debouncing?
// // Debouncing is a technique used to ensure that a function
// (like an API call or an expensive computation) is executed only after a certain period of
// time has passed since the last input. It’s helpful in preventing unnecessary calls, especially when you have
// //  events triggered frequently, like typing in a search bar.

//implement the concepst of cache
