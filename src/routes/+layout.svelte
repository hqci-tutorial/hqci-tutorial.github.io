<script lang="ts">
	import favicon from "$lib/assets/favicon.png";
	import "./style.css";

	let { children } = $props();
</script>

<svelte:head>
	<title
		>Introduction to Quantum Computing for Visualization Researchers | VIS 2026
		Tutorial</title
	>
	<link rel="icon" href={favicon} />
</svelte:head>

<header
	class="w-1/1 p-2 border-b-1 text-sm font-semibold text-emerald-800 border-gray-100 backdrop-blur-md
	sticky top-0 z-999 blur-10 bg-gray-200/70"
>
	<nav class="flex gap-3 justify-center">
		<span class="block">HQCI Toturial 2026</span>
		<a class="block" href="./">Main</a>
		<a class="block" href="./prepare">Preparation</a>
		Materials (TBD)
	</nav>
</header>

{@render children?.()}

<footer
	class="box-width p-2 border-t-1 text-sm text-gray-400 border-gray-300 text-center"
>
	<p>&copy; HQCI Tutorial</p>
</footer>
