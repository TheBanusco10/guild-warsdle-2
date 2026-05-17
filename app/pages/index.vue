<script setup lang="ts">
import { useSkillsStore } from "~/features/skills/stores/skills.store";

const { getSkills } = useSkillsStore();

await useLazyAsyncData(() => getSkills().then(() => true));
</script>
<template></template>
