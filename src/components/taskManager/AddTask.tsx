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

const AddTask = () => {
  const frameworks = createListCollection({
    items: [
      { label: "Done", value: "Done" },
      { label: "In Progress", value: "in_progress" },
      { label: "To Do", value: "to_do" },
    ],
  });

  return (
    <Stack width="full">
      <Card.Root borderRadius="2xl">
        <Card.Header>
          <Heading size="3xl"> Add New Task</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          <Stack gap="4" w="full">
            <Field.Root>
              <Field.Label>Title</Field.Label>
              <Input borderRadius='lg' />
            </Field.Root>
            <Field.Root>
              <Field.Label>Description</Field.Label>
              <Input height='20' borderRadius='lg' />
            </Field.Root>
            <Select.Root collection={frameworks}>
              <Select.Label>Status</Select.Label>
              <Select.Trigger borderRadius='lg'>
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
          <Button mt='5' colorPalette='blue'>Add Task</Button>
        </Card.Body>

      </Card.Root>
    </Stack>
  );
};

export default AddTask;
