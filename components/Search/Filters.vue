<template>
  <div class="max-w-xs flex-1">
    <FilterCard>
      <div class="text-base font-bold mb-5">Filter by Stars</div>
      <v-checkbox v-model="star1" class="shrink mr-0 mt-0" label="3 Stars"></v-checkbox>
      <v-checkbox v-model="star2" class="shrink mr-0 mt-0" label="4 Stars"></v-checkbox>
      <v-checkbox v-model="star3" class="shrink mr-0 mt-0" label="5 Stars"></v-checkbox>
    </FilterCard>

    <FilterCard>
      <div class="text-base font-bold mb-5">Filter by Facility</div>
      <v-checkbox v-model="star1" class="shrink mr-0 mt-0" label="Facility"></v-checkbox>
      <v-checkbox v-model="star2" class="shrink mr-0 mt-0" label="4 Stars"></v-checkbox>
      <v-checkbox v-model="star3" class="shrink mr-0 mt-0" label="5 Stars"></v-checkbox>
    </FilterCard>

    <FilterCard>
      <div class="text-base font-bold mb-5">Filter by Stars</div>
      <v-checkbox v-model="star1" class="shrink mr-0 mt-0" label="3 Stars"></v-checkbox>
      <v-checkbox v-model="star2" class="shrink mr-0 mt-0" label="4 Stars"></v-checkbox>
      <v-checkbox v-model="star3" class="shrink mr-0 mt-0" label="5 Stars"></v-checkbox>
    </FilterCard>

    <FilterCard>
      <div class="text-base font-bold mb-5">Filter by Stars</div>
      <v-checkbox v-model="star1" class="shrink mr-0 mt-0" label="3 Stars"></v-checkbox>
      <v-checkbox v-model="star2" class="shrink mr-0 mt-0" label="4 Stars"></v-checkbox>
      <v-checkbox v-model="star3" class="shrink mr-0 mt-0" label="5 Stars"></v-checkbox>
    </FilterCard>
  </div>
</template>

<script>
import FilterCard from '~/components/shared/FilterCard'
export default {
  components: {
    FilterCard
  },
  data() {
    return {
      // Stars
      star1: false,
      star2: false,
      star3: false,
      // Facilities
      facilityAc: false,
      facilityWifi: false,
      facilityPool: false,
      // Reservation Policies
      reservationPolicyFreeCancelation: false,
      reservationPolicyBookWithoutCreditCard: false,
      reservationPolicyNoRepayment: false,
      // Meals
      mealsBreakfast: false,
      // Property Type
      propertyTypeResort: false,
      propertyTypeHotel: false,
      propertyTypeCapsule: false,
      // Chain
      chainRedDorz: false,
      chainOyo: false,
      chainSantika: false,
      chainIbis: false
    }
  }
}
</script>

<style>
</style>