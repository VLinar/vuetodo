<template>
  <div :class="[ckeck ? 'ckecked' : '', 'flex']">
    <div class="ch">
      <input
        type="checkbox"
        :checked="ckeck ? true : false"
        @click="checkededit(id)"
      />
    </div>
    <div class="tasktitle" @click="editfunc()">
      <h4>{{ time }}</h4>
      <div class="tasktext">
        {{ title }}
      </div>
    </div>
    <div class="dlt">
      <span class="dltspan" @click="actionview = !actionview">...</span>
    </div>
    <div class="action" v-if="actionview">
      <span @click="editfunc()">Редактировать</span>
      <span @click="deletedtask(id)">Удалить</span>
    </div>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    props: {
      id: Number,
      title: String,
      time: String,
      ckeck: Boolean,
      editfunc: Function,
    },
    data() {
      return {
        actionview: false,
      };
    },
    computed: {},
    methods: {
      ...mapActions(["checkededit", "deletedtask"]),
    },
  };
</script>

<style scoped>
  .flex {
    display: flex;
    padding: 5px;
    flex-direction: row;
    position: relative;
  }
  .flex:hover {
    background: #c7c7c73d;
    border-radius: 5px;
  }
  .line {
    text-decoration: line-through;
  }
  h4 {
    margin: 2px 0px;
  }
  .ckecked {
    color: gray !important;
  }
  .ckecked .tasktitle {
    text-decoration: line-through;
  }
  .ch input {
    /* margin: 0px 5px; */
    margin: 5px 5px 0px 5px;
  }
  .dlt {
    width: auto;
  }
  .dlt span {
    cursor: pointer;
    display: none;
    justify-content: flex-end;
  }

  .flex:hover .dlt span {
    display: flex;
  }
  .tasktext {
    /* min-width: 271px;*/
    min-width: 269px;
    max-width: 270px;
  }
  .action {
    position: absolute;
    padding: 10px;
    background: #e9dadade;
    border-radius: 5px;
    right: -110px;
    top: 28px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
  }
  input[type="checkbox"] {
    cursor: pointer;
  }
</style>
