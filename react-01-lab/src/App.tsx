import { useState } from 'react'
import './App.css'
import Programmers from './component/Programmers'
import Companies from './component2/Companies'
import Services from './component3/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Programmers
      name = 'hibah'
      prolang = 'JavaScript'
      exyears = {1+ "  year of experience"}
      company = 'Twuaiq Academy'
      />



<Programmers
      name = 'Sara'
      prolang = 'Java'
      exyears = {3 + "  year of experience"}
      company = 'KFUMP'
      />

<Programmers
      name = 'Ayat'
      prolang = 'Swift'
      exyears = {2 + "  year of experience"}
      company = 'KFU'
      />

<Companies
coname = 'STC'
employeesNum = {"Number of employees:  +" + 50000}
/>
<Services 
serviveType = "Telecommunications"
/>

    </>
  )
}

export default App
