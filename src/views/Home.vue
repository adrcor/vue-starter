<template>
  <div class="flex flex-col gap-2 items-center">
    <p>counter : {{ counter.counter }}</p>
    <Button @click="counter.increment" label="increment" class="w-48" />
    <Button
      @click="counter.set(0)"
      label="reset"
      class="w-48"
      severity="danger"
    />
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();
</script>
