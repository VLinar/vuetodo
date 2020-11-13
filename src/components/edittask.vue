<template>
    <div class="edt">
        <input type="time" v-model="inputtime">
        <textarea v-model="areatext" cols="30" rows="3" placeholder="Text"></textarea>   
        <button @click="updatetask">Изменить</button>      
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                areatext: '',
                inputtime: ''
            }
        },
        props:{
            editfunc: Function,
            id: Number,
            title: String,
            time: String
        },
        created(){
            this.areatext = this.title
            this.inputtime = this.time
        },
        methods:{
            ...mapActions([
                'edittododate'
            ]),
            updatetask(){
                let payload = {}
    
                payload.id = this.id
                payload.time = this.inputtime
                payload.task = this.areatext

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
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

.edt input, .edt textarea, .edt button {
    margin: 2px;
    padding: 5px;
    border-radius: 5px;
}

input[type="time"]{
    width: 23%;
}

button {
    background: #28a745;
    color: white;
    cursor: pointer;
}
</style>