<template>
  <div class="card col-3 m-4 p-0">
    <img
      class="card-img-top img-fluid"
      :src="post.image"
      alt="Card image cap"
    />
    <div class="card-body">
      <h1>{{ post.id }}</h1>
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">
        {{ post.content }}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Pubblicato il: {{ publishedAt }}</li>
      <!-- <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Vestibulum at eros</li> -->
    </ul>

    <!-- <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div> -->

    <div class="card-footer d-flex justify-content-between align-items-center">
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
</template>

<script>
export default {
  name: "PostCard",

  props: { post: Object },
  methods: {},
  computed: {
    publishedAt() {
      const postDate = new Date(this.post.created_at);
      let day = postDate.getDate();
      let month = postDate.getMonth() + 1;
      const year = postDate.getFullYear();
      if (day < 10) day = "0" + day;
      if (month < 10) month = "0" + month;
      return `${day}/${month}/${year}`;
    },
  },
};
</script>
<style scoped lang="scss">
</style>