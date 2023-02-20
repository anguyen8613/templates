import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

const POSTS = [
  { id: '1', title: 'Post 1' },
  { id: '2', title: 'Post 2' },
];

export default function QueryClient() {
  const queryClient = useQueryClient();
  const postQuery = useQuery({
    queryKey: ['posts'],
    queryFn: (obj) =>
      wait(1000).then(() => {
        console.log(obj);
        return [...POSTS];
      }),
  });

  const newPostMutation = useMutation({
    mutationFn: (title) => {
      return wait(1000).then(() => {
        POSTS.push({ id: crypto.randomUUID(), title });
      });
    },
    onSuccess: queryClient.invalidateQueries(['posts']),
  });

  if (postQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (postQuery.error) {
    // it will retry the queryFn multiple times before the error is thrown
    return <pre>{JSON.stringify(postQuery.error)}</pre>;
  }

  return (
    <div>
      {postQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <button
        disabled={newPostMutation.isLoading}
        onClick={() => newPostMutation.mutate('New Post')}
      >
        Add New
      </button>
    </div>
  );
}
