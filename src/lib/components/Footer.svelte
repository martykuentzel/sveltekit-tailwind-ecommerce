<script>
	import { t } from '$lib/i18n/i18n.js';
</script>

<!-- Footer -->
<footer class="py-6 bg-black md:py-10 xl:px-32">
	<div
		class="container flex flex-col justify-between py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
	>
		<!-- Logo and social links container -->
		<div
			class="flex flex-col items-center justify-between space-y-4 pb-6 px-8 md:space-y-6 md:flex-col md:items-start"
		>
			<!-- Logo -->
			<div class="text-3xl text-white">Blechbär</div>
			<!-- Social Links Container -->
			<div class="flex justify-center space-x-4">
				<a href="#">
					<img src="/icon-facebook.svg" alt="" class="h-8" />
				</a>
				<a href="#">
					<img src="/icon-twitter.svg" alt="" class="h-8" />
				</a>
				<a href="#">
					<img src="/icon-pinterest.svg" alt="" class="h-8" />
				</a>
				<a href="#">
					<img src="/icon-instagram.svg" alt="" class="h-8" />
				</a>
			</div>
		</div>
		<div class="flex justify-around space-x-12 lg:space-x-32">
			<div class="flex flex-col space-y-3 text-white">
				<a href="#" class="hover:text-lightGray">{$t('footer.imprint')}</a>
				<a href="#" class="hover:text-lightGray">{$t('footer.terms_and_conditions')}</a>
				<a href="#" class="hover:text-lightGray">{$t('footer.data_privacy')}</a>
			</div>
			<div class="flex flex-col space-y-3 text-white">
				<a href="#" class="hover:text-lightGray">{$t('footer.cancellation_policy')}</a>
				<a href="#" class="hover:text-lightGray">{$t('footer.shipping')}</a>
				<a href="#" class="hover:text-lightGray">{$t('footer.about')}</a>
			</div>
		</div>
		<div class="inline-flex items-center px-2 md:px-0 md:block">
			<div class="text-white pb-3">{$t('footer.payments')}</div>
			<div class="flex px-4 md:px-0 md:block lg:flex">
				<img src="/visa.svg" alt="" class="h-8 bg-white my-2 mx-2 md:mx-0" />
				<img src="/mastercard.svg" alt="" class="h-8 bg-white my-2 mx-2 md:mx-0 lg:ml-3" />
				<img src="/paypal.svg" alt="" class="h-8 bg-white my-2 mx-2 md:mx-0 lg:ml-3" />
			</div>
		</div>
	</div>
	<div class="flex text-xs flex-col justify-between text-center">
		<div class="text-white block">Copyright &copy; 2022, All Rights Reserved</div>
	</div>
</footer>
