import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { wait } from '../../utils/timeout';

interface pageProps {
  user: { incrementalPathGeneration: string; name: string };
}
const IncrementalPathGeneration = ({ user }: pageProps) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>IncrementalPathGeneration</div>
      {user.incrementalPathGeneration}
      {user.name}
    </div>
  );
};

export default IncrementalPathGeneration;

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context);
  const incrementalPathGeneration = context?.params?.incrementalPathGeneration;
  //call api to get the user with that "id"
  wait(2000);
  const user = { incrementalPathGeneration, name: 'alvin' };
  return {
    props: {
      user,
    },
    revalidate: 2,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    //statically generate these pages at build time
    paths: [{ params: { incrementalPathGeneration: '1' } }],
    //false = 404 page, true = show fallback page
    //blocking = dont show fallback page, USE serverside rendering to get the data
    fallback: true,
  };
};
