
<template>
  <div class="content">
    <the-header :title="title" />
    <main class="container my-3"></main>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";

export default {
  name: App,
  components: { TheHeader },
  name: "App",
  data() {
    return {
      title: "BoolPress",
    };
  },
};
</script>
  
