import React from 'react';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
interface pageProps {
  users: string[];
}

const StaticSiteGeneration = ({ users }: pageProps) => {
  return (
    <div>
      <h3>Static Site Generation</h3>
      {users.map((user) => {
        return <div key={user}>{user}</div>;
      })}
    </div>
  );
};

export default StaticSiteGeneration;

//Runs in the server at build time.  Serves up a json file.
export const getStaticProps: GetStaticProps = async (context) => {
  //get data using functions from the api directory.  No need to fetch
  const users = ['alvin', 'angie'];
  console.log(context);
  return {
    props: {
      users,
    },

    //Incremental Static Regeneration.  When a request comes in afer 10 seconds,
    // this function will run again to regenerate the page.
    revalidate: 10,
  };
};
