import { collection, CollectionReference, deleteDoc, doc, query, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase.config.ts';
import { useCollection } from 'react-firebase-hooks/firestore';
import { User } from '../types/user.types.ts';
import { UserDetails } from '../components/UserDetails.tsx';
import { useState } from 'react';

export function UserList() {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const usersCollectionRef = collection(db, 'users');

  const [users, usersLoading, usersError] = useCollection(query(usersCollectionRef) as CollectionReference<User>);

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
    <>
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
                <button className="bg-blue-500" onClick={() => setSelectedUserId(user.id)}>
                  Show details
                </button>
                <button className="bg-red-500" onClick={() => deleteUser(user.id)}>
                  Delete User
                </button>
              </div>
            </div>
          ))}
      </div>
      {selectedUserId && <UserDetails userId={selectedUserId} onClose={() => setSelectedUserId(null)} />}
    </>
  );
}
