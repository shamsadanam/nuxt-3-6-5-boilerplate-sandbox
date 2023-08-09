<script setup>
import { useUserStore } from "@/store/userStore.js";
import { storeToRefs } from "pinia";

// const { data: users, pending } = await useApiFetch('/users', {
//   method: "get",
//   query: {
//     delay: 3
//   },
//   server: false
// })

const userStore = useUserStore();
const { users, pending } = storeToRefs(userStore);

const handleGetUsers = async () => {
  await userStore.getUsers();
}

// onMounted(async () => {
//   await userStore.getUsers();
// });

</script>
<template>
  <div class="container mt-64">
    <button @click="handleGetUsers">Get Users</button>
    <div v-if="pending">
      Loading ...
    </div>
    <div v-else>
      <pre>{{ users }}</pre>
    </div>
  </div>
</template>


<style lang="scss">
.mt-64{
  margin-top: 4rem;
}
.container{
  max-width: 80%;
  margin: 0 auto;
}
</style>