<template>
  <div class="custom m-5">
    <h2>Bình luận bài viết</h2>
    <div class="card">
      <img src="../../assets/eat-clean.png" alt="hình ảnh" />
      <div class="card-body">
        <h3 class="card-title">8 loại rau củ quả giàu canxi</h3>
        <p class="cad-text">
          Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để
          bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có
          8 loại rau củ giàu canxi...
        </p>
      </div>
    </div>
    <br />
    <form @submit.prevent="submitComment">
      <div class="mt-3">
        <textarea
          id="commentText"
          cols="60"
          v-model="commentText"
          placeholder="Nhập bình luận của bạn"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-success">Gửi bình luận</button>
    </form>
    <br />
    <div v-if="comments.length" class="jg mt-3">
      <h5>Danh sách các bình luận:</h5>
      <ul style="list-style-type: circle">
        <li v-for="(comment, index) in comments" :key="index">
          <p>
            <strong>{{ comment.name }}</strong
            >: {{ comment.text }}
          </p>
        </li>
      </ul>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "commentComponent",
};
</script>
<script setup>
import { ref } from "vue";

// eslint-disable-next-line no-undef
const props = defineProps(["username"]);
const commentText = ref("");
const comments = ref([]);

function submitComment() {
  if (commentText.value) {
    comments.value.push({
      name: props.username,
      text: commentText.value,
    });

    commentText.value = "";
  }
}
</script>
<style scoped>
.custom {
  width: 900px;
}
form {
  background-color: white;
}

.jg {
  background-color: white;
  margin-bottom: 25px;
  padding: 5px;
  border-radius: 5px;
}
</style>
