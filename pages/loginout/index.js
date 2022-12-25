import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const Loginout = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div >
        <div class="dropdown show">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {session.user.name}
          </a>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Download Ticket</a>
            <button onClick={() => { signOut(); }} style={{ color: 'white' }}>
              <a>Logout</a>
            </button>

          </div>
        </div>

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
