'use client';

import { SignOutButton } from '@clerk/nextjs';
import { useToast } from '../../hooks/use-toast';

function SignOutLink() {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: '已成功登出.' });
  };

  return (
    <SignOutButton redirectUrl='/'>
      <button className='w-full text-left' onClick={handleLogout}>
        登出
      </button>
    </SignOutButton>
  );
}
export default SignOutLink;
