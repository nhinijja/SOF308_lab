<!-- <template>
  <div>
    <h3>Bình luận</h3>
    <form @submit.prevent="addComment">
      <textarea
        v-model="newComment"
        placeholder="Nhập bình luận"
        class="form-control mb-3"
      />
      <button
        type="submit"
        class="btn btn-primary"
      >
        Gửi
      </button>
    </form>
    <ul class="list-group mt-3">
      <li
        v-for="(comment, index) in comments"
        :key="index"
        class="list-group-item"
      >
        {{ comment }}
      </li>
    </ul>
    <button
      class="btn btn-secondary mt-3"
      @click="$emit('logout')"
    >
      Đăng xuất
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const comments = ref([]);
const newComment = ref("");

const addComment = () => {
  if (newComment.value.trim() !== "") {
    comments.value.push(newComment.value);
    newComment.value = "";
  }
};
</script> -->
