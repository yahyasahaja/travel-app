<template>
  <div class="home-container">
    <HeaderMenu />
    <SearchForm />
    <BlogPost />
    <Footer />
  </div>
</template>

<script>
import SearchForm from '~/components/Home/SearchForm'
import BlogPost from '~/components/Home/BlogPost'
import Footer from '~/components/shared/Footer'
import HeaderMenu from '~/components/shared/HeaderMenu'

export default {
  components: {
    SearchForm,
    BlogPost,
    Footer,
    HeaderMenu
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
