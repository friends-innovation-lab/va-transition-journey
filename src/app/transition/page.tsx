'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TransitionPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/transition/sign-in');
  }, [router]);

  return (
    <div className="flex-grow flex items-center justify-center">
      <p className="text-[#6b7280]">Redirecting...</p>
    </div>
  );
}
