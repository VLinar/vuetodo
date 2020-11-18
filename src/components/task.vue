<template>
  <div>
    <edittask
      :title="title"
      v-if="edit"
      :time="time"
      :editfunc="this.editchange"
      :id="id"
    />
    <viewtask
      v-else
      :title="title"
      :time="time"
      :ckeck="ckeck"
      :editfunc="this.editchange"
      :id="id"
    />
  </div>
</template>

<script>
  import viewtask from "@/components/viewtask.vue";
  import edittask from "@/components/edittask.vue";
  export default {
    data() {
      return {
        edit: false,
      };
    },
    props: {
      id: Number,
      title: String,
      time: String,
      ckeck: Boolean,
    },
    components: {
      viewtask,
      edittask,
    },
    methods: {
      editchange() {
        this.edit = !this.edit;
      },
    },
  };
</script>

<style scoped>
  div {
    margin: 5px 0px;
    margin-right: 5px;
    min-width: 310px;
  }
</style>
