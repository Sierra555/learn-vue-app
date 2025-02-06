<script setup>
import {  computed, nextTick, watch } from 'vue';
import { marked } from "marked";
import DOMPurify from "dompurify";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { defineProps } from 'vue';

const props = defineProps({
  task: String,
});

const renderedTask = computed(() => {
  const rawHtml = marked(props.task);
  const sanitizedHtml = DOMPurify.sanitize(rawHtml, { USE_PROFILES: { html: true } });
  return sanitizedHtml;
});

watch(() => props.task, () => {
  nextTick(() => {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block);
    });
  });
});
</script>

<template>
  <div v-html="renderedTask"></div>
</template>