<script lang="ts">
	export let title: string;
	export let isOpen = false;
	export let defaultX = 0;
	export let defaultY = 0;
	export let isAbsolute = true;

	export function open() {
		x = defaultX;
		y = defaultY;
		isOpen = true;
	}

	export function close() {
		isOpen = false;
	}

	let x = 0;
	let y = 0;
	let dragging = false;

	let lastTouch: Touch | null = null;

	function onHeaderMouseDown() {
		dragging = true;
	}

	function onHeaderTouchStart(event: TouchEvent) {
		lastTouch = event.touches[0];
		dragging = true;
	}

	function onMouseUp() {
		dragging = false;
	}

	function onMouseMove(event: MouseEvent) {
		if (!dragging) {
			return;
		}

		x += event.movementX;
		y += event.movementY;
	}

	function onTouchMove(event: TouchEvent) {
		if (!dragging) {
			return;
		}

		const movement = {
			x: event.touches[0].clientX - (lastTouch?.clientX ?? 0),
			y: event.touches[0].clientY - (lastTouch?.clientY ?? 0)
		};

		x += movement.x;
		y += movement.y;

		lastTouch = event.touches[0];
	}
</script>

{#if isOpen}
	<div class={isAbsolute ? 'absolute' : ''} style="left: {x}px; top: {y}px;">
		<div class="overflow-clip rounded-t-[8px] bg-gradient-to-b from-[#0058EE] to-[#00138C] p-[2px]">
			<div
				on:mousedown={onHeaderMouseDown}
				on:touchstart={onHeaderTouchStart}
				class="header flex w-full rounded-t-[7px] p-1"
			>
				<p class="font-trebuchet-ms font-semibold text-white shadow-black text-shadow-sm">
					{title}
				</p>
			</div>

			<div class="flex flex-col gap-4 bg-window-secondary p-3">
				<slot />
			</div>
		</div>
	</div>
{/if}

<svelte:window
	on:mouseup={onMouseUp}
	on:touchup={onMouseUp}
	on:mousemove={onMouseMove}
	on:touchmove={onTouchMove}
/>

<style lang="postcss">
	.header {
		background: linear-gradient(
			180deg,
			rgba(61, 149, 255, 1) 0%,
			rgba(3, 114, 255, 1) 10%,
			rgba(0, 85, 229, 1) 50%,
			rgba(0, 96, 252, 1) 90%,
			rgba(0, 67, 207, 1) 100%
		);
	}
</style>
