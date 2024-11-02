import { useState } from "react"

interface TodoType {
  "todo":string ,"isDone":boolean,"id":string | number,
}

const Home = () => {
  // const [todos,setTodos] = useState([] as TodoType[])

  const [todos,setTodos] =useState<TodoType[]>([])



  return (
    <div onClick={() => setTodos([{id:5, todo:"eren", isDone:true}])}>Home</div>
  )
}

export default Home
