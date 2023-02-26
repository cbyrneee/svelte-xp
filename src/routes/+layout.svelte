<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	import '../app.css';

	import { Window } from '../components/window';

	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

{#if ready}
	<div in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>
		<div class="min-w-screen flex min-h-screen flex-row items-center">
			<div class="mx-auto h-full w-[200px]">
				<Window title="Microsoft Windows" isOpen={true} isAbsolute={false}>
					<p class="text-center font-trebuchet-ms text-xs">Loading Windows XP...</p>
				</Window>
			</div>
		</div>
	</div>
{:else}
	<div in:fade={{ duration: 200, delay: 200 }}>
		<slot />
	</div>
{/if}
