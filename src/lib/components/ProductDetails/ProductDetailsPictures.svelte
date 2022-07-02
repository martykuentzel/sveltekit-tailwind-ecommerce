<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/env';

	export let product;
	let currentPreviewPictureSrc = product.images[0];
	let currentPreviewPictureAlt = 0;

	const selectPreviewPicture = (img) => {
		currentPreviewPictureSrc = img.target.src;
		currentPreviewPictureAlt = img.target.alt;
	};

	onMount(async () => {
		if (browser) {
			await import('tw-elements');
		}
	});
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

	<div class="col-span-5 px-6 xl:col-span-4">
		<img
			src={currentPreviewPictureSrc}
			class="object-contain max-h-[40rem] w-full sticky top-0 p-12 {product.images.length > 1
				? 'hidden'
				: ''} xl:flex"
			alt="product"
			loading="lazy"
			id="expandedImg"
		/>

		<div
			id="carouselExampleControls"
			class="carousel slide relative carousel-dark {product.images.length > 1
				? ''
				: 'hidden'} xl:hidden"
			data-bs-ride="carousel"
		>
			<div class="carousel-inner relative w-full overflow-hidden">
				{#each product.images as img, idx}
					<div class="carousel-item relative float-left w-full {idx == 0 ? 'active' : ''}">
						<img
							src={img}
							class="object-contain max-h-[40rem] w-full sticky top-0 p-12"
							alt={idx}
							loading="lazy"
						/>
					</div>
				{/each}
			</div>
			<button
				class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
				type="button"
				data-bs-target="#carouselExampleControls"
				data-bs-slide="prev"
			>
				<span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
				<span class="visually-hidden">Previous</span>
			</button>
			<button
				class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
				type="button"
				data-bs-target="#carouselExampleControls"
				data-bs-slide="next"
			>
				<span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	</div>
</div>

<style>
</style>
