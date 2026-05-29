<!-- src/lib/components/Tweet.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	const { url } = $props();

	let container: HTMLDivElement;

	function extractTweetId(url: string) {
		const match = url.match(/status\/(\d+)/);
		return match?.[1];
	}

	onMount(async () => {
		const tweetId = extractTweetId(url);

		if (!tweetId) return;

		// script がまだ無ければ追加
		if (!(window as any).twttr) {
			const script = document.createElement('script');
			script.src = 'https://platform.x.com/widgets.js';
			script.async = true;
			document.body.appendChild(script);

			await new Promise((resolve) => {
				script.onload = resolve;
			});
		}

		(window as any).twttr.widgets.createTweet(tweetId, container, {
			align: 'center',
			theme: 'dark'
		});
	});
</script>

<div bind:this={container}></div>