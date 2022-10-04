<template>
  <section id="posts-list">
    <h2 class="my-3">Posts</h2>

    <!-- AppLoader -->
    <app-loader v-if="isLoading" />

    <!-- Error -->

    <div
      class="alert alert-danger alert-dismissible fade show"
      role="alert"
      v-else-if="error"
    >
      <p>{{ error }}</p>
      <button type="button" class="close" @click="error = null">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div v-else>
      <div v-if="posts.length">
        <div class="row justify-content-between">
          <post-card v-for="post in posts" :key="post.id" :post="post" />
        </div>
      </div>
      <h5 v-else>Non ci sono posts</h5>
    </div>
  </section>
</template>

<script>
import AppLoader from "../AppLoader.vue";
import PostCard from "./PostCard.vue";
export default {
  name: "PostsList",
  data() {
    return {
      posts: [],
      isLoading: false,
      error: null,
    };
  },
  components: { PostCard, AppLoader },
  methods: {
    fetchPosts() {
      this.isLoading = true;
      axios
        .get("http://localhost:8000/api/posts")
        .then((res) => {
          this.posts = res.data;
        })
        .catch((err) => {
          this.error = "Errore durante il fetch dei post";
        })
        .then(() => {
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>
<style scoped lang="scss">
</style>