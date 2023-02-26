<div
	class="start-button-background flex w-24 bg-gradient-to-b from-[#3A7C3A] to-[#246F30] hover:brightness-[1.15]"
>
	<button class="start-button m-[1px] w-full font-gothic-italic text-white">
		<div class="mr-[4px] ml-[9px] flex h-full w-full flex-row items-center gap-1">
			<img
				width="18px"
				height="16px"
				class="windows-icon"
				src="/icons/windows-18x16.png"
				alt="Logo"
			/>

			<p class="shadow-black/75 text-shadow">start</p>
		</div>
	</button>
</div>

<style>
	.start-button-background {
		border-top-right-radius: 7% 12px;
		border-bottom-right-radius: 7% 12px;
		overflow: clip;
	}

	.start-button {
		background: linear-gradient(
			180deg,
			rgba(90, 158, 90, 1) 0%,
			rgba(140, 203, 141, 1) 10%,
			rgba(74, 153, 75, 1) 20%,
			rgba(61, 177, 60, 1) 50%,
			rgba(74, 153, 75, 1) 90%,
			rgba(44, 128, 46, 1) 100%
		);

		border-top-right-radius: 7% 12px;
		border-bottom-right-radius: 7% 12px;
	}

	.windows-icon {
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
	}
</style>
