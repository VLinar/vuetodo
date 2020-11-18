<template>
  <div>
    <textarea
      cols="30"
      rows="3"
      maxlength="255"
      placeholder="Добавить задачу"
      v-model="areatext"
    ></textarea>
    <input type="time" v-model="time" />
    <div class="btnposition">
      <button>Добавить</button>
      <button @click="addkey">Отменить</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        areatext: "",
        time: "",
      };
    },
    props: {
      addkey: Function,
    },
  };
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
  }
  textarea {
    padding: 5px;
    resize: none;
    margin: 5px 0px;
    border-radius: 5px;
  }
  input {
    margin: 5px 0px;
    border: 0.5px solid;
    border-radius: 5px;
    padding: 5px;
  }
  .btnposition {
    display: flex;
    flex-direction: row;
    margin: 5px 0px;
  }
  button {
    margin-right: 5px;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    color: white;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  button:first-child {
    background: #28a745;
    border-color: #28a745;
  }
  button:last-child {
    background: red;
    border-color: red;
  }
</style>
