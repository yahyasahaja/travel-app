<template>
  <div class="search-container">
    <HeaderMenu />
    <SearchForm />

    <div class="display-flex flex-wrap container px-5 mt-10 mx-auto">
      <Filters />
      <HotelResults />
    </div>

    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Filters from '~/components/Search/Filters'
import SearchForm from '~/components/Home/SearchForm'
import Footer from '~/components/shared/Footer'
import HeaderMenu from '~/components/shared/HeaderMenu'
import HotelResults from '~/components/Search/HotelResults'

export default {
  components: {
    SearchForm,
    Filters,
    Footer,
    HeaderMenu,
    HotelResults
  },
  computed: {
    hotels() {
      return this.$store.state.searchStore.hotels
    }
  },
  destroyed() {
    this.resetSearch()
  },
  methods: {
    ...mapActions({
      search: 'searchStore/search',
      resetSearch: 'searchStore/resetSearch'
    })
  }
}
</script>

<style scoped>
.search-container {
  background: #34495e;
  color: #272727;
  min-height: 100vh;
}
</style>
