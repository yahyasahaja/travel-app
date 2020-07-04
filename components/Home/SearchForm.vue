<template>
  <div class="bg-white rounded-lg container px-5 mt-10 mx-auto">
    <div class="flex">
      <div class="p-5 flex-1">
        <h2 class="pt-4 text-lg font-bold">Find deals on hotels, homes, and much more...</h2>
        <div class="pt-2 pb-3 text-sm">From cozy country homes to funky city apartments</div>
        <div class="flex">
          <v-text-field
            prepend-icon="place"
            type="text"
            label="Search city or home stay"
            class="mr-5"
            filled
            shaped
            required
          />
          <v-menu
            ref="dateMenu"
            v-model="dateMenu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="dateRangeText"
                label="Date"
                persistent-hint
                prepend-icon="event"
                v-bind="attrs"
                class="mr-5"
                filled
                shaped
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="dates" range no-title></v-date-picker>
          </v-menu>
          <v-menu
            ref="detailMenu"
            v-model="detailMenu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="detailInfo"
                label="Detail Innfo"
                persistent-hint
                prepend-icon="person"
                v-bind="attrs"
                filled
                shaped
                v-on="on"
              ></v-text-field>
            </template>
            <div class="bg-white rounded-sm p-5">
              <IncreaseDecrease v-model="adult" :min="1" label="Adult"></IncreaseDecrease>
              <IncreaseDecrease v-model="children" :min="0" label="Children"></IncreaseDecrease>
              <IncreaseDecrease v-model="room" :min="1" label="Room"></IncreaseDecrease>
            </div>
          </v-menu>
        </div>
      </div>
    </div>
    <v-btn block type="submit" color="primary" link to="/search">Search</v-btn>
  </div>
</template>

<script>
import IncreaseDecrease from '../shared/IncreaseDecrease'

export default {
  components: {
    IncreaseDecrease
  },
  data: () => ({
    dates: ['2019-09-10', '2019-09-20'],
    dateMenu: false,
    detailMenu: false,
    adult: 1,
    children: 0,
    room: 1
  }),
  computed: {
    dateRangeText() {
      return this.dates.join(' ~ ')
    },
    detailInfo() {
      return `Adult ${this.adult}  ·  Children ${this.children}  ·  Rooms ${this.room}`
    }
  }
}
</script>