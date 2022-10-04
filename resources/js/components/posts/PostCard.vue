<template>
  <div class="card" style="width: 18rem">
    <!-- <img class="card-img-top" src="{{post.image}}" alt="Card image cap" /> -->
    <div class="card-body">
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