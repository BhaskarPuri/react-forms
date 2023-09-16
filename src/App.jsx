import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [gender, setGender] = useState("");
  const [lang1, setLang1] = useState(false);
  const [lang2, setLang2] = useState(false);
  const [submitted, setSubmitted] = useState(false);
const handleClick=(e)=>{
  e.preventDefault();
 setSubmitted(true)
}  
return (

    <>{
    submitted?(
      <div className="output">
  <h3>name:{name}</h3>
  <h3>fname:{fname}</h3>
  <h3>gender:{gender}</h3>
  <h3>languages:{lang1?("Java,"):("")}{lang2?("python"):("")}</h3>
</div>
    ):(
      <div className="form">
        <form onSubmit={handleClick}>
          name:<input type="text"value={name} onChange={(e)=>setName(e.target.value)} /><br/>
          fname:<input type="text"value={fname} onChange={(e)=>setFname(e.target.value)} /><br/>
         gender:
          <input type="radio"name="gender" value="Male" onChange={(e)=>setGender(e.target.value)} />male
          <input type="radio"name="gender" value="female" onChange={(e)=>setGender(e.target.value)} />female
          <input type="radio"name="gender" value="others" onChange={(e)=>setGender(e.target.value)} />others<br/>
  select languages:
        <input type="checkbox"checked={lang1} onChange={(e)=>setLang1(e.target.checked)} />java
        <input type="checkbox"checked={lang2} onChange={(e)=>setLang2(e.target.checked)} />python<br/>
        <button>submit</button>
        </form>
      </div>
    )
      
      
    }
    </>
  )
}

export default App
