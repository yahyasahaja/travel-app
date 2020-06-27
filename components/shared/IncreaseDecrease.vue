<template>
  <div class="flex justify-between align-center p-1">
    <div class="text-md">{{ label }}</div>
    <div class="display-flex align-center">
      <div
        class="text-lg justify-center align-center c-button"
        :class="{ 'c-button__disabled': isAtMinimum }"
        :disabled="isAtMinimum"
        @click="decrease"
      >-</div>
      <div class="px-3">{{ value }}</div>
      <div class="text-lg justify-center align-center c-button" @click="increase">+</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Label'
    },
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isAtMinimum() {
      return this.value === this.min
    }
  },
  methods: {
    decrease() {
      let result = this.value - 1
      if (result < this.min) result = this.min
      this.$emit('input', result)
    },
    increase() {
      this.$emit('input', this.value + 1)
    }
  }
}
</script>

<style scoped lang="scss">
.c-button {
  border: 1px solid #1976d2;
  color: #1976d2;
  width: 30px;
  height: 30px;
  display: flex;
  transition: 0.3s;
  cursor: pointer;
  user-select: none;

  &:hover:not([disabled]) {
    background: #1976d228;
  }

  &:active:not([disabled]) {
    opacity: 0.5;
    transition: 0.01s;
  }

  &[disabled] {
    border: 1px solid #c0c0c0;
    color: #c0c0c0;
    cursor: default;
  }
}
</style>