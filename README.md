# Next.js 15 Environment Variable Access Error

This repository demonstrates a common error encountered when working with environment variables in Next.js 15 app directory client components.  Accessing environment variables directly within client components throws an error due to how Next.js handles these variables in the new architecture. 

## Problem

Accessing `process.env.MY_VAR` in a client component throws an error because environment variables are not automatically available in the client-side environment.  They're typically available only on the server-side during the rendering process.

## Solution

The recommended approach is to pass the required environment variables as props to the client component from a server component, or use the `getServerSideProps` or `getStaticProps` functions to make them available during the data fetching process.