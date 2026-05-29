<script>
    let { status, error } = $props();
</script>

<svelte:head>
    <title>{status}</title>
</svelte:head>

<div class="min-h-screen bg-black text-white flex flex-col items-center justify-center">
    <h1 class="text-6xl font-bold">
        {status}
    </h1>

    <p class="mt-4 text-white/60">
        {error?.message ?? 'Something went wrong'}
    </p>

    <a
        class="mt-8 underline hover:text-slate-400"
        href="/"
    >
        Back to Home
    </a>
</div>