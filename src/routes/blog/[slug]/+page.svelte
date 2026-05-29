<script>
    let { data } = $props()
</script>
<svelte:head>
    <meta property="og:title" content={data.meta?.title} />
    <meta property="og:description" content={data.meta?.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`https://agmzblog.vercel.app/${data.meta?.slug}`} />
    <meta property="og:site_name" content="AGMZ Blog" />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>
<a class="hvc flex gap-2 text-white mt-5 mx-5 text-xl" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 lucide lucide-move-left-icon lucide-move-left"><path d="M6 8L2 12L6 16"/><path d="M2 12H22"/></svg> Back to Home</a>

<h1 class="font-black mx-8 my-4 text-white not-prose text-3xl mb-0">{data.meta?.title ?? "(no title)"}</h1>
<p class="text-slate-400 mx-8 text-sm">{data.meta?.date ?? "???"}</p>
<hr class="mx-8 my-4 border-white"/>

<article class="mx-8 my-5 prose prose-invert max-w-none text-white">
    <data.content />
</article>

<style>
    .hvc:hover {
        text-decoration: underline;
    }
</style>