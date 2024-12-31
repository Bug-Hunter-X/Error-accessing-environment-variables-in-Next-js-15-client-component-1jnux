```javascript
// pages/about.js

export default function About({ myVar }) {
  console.log(myVar); // Access the environment variable safely
  return (
    <div>
      <h1>About Page</h1>
      <p>MY_VAR: {myVar}</p>
    </div>
  );
}

export async function getServerSideProps() {
  const myVar = process.env.MY_VAR;
  return {
    props: {
      myVar: myVar,
    },
  };
}
```