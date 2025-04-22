"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {

  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div>
      <h1>Webdev2 week 9 assignment</h1>
      {user ? (
        <button onClick={firebaseSignOut}>Sign Out</button>
      ) : (
        <div>
          <p>Sign in</p>
          <button onClick={gitHubSignIn}>Sign In with GitHub</button>
        </div>
      )}
      {user && (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-50"
          />
          <Link href="/week-10/shopping-list">
            Click here to view the shopping list
          </Link>
        </div>
      )}
    </div>
  );
}
