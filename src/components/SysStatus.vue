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
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  animation: flicker 3s infinite;
}

@keyframes flicker {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.status-normal {
  color: #29be3a;
  text-shadow:
    0 0 8px #29be3a,
    0 0 20px #29be3a,
    0 0 30px #29be3a,
    0 0 40px #29be3a;
  animation: glow 1.5s ease-in-out infinite alternate;
}

.status-issues {
  color: #ff0033;
  text-shadow:
    0 0 8px #ff0033,
    0 0 20px #ff0033,
    0 0 30px #ff0033,
    0 0 40px #ff0033;
  animation: glitch 1.5s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow:
      0 0 8px #22832d,
      0 0 20px #22832d,
      0 0 30px #22832d,
      0 0 40px #22832d;
  }
  to {
    text-shadow:
      0 0 15px #22832d,
      0 0 30px #22832d,
      0 0 50px #22832d,
      0 0 60px #22832d;
  }
}

@keyframes glitch {
  0% {
    text-shadow:
      1px 1px 2px #ff0033,
      -2px -2px 3px #ff0033;
    transform: skewX(5deg);
  }
  20% {
    text-shadow:
      -2px 1px 3px #ff0033,
      2px -1px 3px #ff0033;
    transform: skewX(-3deg);
  }
  40% {
    text-shadow:
      2px 1px 5px #ff0033,
      -1px -2px 3px #ff0033;
    transform: skewX(1deg);
  }
  60% {
    text-shadow:
      -1px -1px 3px #ff0033,
      2px 2px 4px #ff0033;
    transform: skewX(-2deg);
  }
  80% {
    text-shadow:
      1px -2px 4px #ff0033,
      -1px 2px 4px #ff0033;
    transform: skewX(3deg);
  }
  100% {
    text-shadow:
      -2px 2px 3px #ff0033,
      1px -1px 2px #ff0033;
    transform: skewX(-1deg);
  }
}
</style>
