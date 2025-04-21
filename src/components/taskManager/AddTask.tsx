//src/components/taskManager/AddTask.tsx
import { Task } from "@/App";
import {
  Button,
  Card,
  createListCollection,
  Field,
  Heading,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";

interface AddTaskProps {
    setTasks: Dispatch<SetStateAction<Task[]>>;
  }

const AddTask = ({ setTasks }: AddTaskProps) => {
  const [status, setStatus] = useState<"To Do" | "In Progress" | "Done" | "">(
    ""
  );

  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(({ title, description }) => {
    if (!title || !description || !status) return;

    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      status,
    };

    setTasks((prev) => [...prev, newTask]);

    // Clear form
    setStatus("");

  });

  const frameworks = createListCollection({
    items: [
      { label: "Done", value: "Done" },
      { label: "In Progress", value: "In Progress" },
      { label: "To Do", value: "To Do" },
    ],
  });

  return (
    <form style={{ width: "100%" }} onSubmit={onSubmit}>
      <Stack width="full">
        <Card.Root borderRadius="2xl">
          <Card.Header>
            <Heading size="3xl"> Add New Task</Heading>
          </Card.Header>
          <Card.Body color="fg.muted">
            <Stack gap="4" w="full">
              <Field.Root>
                <Field.Label>Title</Field.Label>
                <Input {...register("title")} borderRadius="lg" />
              </Field.Root>
              <Field.Root>
                <Field.Label>Description</Field.Label>
                <Input
                  {...register("description")}
                  height="20"
                  borderRadius="lg"
                />
              </Field.Root>
              <Select.Root
                collection={frameworks}
                onValueChange={({ value }) =>
                  setStatus(value[0] as "To Do" | "In Progress" | "Done")
                }
              >
                <Select.Label>Status</Select.Label>
                <Select.Trigger borderRadius="lg">
                  <Select.ValueText placeholder="Select Status" />
                </Select.Trigger>
                <Select.Content>
                  {frameworks.items.map((framework) => (
                    <Select.Item item={framework} key={framework.value}>
                      {framework.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Stack>
            <Button type="submit" mt="5" colorPalette="blue" borderRadius="lg">
              Add Task
            </Button>
          </Card.Body>
        </Card.Root>
      </Stack>
    </form>
  );
};

export default AddTask;
