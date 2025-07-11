import { collection, addDoc, updateDoc, deleteDoc, doc, query, CollectionReference } from 'firebase/firestore';
import { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';

import { db } from '../../firebase.config.ts';

interface User {
  id: string;
  name: string;
  mark: number;
}

function FirebaseDemo() {
  const [newName, setNewName] = useState('');
  const [newMark, setNewMark] = useState(0);

  const usersCollectionRef = collection(db, 'users');

  const [users, usersLoading, usersError] = useCollection(query(usersCollectionRef) as CollectionReference<User>);

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, mark: Number(newMark) });
  };

  const updateUser = async (id: string, mark: number) => {
    const userDoc = doc(db, 'users', id);
    const newFields = { mark: mark + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id: string) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
  };

  if (usersLoading) {
    return null;
  }

  if (usersError) {
    return <div>Error fetching users</div>;
  }

  return (
    <div className="flex flex-col gap-8 p-6">
      <div className="flex flex-col gap-6 border border-gray-200 w-[20%] px-6 py-8">
        <div className="flex flex-col gap-3">
          <input
            className="border"
            onChange={(event) => {
              setNewName(event.target.value);
            }}
            placeholder="Name..."
          />
          <input
            className="border"
            type="number"
            placeholder="Mark..."
            onChange={(event) => {
              setNewMark(Number(event.target.value));
            }}
          />
        </div>
        <button className="w-[50%] bg-green-500" onClick={createUser}>
          Create User
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        {users &&
          users.docs.map((user) => (
            <div className="w-[20%] gap-6 border border-gray-300 px-6 py-8" key={user.id}>
              <p>Name: {user.data().name}</p>
              <p>Mark: {user.data().mark}</p>
              <div className="flex flex-col gap-4 mt-4">
                <button className="bg-green-500" onClick={() => updateUser(user.id, user.data().mark)}>
                  Increase Mark
                </button>
                <button className="bg-red-500" onClick={() => deleteUser(user.id)}>
                  Delete User
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FirebaseDemo;
