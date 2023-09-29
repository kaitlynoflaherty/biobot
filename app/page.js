'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// Automatically reroutes to search page
const DefaultPage = () => {
  const { push } = useRouter();

  useEffect(() => {
     push('/search');
  }, []);
  return <p></p>;
};

export default DefaultPage;
