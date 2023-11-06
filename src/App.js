import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  // const [firstName,setFirstName]=useState("");
  // const [lastName,setLastName]=useState("");

  // function firstNameHandler(event){
  //   // console.log("firstName");
  //   setFirstName(event.target.value); 
  // }

  // function changehanlder(event) {
  //   // console.log("LastName");
  //   setLastName(event.target.value);
  // }
  // console.log(firstName);
  // console.log(lastName);

  // create object

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments:"",
    checkbox:true
  })

  function changeHanlder(event) {
    const {name,value,type,checked}=event.target;
    setFormData(prevState => {
      return {
        ...prevState,
        [name]: type ==="checkbox" ? checked:value
      }
    })
  }
  console.log(formData);
  return (
    <div className="App">
      <form>
        <label>Name:</label>
        <input 
        type="text" 
        name="firstName" 
        placeholder="firstname" 
        value={formData.firstName}
        onChange={changeHanlder} />
        <br /><br />

        <label>LastName</label>
        <input
          type="text"
          name='lastName'
          placeholder="LastName"
          value={formData.lastName}
          onChange={changeHanlder} />
        <br /><br />

        <label>Email</label>
        <input
          type="text"
          name='email'
          placeholder="LastName"
          value={formData.email}
          onChange={changeHanlder} />

        <br /> <br />

        <textarea
          placeholder='Enter your comments here...'
          name="comments"
          value={formData.comments}
          onChange={changeHanlder}
        />

        <br /> <br />
        <input
          type='checkbox'
          onChange={changeHanlder}
          name="checkbox"
          id='checkbox'
          checked={formData.checkbox}
        />
        <label htmlFor='checkbox'>India</label>


      </form>
    </div>
  );
}

export default App;
