import { UserForm } from '../components/UserForm.tsx';
import { UserList } from '../components/UserList.tsx';

function FirebaseDemo() {
  return (
    <div className="flex flex-col gap-8 p-6">
      <UserForm />
      <UserList />
    </div>
  );
}

export default FirebaseDemo;
