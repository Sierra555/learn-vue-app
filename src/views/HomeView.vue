<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import Select from "primevue/select";
import Button from "primevue/button";
import { Form } from "@primevue/forms";
import Card from "primevue/card";
import { taskTypes, taskLevels } from "@/lib/constants";
import "highlight.js/styles/github-dark.css";
import Output from "@/components/Output.vue";

const selectedTaskType = ref(taskTypes[0].name);
const selectedTaskLevel = ref(taskLevels[0].name);
const state = reactive({
	task: "",
	error: "",
	isLoading: false,
});

const isDark = ref(
	localStorage.getItem("theme") === "dark"
);

const toggleDarkMode = () => {
	isDark.value = !isDark.value;
	document.documentElement.classList.toggle(
		"dark",
		isDark.value
	);
	localStorage.setItem(
		"theme",
		isDark.value ? "dark" : "light"
	);
};

onMounted(() => {
	if (isDark.value) {
		document.documentElement.classList.add("dark");
	}
});

const handleGenerateTask = async () => {
	try {
		state.isLoading = true;
		state.error = "";
		const response = await axios.post(
			`https://learn-vue-app.onrender.com/generate-task`,
			{
				taskType: selectedTaskType.value,
				taskLevel: selectedTaskLevel.value,
			}
		);
		state.task = response.data.task;
	} catch (error) {
		state.error = "Error generating task: " + error.message;
	} finally {
		state.isLoading = false;
	}
};
</script>

<template>
	<header class="border-b-[1px] p-4">
		<div class="max-w-4xl mx-auto px-4">
			<div class="flex gap-3 items-center justify-center">
				<h1
					class="text-6xl font-bold text-center text-primary-700"
					>Learn Vue with AI</h1
				>
				<button
					aria-label="Toggle Dark Mode"
					@click="toggleDarkMode()"
				>
					<i
						:class="`pi ${
							isDark ? 'pi-moon' : 'pi-sun'
						} cursor-pointer`"
					></i>
				</button>
			</div>
		</div>
	</header>

	<section class="py-8">
		<div class="max-w-4xl mx-auto px-4">
			<div
				class="h-screen bg-ai bg-contain bg-no-repeat bg-center bg-[url(/images/bg-ai.webp)]"
			>
				<Card class="p-6">
					<template #content>
						<Form
							@submit="handleGenerateTask"
							class="grid grid-cols-1 md:grid-cols-2 gap-3"
						>
							<div>
								<label
									for="taskType"
									class="block text-sm font-medium text-gray-700 mb-2"
									>Select Task Type</label
								>
								<Select
									v-model="selectedTaskType"
									:options="taskTypes"
									option-label="text"
									option-value="name"
									class="w-full"
									id="taskType"
									placeholder="Select Task Type"
								/>
							</div>

							<div>
								<label
									for="taskLevel"
									class="block text-sm font-medium text-gray-700 mb-2"
									>Select Task Level</label
								>
								<Select
									v-model="selectedTaskLevel"
									:options="taskLevels"
									option-label="text"
									option-value="name"
									class="w-full"
									id="taskLevel"
									placeholder="Select Task Level"
								/>
							</div>

							<Button
								type="submit"
								:label="
									state.isLoading
										? 'Generating...'
										: 'Generate'
								"
								class="w-full py-2 px-4 bg-green-700 text-white rounded-md disabled:bg-gray-400 md:col-span-2"
								:disabled="state.isLoading"
							/>
						</Form>
					</template>
				</Card>

				<Card
					class="shadow-lg rounded-lg p-6"
					v-if="state.task"
				>
					<template #content>
						<Output :task="state.task" />
					</template>
				</Card>

				<div
					v-if="state.error"
					class="mt-4 text-red-500"
					>{{ state.error }}</div
				>
			</div>
		</div>
	</section>
</template>
