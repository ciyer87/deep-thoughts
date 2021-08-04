import React from 'react';
import ThoughtList from '../components/ThoughtList';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  // useQuery hook is used to make a request
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  // the ?. is called **optional chaining** it's modern and Node doesn't node this...
  // The line below means: if *data* exists store it in the *thoughts* constant
  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
          { loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..."/>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;