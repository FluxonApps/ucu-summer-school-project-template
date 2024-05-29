import { useState, useEffect } from 'react';
import { db } from '../firebase.config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, QuerySnapshot } from 'firebase/firestore';
import { Box, Button, Flex, Heading, Input, Stack, HStack } from '@chakra-ui/react';

export function FirebaseDemo() {
  const [newName, setNewName] = useState('');
  const [newMark, setNewMark] = useState(0);

  const [users, setUsers] = useState<Array<{ id: string; name: string; mark: number }>>([]);
  const usersCollectionRef = collection(db, 'users');

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, mark: Number(newMark) });
    getUsers();
  };

  const updateUser = async (id: string, mark: number) => {
    const userDoc = doc(db, 'users', id);
    const newFields = { mark: mark + 1 };
    await updateDoc(userDoc, newFields);
    getUsers();
  };

  const deleteUser = async (id: string) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
    getUsers();
  };

  const getUsers = async () => {
    const data = (await getDocs(usersCollectionRef)) as QuerySnapshot<{ id: string; name: string; mark: number }>;
    setUsers(data.docs.map((doc) => ({ id: doc.id, name: doc.data().name, mark: doc.data().mark })));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Flex flexDir="column" gap="8" padding="6">
      <Flex flexDir="column" gap="6" border="1px" borderColor="gray.200" width="20%" px="6" py="8">
        <Stack spacing="3">
          <Input
            onChange={(event) => {
              setNewName(event.target.value);
            }}
            placeholder="Name..."
            size="sm"
          />
          <Input
            type="number"
            placeholder="Mark..."
            onChange={(event) => {
              setNewMark(Number(event.target.value));
            }}
            size="sm"
          />
        </Stack>
        <Button width="50%" size="sm" colorScheme="green" onClick={createUser}>
          Create User
        </Button>
      </Flex>
      <Flex gap="4" flexWrap="wrap">
        {users.map((user) => (
          <Box gap="6" border="1px" borderColor="gray.300" width="20%" px="6" py="8" key={user.id}>
            <Heading>Name: {user.name}</Heading>
            <Heading>Mark: {user.mark}</Heading>
            <HStack gap="4" mt="4">
              <Button size="sm" colorScheme="green" onClick={() => updateUser(user.id, user.mark)}>
                Increase Mark
              </Button>
              <Button size="sm" colorScheme="red" onClick={() => deleteUser(user.id)}>
                Delete User
              </Button>
            </HStack>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}

export default FirebaseDemo;
