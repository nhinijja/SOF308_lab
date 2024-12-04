<template>
  <div>
    <h2>Danh sách bài viết</h2>
    <div
      v-for="(post, index) in posts"
      :key="index"
      class="post"
    >
      <h4 class="post-title">
        {{ post.title }}
      </h4>
      <h5 class="post-author">
        {{ post.author }}
      </h5>
      <p class="post-content">
        {{ post.content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 20px;
  margin: 15px 0;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.post-title {
  font-size: 1.5rem;
  color: #2c3e50;
}

.post-author {
  font-size: 1.2rem;
  color: #e74c3c;
}

.post-content {
  font-size: 1rem;
}
</style>
