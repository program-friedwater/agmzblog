<script>
    let { data } = $props()
</script>

<main class="text-white mx-4 my-4">
    <h1 class="text-4xl mb-4">Agmz Blog</h1>
    {#each data.posts as post}
        <a class="mx-4 mt-3 pb-4 block hover:text-slate-300" href={`/blog/${post.slug}`}>
            <h2 class="text-2xl hvc">{post.title ?? "(no title)"}</h2>
            <p class="text-slate-400">{post.description ?? "no description"}</p>
            <p class="text-sm">{post.date ?? "???"}</p>
        </a>
        <hr />
    {/each}
</main>

<style>
    .hvc:hover {
        text-decoration: underline;
    }
</style>