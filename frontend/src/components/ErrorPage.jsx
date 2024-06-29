import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className='text-center'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p> <br />
      <Link to="/" className='bg-purple-600 px-5 py-2 rounded-md hover:rounded-none my-5 text-white'>Go back to Home</Link>
    </div>
  );
}