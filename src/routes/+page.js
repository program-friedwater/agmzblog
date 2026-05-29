const posts = import.meta.glob(
  '/src/posts/*.svx',
  {
    eager: true
  }
);

export async function load() {
  const allPosts = Object.entries(posts).map(
    ([path, post]) => {
      const slug = path
        .split('/')
        .pop()
        .replace('.svx', '');

      return {
        slug,
        ...post.metadata
      };
    }
  )
  .sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )

  return {
    posts: allPosts
  };
}