//app.tsx
import {  Container, VStack } from "@chakra-ui/react"
import TaskManager from "./components/taskManager/taskList"
import AddTask from "./components/taskManager/AddTask"

function App() {

  return (
    <Container bg="gray.100" height='100vh'  padding='30px'  display="flex" justifyContent="center" >
      <VStack gap='6'>
        <TaskManager />
        <AddTask />
      </VStack>
      
    </Container>
  )
}

export default App
