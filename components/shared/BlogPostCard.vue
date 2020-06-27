<template>
  <div
    class="w-full md:w-1/2 xl:w-1/3 transition duration-500 ease-in-out transform xl:hover:scale-95 md:hover:scale-95 cursor-pointer"
  >
    <div class="m-1 bg-white rounded-lg overflow-hidden">
      <div class="w-full h-48">
        <img :src="imageUrl" alt="blog-post-image" class="object-cover w-full h-full" />
      </div>
      <div class="w-full p-5">
        <div class="text-md font-bold">{{ title }}</div>
        <div class="text-md truncate">{{ description }}</div>
      </div>
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
