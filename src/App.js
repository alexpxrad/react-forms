import { useState } from 'react';
import './App.css';

function App() {

    const [title, setTitle] = useState ("this is the title")
    const [description, setDescription] = useState("your description")

    const [author, setAuthor] = useState("todd albert")

    console.log(title)

    function formSubmit(e)  {
      e.preventDefault();
      console.log("form submitted")


    }






  return (
    <div className="App">
      <form onSubmit={formSubmit} >
        <h1>Comments</h1>

        {/* here goes the title*/}
        <label>Title</label>
        <input 
        type="text" 
        value={title} 
        onChange={(e) => {setTitle(e.target.value)}}
        />
        <h3>{title}</h3>


        {/* this is the description*/}
        <label>Description</label>
        <textarea
        value={description}
        onChange={(e)=> {setDescription(e.target.value)}}></textarea>

        <h3>{description}</h3>

        {/* THIS IS THE AUTHOR */}

        <label>Author</label>
        <select value={author}
        onChange={(e)=> {setAuthor(e.target.value)}} 
        >
          <option value="" selected>Choose One</option>
          <option value="todd albert">Doctor Todd</option>
          <option value="ludwigson">Ludwigson</option>
          <option value="other">Other</option>
        </select>
        <h3>{author}</h3>

          <button>Submit Form</button>


      </form>
    </div>
  );
}

export default App;
