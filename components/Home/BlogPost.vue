<template>
  <div class="bg-white rounded-lg container px-5 mt-10 mx-auto">
    <h2 class="py-4 text-md font-bold">Start Traveling</h2>
    <div class="flex">
      <BlogPostCard
        v-for="blogPost in blogPosts"
        :key="blogPost.id"
        :image-url="blogPost.imageUrl"
      />
    </div>
  </div>
</template>

<script>
import BlogPostCard from '../shared/BlogPostCard'

export default {
  components: {
    BlogPostCard
  },
  data() {
    return {
      blogPosts: [
        {
          id: 1,
          title: 'Blog Post Title',
          description: 'The blog post description contains bla bla bla',
          imageUrl: '/images/blog-post-placeholder.jpg'
        }
      ]
    }
  }
}
</script>
