import './App.css';
import { AlertCircle } from 'lucide-react';
import Alert from "./cmponant/alert.tsx"

function App() {
  
  return (
    <>
      <Alert textHeader='wrong message'
            textContent='Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur laboriosam molestiae dolore, ipsam cum unde. Delectus iste corporis 
            reprehenderit! Fugiat veniam ab vero debitis
            exercitationem, porro eius enim voluptas eos?'
            calssHeader='alert-wrapper'
            iconHeader={<AlertCircle size={35} className='icon-Header'/>}/>

            <Alert textHeader='wrong message'
            textContent='Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur laboriosam molestiae dolore, ipsam cum unde. Delectus iste corporis 
            reprehenderit! Fugiat veniam ab vero debitis
            exercitationem, porro eius enim voluptas eos?'
            calssHeader='alert-default'
            iconHeader={<AlertCircle size={35} className='icon-Header'/>}/>

            <Alert textHeader='wrong message'
            textContent='Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur laboriosam molestiae dolore, ipsam cum unde. Delectus iste corporis 
            reprehenderit! Fugiat veniam ab vero debitis
            exercitationem, porro eius enim voluptas eos?'
            calssHeader='alert-info'
            iconHeader={<AlertCircle size={35} className='icon-Header'/>}/>

            <Alert textHeader='wrong message'
            textContent='Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur laboriosam molestiae dolore, ipsam cum unde. Delectus iste corporis 
            reprehenderit! Fugiat veniam ab vero debitis
            exercitationem, porro eius enim voluptas eos?'
            calssHeader='alert-warning'
            iconHeader={<AlertCircle size={35} className='icon-Header'/>}/>

            <Alert textHeader='wrong message'
            textContent='Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur laboriosam molestiae dolore, ipsam cum unde. Delectus iste corporis 
            reprehenderit! Fugiat veniam ab vero debitis
            exercitationem, porro eius enim voluptas eos?'
            calssHeader='alert-success'
            iconHeader={<AlertCircle size={35} className='icon-Header'/>}/>
    </>
  );
}

export default App;
