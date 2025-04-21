//src/components/taskManager/taskList.tsx
import {
  Stack,
  Card,
  Heading,
  HStack,
  Badge,
  Text,
  Box,
} from "@chakra-ui/react";

interface Task {
  id: number;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Done";
}

interface TaskManagerProps {
  tasks: Task[];
}

const TaskManager = ({ tasks }: TaskManagerProps) => {
  return (
    <Stack width="full">
      <Card.Root size="sm" borderRadius="2xl">
        <Card.Header>
          <Heading size="4xl"> Task Manager</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          <Heading size="2xl"> Tasks</Heading>
          {tasks.map((task) => (
            <HStack key={task.id} p={4} justify="space-between" align="center">
              <Box minWidth="100px">
                <Heading size="lg">{task.title}</Heading>
              </Box>

              <Box flex="1">
                <Text>{task.description}</Text>
              </Box>

              <Badge
                variant={task.status === 'To Do' ? 'subtle': 'solid'}
                padding="2"
                colorPalette={
                  task.status === "Done"
                    ? "green"
                    : task.status === "In Progress"
                    ? "blue"
                    : 'gray'
                }
              >
                {task.status}
              </Badge>
            </HStack>
          ))}
        </Card.Body>
      </Card.Root>
    </Stack>
  );
};

export default TaskManager;
