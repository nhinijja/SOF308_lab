<template>
  <div>
    <CreateList @add-post="addPost" />

    <PostList :posts="posts" />
  </div>
</template>
<script>
export default {
  name: "Lab5Bai4",
};
</script>
<script setup>
import { ref } from "vue";
import PostList from "./PostList.vue";
import CreateList from "./CreateList.vue";

const posts = ref([]);

function addPost(post) {
  posts.value.push(post);
}
</script>

<style scoped>
div {
  margin: 20px;
}
</style>
