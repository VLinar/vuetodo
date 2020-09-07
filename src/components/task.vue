<template>
    <div>
        <edittask :title="title" v-if="edit" :time='time' :editfunc='this.editchange'/>
        <viewtask v-else :title="title" :time='time' :ckeck='ckeck' :editfunc='this.editchange'/>
        
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
        methods:{
            editchange(){
                this.edit = !this.edit
            }
        }
    }
</script>

<style scoped>

</style>