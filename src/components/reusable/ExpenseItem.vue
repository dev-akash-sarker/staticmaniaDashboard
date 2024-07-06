<script setup>
defineProps({
  icon: String,
  title: String,
  msg: String,
  cost: String,
  color: String,
});

const getImageSrc = (icon) => {
  try {
    return import(`../assets/images/illustration/${icon}`);
  } catch (error) {
    console.error("Image not found:", error);
    return ""; // Return a placeholder or empty string if the image is not found
  }
};
</script>

<template>
  <div class="flex justify-between">
    <div class="flex justify-start items-center gap-[17px]">
      <div
        :style="`background-color: ${color}`"
        :class="`w-[48px] h-[48px]  rounded-full flex justify-center items-center`"
      >
        <img :src="getImageSrc(icon)" :alt="`${title}`" />
      </div>
      <div>
        <h5
          class="capitalize font-poppins_medium font-medium text-base text-primary_color"
        >
          {{ title }}
        </h5>
        <p
          class="mt-[4px] font-poppins_regular font-normal text-[14px] text-[#bdbbbb]"
        >
          {{ msg }}
        </p>
      </div>
    </div>
    <div
      class="font-poppins_semibold font-semibold text-base text-secondary_color"
    >
      {{ cost }}
    </div>
  </div>
</template>

<style scoped></style>
