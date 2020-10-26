<template>
    <div class="task">
        <div class="red">
            <h3>{{GetTodo(user, getDate()).length}} задачи</h3> 
        </div>
        <task 
            v-for = "task in GetTodo(user, getDate())"
            :key = "task.id" 
            :time = "task.time" 
            :title = "task.title"
            :ckeck = 'task.checked'
            :id = "task.id"
        />
    </div>
</template>

<script>
    import task from '@/components/task.vue';
    import { mapGetters } from 'vuex';
    export default {
        data() {
            return {
                user: 1
            }
        },
        components: {
            task,
        },
        computed: {
            ...mapGetters([
                'GetTodo',
                'GetNumberMonth'
            ])
        },
        methods: {
            getDate(){
                return `${this.$route.params.year}-${Number(this.GetNumberMonth(this.$route.params.month))+1}-${this.$route.params.day}`
            }
        }
    }
</script>

<style scoped>
.red {
    color: red;
}
</style>