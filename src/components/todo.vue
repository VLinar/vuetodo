<template>
    <div class="todo">
        <date />
        <todo />
        <div class="addbutton">
            <b>
                + добавление задач
            </b>
        </div>
    </div>
</template>

<script>
    import todo from '@/components/tasks.vue';
    import date from '@/components/date.vue';
    export default {
        components: {
            date,
            todo
        },
    }
</script>

<style scoped>
    .todo {
        text-align: left;
        padding: 15px;
        /* padding-right: 40px; */
        border-right: 1px solid rgb(200, 201, 207);
    }
    .todo span{
        font-size: 12px;
    }
    .todo h2{
        margin: 10px 0px;
    }
    .task{
        justify-content: left!important;
        align-items: center; 
        display: block;
        padding-bottom: 25px;
        min-height: 230px;
    }
    .addbutton {
        text-align: center;
    }
    .red{
        color: red;
    }
    .addbutton {
        padding: 10px 15px;
        background: rgb(200, 201, 207);
        width: fit-content;
        margin: auto;
        border-radius: 10px;
    }
    .pagination{
        text-align: center;
        padding-bottom: 20px;
    }
</style>