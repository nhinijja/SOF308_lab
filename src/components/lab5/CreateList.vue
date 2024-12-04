<template>
  <div>
    <h2>Tạo bài viết mới</h2>
    <input
      v-model="title"
      placeholder="Tiêu đề bài viết"
    >
    <input
      v-model="author"
      placeholder="Tên tác giả"
    >
    <textarea
      v-model="content"
      placeholder="Nội dung bài viết"
    />
    <button @click="submitPost">
      Đăng bài
    </button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["add-post"]);

const title = ref("");
const content = ref("");
const author = ref("");

// Hàm xử lý khi nhấn nút "Đăng bài"
function submitPost() {
  if (title.value && content.value && author.value) {
    // Tạo bài viết mới
    const newPost = {
      title: title.value,
      content: content.value,
      author: author.value,
    };

    // Phát sự kiện "add-post"
    emit("add-post", newPost);

    // Reset form
    title.value = "";
    content.value = "";
    author.value = "";
  } else {
    alert("Vui lòng điền đầy đủ thông tin bài viết!");
  }
}
</script>

<style scoped>
input,
textarea {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
</style>
