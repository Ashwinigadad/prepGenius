'use client';

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-border">
      <nav className="flex items-center gap-4">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={160}
            height={60}
            className="rounded"
          />
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
