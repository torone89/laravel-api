
<template>
  <div class="content">
    <the-header :title="title" />
    <main class="container my-3">
      <posts-list />
    </main>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import PostsList from "./posts/PostsList.vue";

export default {
  name: "App",
  data() {
    return {
      title: "BoolPress",
    };
  },
  components: { TheHeader, PostsList },
};
</script
    PostList>

<style scoped>
</style>
