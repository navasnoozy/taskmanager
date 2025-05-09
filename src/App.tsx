//app.tsx
import { VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AddTask from "./components/taskManager/AddTask";
import TaskManager from "./components/taskManager/taskList";

export interface Task {
  id: number;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Done";
}

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);


  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <VStack bg="gray.100" height='100vh' width='full'  padding='30px'  display="flex"  >
      <VStack gap='6' width='full' maxWidth='400px'>
        <TaskManager tasks={tasks}  />
        <AddTask  setTasks={setTasks} />
      </VStack>
      
    </VStack>
  )
}

export default App
