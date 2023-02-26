<script lang="ts">
	import { shortcut, type ShortcutEventDetails } from '@svelte-put/shortcut';

	import { Window } from '../';

	let window: Window;

	$: windowWidth = 0;
	$: windowHeight = 0;

	function handleR(event: ShortcutNodeDetails) {
		window.open();
	}
</script>

<svelte:window
	bind:innerWidth={windowWidth}
	bind:innerHeight={windowHeight}
	use:shortcut={{
		trigger: {
			key: 'r',
			modifier: ['alt'],
			callback: handleR
		}
	}}
/>

<Window bind:this={window} title="Run" defaultX={10} defaultY={windowHeight - 175}>
	<p class="font-trebuchet-ms text-xs">
		Type the name of a program, folder, document, or <br />
		Internet resource, and Windows will open it for you.
	</p>

	<div class="self-end">
		<button
			class="disabled:grays rounded-[4px] border-[1px] border-[#003C74] bg-[#F4F4F0] px-3 py-1 font-trebuchet-ms text-xs disabled:opacity-50 disabled:grayscale"
			disabled
		>
			OK
		</button>
		<button
			class="rounded-[4px] border-[1px] border-[#003C74] bg-[#F4F4F0] px-3 py-1 font-trebuchet-ms text-xs disabled:opacity-50"
			on:click={window.close}
		>
			Cancel
		</button>
		<button
			class="rounded-[4px] border-[1px] border-[#003C74] bg-[#F4F4F0] px-3 py-1 font-trebuchet-ms text-xs disabled:opacity-50"
		>
			Browse...
		</button>
	</div>
</Window>
