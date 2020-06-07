<template>
  <div class="w-full">
    <div class="w-full h-32">
      <img :src="imageUrl" alt="blog-post-image" class="object-cover w-full h-full" />
    </div>
    <div class="w-full">
      <div class="text-md font-bold">{{ title }}</div>
      <div class="text-md">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      default: ''
    }
  }
}
</script>
