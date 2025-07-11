import { getAuth } from 'firebase/auth';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router';

const auth = getAuth();

const DashboardPage = () => {
  const [user, userLoading] = useAuthState(auth);
  const [signOut, isSigningOut] = useSignOut(auth);

  // Do not show page content until auth state is fetched.
  if (userLoading) {
    return null;
  }

  // If user isn't signed in, redirect to auth page.
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="p-6">
      <p>Welcome to your app!</p>
      <button className="bg-green-500" onClick={signOut} disabled={isSigningOut}>Sign out</button>
    </div>
  );
};

export default DashboardPage;
