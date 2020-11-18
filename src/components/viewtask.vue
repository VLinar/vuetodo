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
      <!-- <span class="dltspan" @click="actionview = !actionview">...</span> -->
      <span @click="editfunc()">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-pen-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"
          />
        </svg>
      </span>
      <span @click="deletedtask(id)">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-trash"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
          />
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
      </span>
    </div>
    <!-- <div class="action" v-if="actionview">
      <span @click="editfunc()">Редактировать</span>
      <span @click="deletedtask(id)">Удалить</span>
    </div> -->
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
