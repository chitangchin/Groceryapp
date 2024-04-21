"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  //TODO delete once landing page is ready
  useEffect(() => {
    router.push('/api/auth/register');
  }, []);

  return (
    <main>
      <h1 className='text-3xl font-bold text-center pt-10'>Home Page</h1>
    </main>
  );
}
