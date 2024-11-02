import { useEffect, useState } from "react"
import axios from "axios"
interface TodoType {
  "todo":string ,"isDone":boolean,"id":string | number,
}

const Home = () => {
  // const [todos,setTodos] = useState([] as TodoType[])

  const [todos,setTodos] =useState<TodoType[]>([])
const url:string = import.meta.env.VITE_BASE_URL
const getTodos = async () => {
try {
  const {data} = await axios(url)
  // const {data} = await axios<TodoType[]>(url)
  console.log(data)
  setTodos(data)

} catch (error) {
  console.log(error)
  
}
return "merhaba"
}
useEffect(() => {
  getTodos()
},[])

  return (
    <div onClick={() => setTodos([{id:5, todo:"eren", isDone:true}])}>Home</div>
  )
}

export default Home
