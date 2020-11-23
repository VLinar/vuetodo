<template>
  <div class="main">
    <input type="text" placeholder="Логин" />
    <input type="password" placeholder="Пароль" />
    <button @click="$router.push(url)">Войти</button>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    data() {
      return {
        url: "/test",
      };
    },
    computed: {
      ...mapGetters(["Getmonth"]),
    },
    created() {
      let date = new Date();
      let todaymonth = this.Getmonth.filter((e) => e.id === date.getMonth());
      this.url =
        "/" +
        date.getFullYear() +
        "/" +
        todaymonth.map((e) => {
          return e.title;
        }) +
        "/" +
        date.getDate();
      console.log(todaymonth);
    },
  };
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    width: 250px;
    padding: 50px;
    border-radius: 10px;
  }
  .main input,
  .main button {
    margin-bottom: 5px;
    padding: 5px;
    border: 1px solid;
    border-radius: 5px;
  }
</style>
