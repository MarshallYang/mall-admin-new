<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/tauri";
import {useColors} from "vuestic-ui";

const greetMsg = ref("");
const name = ref("");

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsg.value = await invoke("greet", { name: name.value });
}

const { applyPreset } = useColors();
const dark = ref(false)

const handleChange = () => {
  if (dark.value) {
    applyPreset('dark')
  } else {
    applyPreset('light')
  }
  dark.value = !dark.value
}
</script>

<template>
  <div class="card">
    <input id="greet-input" v-model="name" placeholder="Enter a name..." />
    <va-button type="button" color="danger" gradient @click="greet()">Greet</va-button>
  </div>

  <p>{{ greetMsg }}</p>

  <va-button class="" @click="handleChange">Change Light / Dark</va-button>
</template>
