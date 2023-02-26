<script lang="ts">
	import { StartButton } from './buttons';
	import { Tray } from './tray';
</script>

<div class="taskbar flex h-[30px] w-full flex-row">
	<StartButton />

	<div class="flex-grow" />

	<Tray />
</div>

<style>
	.taskbar {
		background: linear-gradient(
			180deg,
			rgba(49, 104, 213, 1) 0%,
			rgba(73, 147, 230, 1) 10%,
			rgba(33, 87, 215, 1) 20%,
			rgba(33, 87, 215, 1) 90%,
			rgba(25, 65, 165, 1) 100%
		);
	}
</style>
