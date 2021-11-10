import React, { useState } from "react";
import Form from './Components/Form'

function App() {

  const initialFormValues = {
    name: '',
    email: '',
    role: '',
  }
  const [members, setMembers] = useState([])
  const [values, setValues] = useState(initialFormValues)

  const onSubmit = () => {
    setMembers([values, ...members]);
    setValues(initialFormValues)
  }

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value})
  }
  return (
    <div className="App">
     <h1>Team Builder App</h1>
     <Form 
      values={values}
      change={onChange}
      submit={onSubmit}
     />
     {members.map(member => {
       return (
         <div key={member.idx}>
           {member.email}, {member.name}, {member.role}
          </div>
       )
     })}
    </div>
  );
}

export default App;
