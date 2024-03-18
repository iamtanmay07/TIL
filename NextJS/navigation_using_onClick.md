handle navigation using an onClick event handler instead of the Link component, you can use Next.js's router directly. Here's how you can achieve that:
```next.js
"use client" // for client side rendering as this is client side component !
import { useRouter } from 'next/navigation';
const MyComponent = () => {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to the next page
    router.push('/nextpage');
  };

  return (
    <div>
      <h1>My Component</h1>
      <button onClick={handleClick}>Go to Next Page</button>
    </div>
  );
};

export default MyComponent;
```
