import { db } from './Db'
import './App.css'
import Header from './Header'
import Card from './Card'

function App() {

  return (
    <>
    <Header/>
    <div className="coursemain">
    {
      db.map((data,index) => {
        return <Card key={index} cours = {data}/>

      })
    }
    </div>
    </>
  )
}

export default App
