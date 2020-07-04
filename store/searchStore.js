import { fetchHotels } from '~/api/hotelsApi'

export const state = () => ({
  hotels: [],
  pagination: {
    totalCount: 0,
    page: 0
  },
  filters: {
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
})

export const TYPES = {
  ADD_HOTELS: 'ADD_HOTELS',
  RESET_SEARCH: 'RESET_SEARCH',
  TOGGLE_FILTER: 'TOGGLE_FILTER',
  UPDATE_PAGINATION: 'UPDATE_PAGINATION'
}

export const mutations = {
  [TYPES.ADD_HOTELS](state, hotels) {
    state.hotels.push(...hotels)
  },
  [TYPES.TOGGLE_FILTER](state, filterName) {
    state.filters[filterName] = !state.filters[filterName]
  },
  [TYPES.RESET_SEARCH](state) {
    state.hotels = []
  },
  [TYPES.UPDATE_PAGINATION](state, { key, value }) {
    state.pagination[key] = value
  }
}

export const actions = {
  async search({ commit }) {
    try {
      const {
        data: { data: hotels, meta }
      } = await fetchHotels()

      commit(TYPES.ADD_HOTELS, hotels)
      commit(TYPES.UPDATE_PAGINATION, { totalCount: meta.totalCount })
    } catch (err) {}
  },
  toggleFilter({ commit }, filterName) {
    commit(TYPES.TOGGLE_FILTER, filterName)
  },
  resetSearch({ commit }) {
    commit(TYPES.RESET_SEARCH)
  }
}
