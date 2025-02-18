```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Count updated:', count);
    return () => {
      // Cleanup function: runs before component unmounts and before every rerender
      console.log('Component will unmount or re-render');
    };
  }, [count]); // Add count to dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```