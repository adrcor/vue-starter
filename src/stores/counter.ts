import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const counter = useLocalStorage<number>("counter", 0);

  function increment() {
    counter.value++;
  }

  function set(value: number) {
    counter.value = value;
  }

  return {
    counter,
    increment,
    set,
  };
});
