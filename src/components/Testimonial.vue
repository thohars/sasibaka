<template>
<h2 class="text-center font-semibold text-primary text-2xl mb-3">Testimonials</h2>
<div class="mx-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex justify-center">
  <div v-for="item in testimonials" class="flex flex-col md:flex-row justify-center m-4">
    <div class="w-full max-w-xs p-4 text-white bg-primary rounded-lg shadow hover:scale-110 duration-200 border-white border-2">
      <div class="flex items-center">
        <div class="relative inline-block shrink-0">
          <img class="w-12 h-12 rounded-full" :src="item.img">
        </div>
        <div class="ml-3 text-sm font-normal">
          <h4 class="text-sm font-semibold text-gray-900 dark:text-white" v-html="item.user"></h4>
          <div class="text-sm font-normal" v-html="item.text"></div> 
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Icon from "./Icon.vue";
import testimonials from "./../assets/testimonials.json"

export default {
  components: {
    Icon
  },
  data() {
    return {
      testimonials,
    };
  },
}
</script>
