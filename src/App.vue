<script setup>
import { defineAsyncComponent } from "vue";
import FadeLoader from "vue-spinner/src/FadeLoader.vue";

const AsyncHomeView = defineAsyncComponent(() =>
	import("@/views/HomeView.vue")
);
</script>

<template>
	<Suspense>
		<template #fallback>
			<div
				class="flex items-center justify-center h-screen"
			>
				<FadeLoader />
			</div>
		</template>
		<template #default>
			<AsyncHomeView />
		</template>
	</Suspense>
</template>
