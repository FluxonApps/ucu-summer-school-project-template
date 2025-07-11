import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase.config.ts';

export function UserForm() {
  const [newName, setNewName] = useState('');
  const [newMark, setNewMark] = useState(0);

  const usersCollectionRef = collection(db, 'users');

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, mark: Number(newMark) });
  };

  return (
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
  );
}
