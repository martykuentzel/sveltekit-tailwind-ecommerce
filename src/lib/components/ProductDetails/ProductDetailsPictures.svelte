<script>
	export let product;
	let currentPreviewPictureSrc = product.images[0];
	let currentPreviewPictureAlt = 0;

	const selectPreviewPicture = (img) => {
		currentPreviewPictureSrc = img.target.src;
		currentPreviewPictureAlt = img.target.alt;
	};

	const showArrowIcons = product.images.length > 1 ? true : false;
	const nextPicture = (idx) => {
		if (currentPreviewPictureAlt + 1 < product.images.length) {
			currentPreviewPictureAlt += 1;
		} else {
			currentPreviewPictureAlt = 0;
		}
	};
	const prevPicture = (idx) => {
		if (currentPreviewPictureAlt > 0) {
			currentPreviewPictureAlt -= 1;
		} else {
			currentPreviewPictureAlt = product.images.length - 1;
		}
	};
</script>

<div class="grid grid-cols-5">
	<div class="hidden col-span-1 cursor-pointer xl:inline">
		{#each product.images as img, idx}
			<img
				src={img}
				class="object-contain border-lightGray h-32 w-full {currentPreviewPictureAlt == idx
					? 'border-2'
					: 'opacity-60'}"
				alt={idx}
				loading="lazy"
				on:mouseenter={selectPreviewPicture}
			/>
		{/each}
	</div>

	<div class="relative col-span-5 px-6 xl:col-span-4">
		<img
			src={product.images[currentPreviewPictureAlt]}
			class="object-contain max-h-[40rem] w-full sticky top-0 p-12 xl:flex"
			alt="product"
			loading="lazy"
			id="expandedImg"
		/>

		<div
			class="absolute top-0 bottom-0 items-center justify-center left-0 ml-8 cursor-pointer hover:scale-125 xl:hidden {showArrowIcons
				? 'flex'
				: 'hidden'}"
			on:click={prevPicture(currentPreviewPictureAlt)}
		>
			<span class="inline-block h-8 w-8">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
				</svg>
			</span>
		</div>

		<div
			class="absolute top-0 bottom-0 items-center justify-center right-0 mr-8 cursor-pointer hover:scale-125 xl:hidden {showArrowIcons
				? 'flex'
				: 'hidden'}"
			on:click={nextPicture(currentPreviewPictureAlt)}
		>
			<span class="inline-block h-8 w-8">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
				</svg>
			</span>
		</div>
	</div>
</div>
