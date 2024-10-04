<script>
export default {
  data() {
    return {
      status: 'normal', // problem ?
    }
  },
  computed: {
    statusText() {
      return this.status === 'normal' ? 'All Systems Normal' : 'Issues Detected'
    },
    statusClass() {
      return this.status === 'normal' ? 'status-normal' : 'status-issues'
    },
  },
}
</script>

<template>
  <div class="system-status">
    <span :class="statusClass">{{ statusText }}</span>
  </div>
</template>

<style scoped>
.system-status {
  font-size: 0.75rem;
  font-family: 'poppins', serif;
  text-transform: uppercase;
}

.status-normal {
  color: #29be3a;
  text-shadow:
    0 0 8px #29be3a,
    0 0 20px #29be3a,
    0 0 30px #29be3a,
    0 0 40px #29be3a;
}

.status-issues {
  color: #ff0033;
  text-shadow:
    0 0 8px #ff0033,
    0 0 20px #ff0033,
    0 0 30px #ff0033,
    0 0 40px #ff0033;
}
</style>
