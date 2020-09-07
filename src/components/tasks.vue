<template>
    <div class="task">
        <div class="red">
            <h3>4 задачи</h3> 
        </div>
        <task 
            v-for = "task in GetTodo(user)"
            :key = "task.id" 
            :time = "task.time" 
            :title = "task.title"
            :ckeck = 'task.checked' 
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
                'GetTodo'
            ])
        }
    }
</script>

<style scoped>

</style>