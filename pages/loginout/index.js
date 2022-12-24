import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const Loginout = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="">
        <button onClick={() => { signOut(); }} style={{ color: 'white' }}>
          <a>Logout</a>
        </button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => signIn()} style={{ color: 'white' }}>
        <a>Login</a>
      </button>
    </div>
  );
};
export default Loginout;
