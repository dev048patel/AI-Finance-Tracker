import React from 'react'
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
const Header = () => {
  return (
    <div>
      {/*  If user is Signed out show SignIn and SignUp button */}
          <SignedOut>
              <SignInButton />
              
            </SignedOut>
      {/* If user is Signed in show UserButton */}
            <SignedIn>
              <UserButton />
            </SignedIn>  

    </div>
  )
}

export default Header
