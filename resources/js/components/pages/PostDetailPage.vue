<template>
  <div id="post-detail-page">
    <h1>Dettaglio post</h1>
    <AppLoader v-if="isLoading" />
    <PostCard v-else-if="!isLoading && post" :post="post" />

    <div
      class="row justify-content-between"
      v-for="post in posts"
      :key="post.id"
    >
      <div class="card col-3 m-4 p-0">
        <img
          class="card-img-top img-fluid"
          :src="post.image"
          alt="Card image cap"
        />
        <div class="card-body">
          <div class="row justify-content-between">
            <div class="col">
              <h1>{{ post.id }}</h1>
            </div>
            <div class="col float-right">
              <router-link
                :to="{ name: 'post-detail', params: { id: post.id } }"
                class="btn btn-primary btn-sm"
                ><i class="fa-solid fa-eye"></i> Vedi</router-link
              >
            </div>
          </div>
          <h5 class="card-title">{{ post.title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            Autore: {{ post.user.name }}
          </h6>
          <h6 class="card-subtitle mb-2 text-muted">
            Pubblicato il: {{ publishedAt }}
          </h6>
          <p class="card-text">
            {{ post.content }}
          </p>
        </div>

        <!-- <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div> -->

        <div
          class="card-footer d-flex justify-content-between align-items-center"
        >
          <span
            class="badge badge-pill"
            :class="`badge-${post.category ? post.category.color : 'light'}`"
          >
            {{ post.category ? post.category.label : "nessuna" }}</span
          >

          <div>
            <span
              v-for="tag in post.tags"
              :key="tag.id"
              class="badge mr-1 text-white"
              :style="`background-color:${tag.color}`"
            >
              {{ tag.label }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">
        {{ post.title }}
      </h5>
      <h6 class="card-subtitle mb-2 text-muted">
        Pubblicato il: {{ publishedAt }}
      </h6>
      <p>
        {{ post.content }}
      </p>
    </div>
  </div> -->
  </div>
</template>

<script>
import PostCard from "../posts/PostCard.vue";
import AppLoader from "../AppLoader.vue";
export default {
  name: "PostDetailPage",
  components: { AppLoader, PostCard },
  data() {
    return {
      post: null,
      isLoading: false,
    };
  },
  methods: {
    fetchPost() {
      this.isLoading = true;
      axios
        .get("http://localhost:8000/api/posts/" + this.$route.params.id)
        .then((res) => {
          this.post = res.data;
        })
        .catch((err) => {
          console.err(err);
        })
        .then(() => {
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.fetchPost();
  },
};
</script>