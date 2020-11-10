<template>
    <div class="edt">
        <input type="time" value="08:00" ref="time">
        <textarea value="Test task" cols="30" rows="2" ref="task" placeholder="text"></textarea>   
        <button @click="updatetask">OK</button>          
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        props:{
            editfunc: Function,
            id: Number
        },
        methods:{
            ...mapActions([
                'edittododate'
            ]),
            updatetask(){
                let payload = {}
                
                payload.id = this.id
                payload.time = this.$refs.time.value
                payload.task = this.$refs.task.value

                this.edittododate(payload),
                // Перевод в режим просмотра
                this.editfunc()
            }
        }
    }
</script>

<style scoped>
.edt {
    display: flex;
    flex-direction: column;
    padding: 0px 8px;
}

.edt input{
    width: 23%;
}
</style>