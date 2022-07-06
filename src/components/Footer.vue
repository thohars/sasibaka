<template>
  <div class="flex justify-center m-1 p-2">
    <button
      v-for="item in social"
      class="bg-secondary p-1 mx-1 rounded hover:scale-110 duration-200">
      <a :href="item.url" target=_blank>
        <Icon :name="item.icon" />
      </a>
    </button>
  </div>
  <div class="mb-5">
    <p class="text-xs text-center">© 2021 - 2022 Sasibaka</p>
  </div>
</template>

<script setup>
import Icon from "./../components/Icon.vue";

const social = [
  {
    icon: "git-pull-request",
    url: "https://github.com/thohars/sasibaka"
  },
  {
    icon: "mail",
    url: "mailto:thoha.arsyad@mail.ugm.ac.id"
  }
]
</script>
