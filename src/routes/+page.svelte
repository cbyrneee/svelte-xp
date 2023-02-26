<script lang="ts">
	import { Taskbar } from '../components/desktop';
	import { ContextButton, ContextGroup, ContextMenu } from '../components/utilities/context-menu';
	import { RunWindow } from '../components/window/impl';

	let contextMenu: ContextMenu;
</script>

<ContextMenu bind:this={contextMenu}>
	<ContextGroup>
		<ContextButton on:click={contextMenu.hide}>Refresh</ContextButton>
	</ContextGroup>

	<ContextGroup>
		<ContextButton disabled>Paste</ContextButton>
		<ContextButton disabled>Paste shortcut</ContextButton>
	</ContextGroup>

	<ContextGroup>
		<ContextButton on:click={contextMenu.hide}>Properties</ContextButton>
	</ContextGroup>
</ContextMenu>

<div class="min-w-screen flex h-[100svh] w-full flex-col bg-neutral-200">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="desktop relative flex-grow overflow-hidden"
		on:click|preventDefault={contextMenu.onClick}
		on:contextmenu|preventDefault={contextMenu.onContextMenu}
		on:touchstart|preventDefault={contextMenu.onTouchStart}
	>
		<RunWindow />
	</div>

	<Taskbar />
</div>

<svelte:body on:contextmenu|preventDefault={() => {}} />
