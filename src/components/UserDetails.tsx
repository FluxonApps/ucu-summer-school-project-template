import { doc } from 'firebase/firestore';
import { db } from '../../firebase.config.ts';
import { useDocument } from 'react-firebase-hooks/firestore';

interface UserDetailsProps {
  userId: string;
  onClose: () => void;
}

export function UserDetails({ userId, onClose }: UserDetailsProps) {
  const userDoc = doc(db, 'users', userId);
  const [user, loading, error] = useDocument(userDoc);

  if (loading || !user) {
    return null;
  }

  const userData = user.data();

  return (
    <>
      <div className="fixed inset-0 bg-stone-800/75 pointer-events-none z-[9999]"></div>
      <div className="fixed inset-0 flex justify-center items-center z-[9999]">
        <div className="bg-white w-9/12 sm:w-7/12 md:w-5/12 lg:w-3/12 scale-95">
          <div className="flex flex-col gap-4 p-4 pointer-events-auto">
            {!userData ? (
              <div>User is not found</div>
            ) : (
              <>
                <div>Name: {userData.name}</div>
                <div>Mark: {userData.mark}</div>
              </>
            )}
            {error && <div>Error fetching a user</div>}
            <button className="bg-red-500" onClick={() => onClose()}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
