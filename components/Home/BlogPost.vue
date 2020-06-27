<template>
  <div>
    <div class="rounded-lg container px-5 mt-10 mx-auto">
      <h1 class="mb-4 text-white font-bold text-3xl">Browse by property type</h1>
      <div class="flex flex-wrap -mx-1">
        <BlogPostCard
          v-for="blogPost in blogPosts"
          :key="blogPost.id"
          :image-url="blogPost.imageUrl"
          :title="blogPost.title"
          :description="blogPost.description"
        />
      </div>
    </div>
    <div class="rounded-lg container px-5 mt-10 mx-auto">
      <h1
        class="mb-4 text-white font-bold text-3xl"
      >Homes and apartments you can have entirely to yourself</h1>
      <div class="flex flex-wrap -mx-1">
        <BlogPostCard
          v-for="blogPost in blogPosts"
          :key="blogPost.id"
          :image-url="blogPost.imageUrl"
          :title="blogPost.title"
          :description="blogPost.description"
        />
      </div>
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
          title: 'Some Title',
          description:
            'The blog post description contains bla bla bla. The blog post description contains bla bla bla',
          imageUrl: '/images/blog-post-placeholder.jpg'
        },
        {
          id: 1,
          title: 'Blog Post Title',
          description: 'The blog post description contains bla bla bla',
          imageUrl: '/images/blog-post-placeholder.jpg'
        },
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
