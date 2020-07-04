<template>
  <div class="w-full p-5 display-flex bg-white rounded-lg mb-5 hover:bg-blue-100 cursor-pointer">
    <div class="w-64 rounded-lg overflow-hidden">
      <img class="w-full h-full object-cover" :src="imageUrl" :alt="name" />
    </div>

    <div class="flex-1 ml-5">
      <div class="text-xl font-bold text-blue-600">{{ name }}</div>
      <div class="display-flex justify-between mt-3">
        <div>
          <div>
            <div
              class="inline-block text-xs font-bold bg-green-700 text-white px-2 py-1 rounded-lg"
            >{{ type }}</div>
          </div>
          <v-rating v-model="stars" readonly dense></v-rating>
          <div class="text-sm">{{location}}</div>
        </div>

        <div class="text-right">
          <div class="text-xs">{{adults}} Adults, {{nights}} Nights</div>
          <div class="text-lg font-bold">{{ price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatRupiah } from '~/assets/js/utils'
export default {
  props: {
    id: {
      type: Number,
      default: 1
    },
    imageUrl: {
      type: String,
      default: '/images/room.jpg'
    },
    name: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    prices: {
      type: Array,
      default() {
        return []
      }
    },
    location: {
      type: String,
      default: ''
    },
    stars: {
      type: Number,
      default: 0
    },
    roomAvailable: {
      type: Number,
      default: 0
    }
  },
  computed: {
    adults() {
      return this.prices.length > 0 ? this.prices[0].adults : 0
    },
    nights() {
      return this.prices.length > 0 ? this.prices[0].nights : 0
    },
    price() {
      return formatRupiah(this.prices.length > 0 ? this.prices[0].price : 0)
    }
  },
  mounted() {
    console.log(this.$props)
  }
}
</script>