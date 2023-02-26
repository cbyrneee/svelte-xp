<script lang="ts">
	import { tick } from 'svelte';
	import { fade } from 'svelte/transition';

	let x: number = 0;
	let y: number = 0;
	let contextMenuContainer: HTMlDivElement;

	let isShown = false;

	/**
	 * Hides the context menu
	 */
	export function hide() {
		isShown = false;
	}

	/**
	 * Hides the context menu if we click outside of it
	 */
	export function onClick(event: MouseEvent) {
		// If we don't have a contextMenuContainer, we are hidden and shouldn't do anything
		if (!contextMenuContainer) return;

		// We don't want to hide the context menu if we're interacting with the context menu
		if (event.target === contextMenuContainer || contextMenuContainer.contains(event.target))
			return;

		isShown = false;
	}

	/**
	 * Shows the context menu at the mouse position.
	 * If it's already shown, we hide it before setting the new position and showing it again to trigger the animation.
	 */
	export async function onContextMenu(event: MouseEvent) {
		if (x === event.clientX && y === event.clientY) return;

		// If we're already shown, we want to hide the context menu before showing it again
		if (isShown) {
			isShown = false;

			// We want to wait for the animation to perform before continuing
			await tick();
		}

		x = event.clientX;
		y = event.clientY;

		isShown = true;
	}

	/**
	 * Shows the context menu at the mouse position.
	 * If it's already shown, we hide it before setting the new position and showing it again to trigger the animation.
	 */
	export async function onTouchStart(event: TouchEvent) {
		const touch = event.touches[0];
		if (x === touch.clientX && y === touch.clientY) {
			return;
		}

		// If we're already shown, we want to hide the context menu
		if (isShown) {
			isShown = false;
		} else {
			x = touch.clientX;
			y = touch.clientY;

			isShown = true;
		}
	}
</script>

{#if isShown}
	<div
		bind:this={contextMenuContainer}
		in:fade={{ duration: 100 }}
		class="fixed z-50 border border-[#ACA899] bg-white font-tahoma text-[11px]"
		style="left: {x}px; top: {y}px;"
	>
		<div class="flex flex-col items-start divide-y divide-[#ACA899] p-[3px]">
			<slot />
		</div>
	</div>
{/if}
