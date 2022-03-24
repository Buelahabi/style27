import {useState} from 'react';
import './App.css';

function App() {
  const project = ["Have project today 23rd march", "Have to submit tender tomorrow 24th march"]
  const [copyproject,setproject]=useState(project)
  const[userproject,setuserproject]=useState("")
  const buttonstyle={
    color:!userproject?"white":"blue"
  }
  
  return(
    <div className="App">
     <div className='container'>
      <div className='row'>
        <div className="col-12">
          <div className="heading">
            <h1>To Do Applications</h1>
            </div>
            <div classNmae="input-group mb-3">
              <input placeholder='Enter your new project......' type="text" value={userproject} onChange={(Event)=>{
               setuserproject(Event.target.value) 
               console.log(userproject)
              }} className="form-control"></input>
              <button style={buttonstyle} disabled={!userproject} onClick={()=>{
                setproject([...copyproject,userproject])
                console.log(copyproject)
                console.log(userproject)
                setuserproject("")
              }} className="btn bg-success btn-outline-secondary"type="button"id="button-addon2">Add new project</button>
          </div>
        </div>
      </div>
    </div>
    {copyproject.map((Event)=><Tdlist project={Event}/>)}
    </div>
  );
            }
             function Tdlist({project}) {
               const[currentdisplay,setdisplay]=useState(true);
               //const styles={
                 // display:currentdisplay?"block":"none",
                 //}
                 return(
                   <div className='container'>
                     <table class="table table-dark">
                       <tbody>
                         <tr>
                           {currentdisplay?<td><bold>{project}</bold><button onClick={()=>setdisplay(false)} className='btn bg-danger'>Remove project</button></td>:""}

                         </tr>
                       </tbody>
                     </table>
                   </div>
                 )
               }
             

export default App;
