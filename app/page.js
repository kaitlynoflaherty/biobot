//'use client'
import Link from 'next/link';

// Ideally, I would want this to be the search page
// I was having trouble with this page so I made it the default page
// Links to search page
const DefaultPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Biobot Take Home Assessment!</h1>
      <h3>
        Please go to <Link href="/search" className='my-link'>this page</Link> to search for kits.
      </h3>
    </div>
  );
};

export default DefaultPage;
