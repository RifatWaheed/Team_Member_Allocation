import {useState} from 'react';
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const Employees = () =>{
  const [employees,setEmployees]= useState([
  { 
    id:1,
    fullname: "Bob Jones",
    designation: "JS developer",
    gender : "male",
    teamName: "TeamA"
  },

    { 
    id:2,
    fullname: "Chandler Bing",
    designation: "Node developer",
    gender : "male",
    teamName: "TeamA"
  },
  
  { 
    id:3,
    fullname: "Monica Geller",
    designation: "Python developer",
    gender : "female",
    teamName: "TeamA"
  },

  { 
    id:4,
    fullname: "Joey Tribbiani",
    designation: "React developer",
    gender : "male",
    teamName: "TeamB"
  },

  { 
    id:5,
    fullname: "Ross Geller",
    designation: "Web developer",
    gender : "male",
    teamName: "TeamB"
  },
  
  { 
    id:6,
    fullname: "Phoebe buffay",
    designation: "Java developer",
    gender : "female",
    teamName: "TeamB"
  }
                                           ])
  
  
  
  return (
    <main className = "container">
      <div className = "row">
        <div className = "col-8">
        
        </div>
      
      </div>
      
    </main>
  )
}
export default Employees