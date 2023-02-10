<script setup>
// ONLY AN EXAMPLE, THIS COMPONENT IS NOT USED.
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>
