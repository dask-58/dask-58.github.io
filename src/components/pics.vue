<script setup>
const images = [
  '/peng.png',
  '/1.webp',
  '/20231016_141443.jpg',
  '/E25.gif',
  '/leo.jpg',
  '/EruditeSurgery58_biker_on_a_cafe_racer_cyberpunk_lights_and_las_b60e54ce-6db7-4a1b-9016-2c115012730b.png',
  '/mathpfp.png',
  '/pfp.jpeg',
  '/mtwall.jpeg',
  '/terback.jpg',
]
</script>

<template>
  <div class="masonry-grid">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="masonry-item"
    >
      <img :src="image" :alt="`Image ${index + 1}`">
    </div>
  </div>
</template>

  <style scoped>
  .masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.masonry-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.masonry-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
}

.masonry-item img:hover {
  transform: scale(1.05);
}
</style>
