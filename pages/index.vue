<template>
  <div class="home-container">
    <div class="bg-white">
      <div class="flex align-center justify-between container px-4 mx-auto">
        <h1 class="text-lg font-bold">Travel</h1>
        <!-- eslint-disable-next-line -->
        <v-btn rounded outlined type="submit" link color="primary" to="/login">Login</v-btn>
      </div>
    </div>

    <Filters />
    <BlogPost />
    <Footer />
  </div>
</template>

<script>
import Filters from '~/components/Home/Filters'
import BlogPost from '~/components/Home/BlogPost'
import Footer from '~/components/Home/Footer'

export default {
  components: {
    Filters,
    BlogPost,
    Footer
  }
}
</script>

<style scoped>
.home-container {
  background: #34495e;
  color: #272727;
  min-height: 100vh;
}
</style>
