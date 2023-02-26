<script lang="ts">
	import { onMount } from 'svelte';

	let isExpanded = false;

	let date = new Date();

	$: time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

	onMount(() => {
		const interval = setInterval(() => {
			date = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="flex w-[75px] border-l-[1px] border-l-[#1A3655] bg-[#095BC9]">
	<div class="tray my-[1px] flex w-full items-center">
		<div class="mx-auto flex flex-row items-center">
			<p class="font-tahoma text-[11px] text-white">{time}</p>
		</div>
	</div>
</div>

<style>
	.tray {
		background: linear-gradient(
			180deg,
			rgba(22, 173, 240, 1) 0%,
			rgba(25, 185, 243, 1) 10%,
			rgba(18, 144, 232, 1) 20%,
			rgba(13, 141, 234, 1) 50%,
			rgba(13, 141, 234, 1) 90%,
			rgba(21, 130, 218, 1) 100%
		);
	}
</style>
