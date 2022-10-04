
<template>
  <div class="content">
    <the-header :title="title" />
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
export default {
  name: "App",
  data() {
    return {
      title: "BoolPress",
    };
  },
  components: { TheHeader },
};
</script>

<style scoped>
</style>
