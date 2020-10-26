<template>
    <div>
        <input type="time" value="08:00" ref="time">
        <input type="text" value="Test task" ref="task">
        <!-- <button @click="edittododate(1,2)">OK</button>    -->
         <button @click="test">OK</button>          
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        props:{
            editfunc: Function
        },
        methods:{
            ...mapActions([
                'edittododate'
            ]),
            test(){
                let test1 = {}
                test1.time = this.$refs.time.value
                test1.task = this.$refs.task.value
                this.edittododate(test1)
            }
        }
    }
</script>

<style scoped>

</style>