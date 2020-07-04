<template>
  <div class="flex-1 ml-10">
    <HotelCard
      v-for="(hotel, index) in hotels"
      :id="hotel.id"
      :key="index"
      :name="hotel.name"
      :type="hotel.type"
      :image-url="hotel.image_url"
      :prices="hotel.prices"
      :stars="hotel.stars"
      :location="hotel.location"
      :room-available="hotels.room_available"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import HotelCard from '~/components/shared/HotelCard'

export default {
  components: {
    HotelCard
  },
  computed: {
    hotels() {
      return this.$store.state.searchStore.hotels
    }
  },
  mounted() {
    this.search()
  },
  methods: {
    ...mapActions({
      search: 'searchStore/search'
    })
  }
}
</script>

<style>
</style>