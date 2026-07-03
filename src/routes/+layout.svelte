<script lang="ts">
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<title>Introduction to Quantum Computing for Visualization Researchers | VIS 2026 Tutorial</title>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
