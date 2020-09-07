<template>
    <div>
        <div v-if="edit">
            <edittask :title="title" />
        </div>
        <div v-else @click="edit = !edit">
            <viewtask :title="title" :time='time' :ckeck='ckeck'/>
        </div>
        <hr>
        <button @click="edit = !edit">Click</button>
    </div>
</template>

<script>
    import viewtask from '@/components/viewtask.vue';
    import edittask from '@/components/edittask.vue';
    export default {
        data() {
            return {
                edit: false
            }
        },
        props: {
            title: String,
            time: String,
            ckeck: Boolean
        },
        components: {
            viewtask,
            edittask
        },
    }
</script>

<style scoped>

</style>