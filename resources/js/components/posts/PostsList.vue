<template>
  <section id="posts-list">
    <h2 class="my-3">Posts</h2>
    <app-loader v-if="true" />
    <div v-else>
      <div v-if="posts.length">
        <post-card v-for="post in posts" :key="post.id" :post="post" />
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
    };
  },
  components: { PostCard, AppLoader },
  methods: {
    fetchPosts() {
      axios
        .get("http://localhost:8000/api/posts")
        .then((res) => {
          this.posts = res.data;
        })
        .catch((err) => {
          console.error(err);
        })
        .then(() => {
          console.log("Chiamata terminata");
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