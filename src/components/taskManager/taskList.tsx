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

const TaskManager = () => {
  const tasks: Task[] = [
    {
      id: 1,
      title: "Task One",
      description: "Description for task one",
      status: "To Do",
    },
    {
      id: 2,
      title: "Task Two",
      description: "Description for task two",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Task Three",
      description: "Description for task three",
      status: "Done",
    },
  ];

  return (
    <Stack>
      <Card.Root size="sm" borderRadius="2xl">
        <Card.Header>
          <Heading size="3xl"> Task Manager</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          <Heading size="2xl"> Tasks</Heading>
          {tasks.map((task) => (
            <HStack key={task.id} p={4} justify="space-between" align="center">
              <Box minWidth="100px">
                <Heading size="md">{task.title}</Heading>
              </Box>

              <Box flex="1">
                <Text>{task.description}</Text>
              </Box>

              <Badge
                variant="solid"
                padding="2"
                colorPalette={
                  task.status === "Done"
                    ? "green"
                    : task.status === "In Progress"
                    ? "blue"
                    : task.status === 'To Do' ? 'gray': ''
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
