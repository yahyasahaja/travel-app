<template>
  <div class="bg-white rounded-lg container px-5 mt-10 mx-auto">
    <div class="flex">
      <div class="p-5 flex-1">
        <h2 class="py-4 text-md font-bold">Start Traveling</h2>
        <v-text-field
          prepend-icon="place"
          type="text"
          label="Search city or home stay"
          filled
          shaped
          required
        />
        <div class="flex">
          <v-text-field
            prepend-icon="place"
            type="text"
            label="Search city or home stay"
            filled
            shaped
            required
            class="mr-5"
          />
          <v-text-field
            prepend-icon="place"
            type="text"
            label="Search city or home stay"
            filled
            shaped
            required
          />
        </div>
      </div>

      <div class="p-5 flex-1">
        <h2 class="py-4 text-md font-bold">Filters</h2>
        <v-text-field
          prepend-icon="place"
          type="text"
          label="Search city or home stay"
          filled
          shaped
          required
        />
        <div class="flex">
          <v-text-field
            prepend-icon="place"
            type="text"
            label="Search city or home stay"
            filled
            shaped
            required
            class="mr-5"
          />
          <v-text-field
            prepend-icon="place"
            type="text"
            label="Search city or home stay"
            filled
            shaped
            required
          />
        </div>
      </div>
    </div>
    <v-btn block type="submit" color="primary" link to="/login">
      Search
    </v-btn>
  </div>
</template>
