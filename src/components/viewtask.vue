<template>
    <div class="flex">
        <input type="checkbox" name="" id="" :checked="ckeck ? true : false">
        <div :class="ckeck? 'line': ''" @click="editfunc()">
            <b>{{time}}</b>
            <span> {{title}}</span>     
        </div>
                    
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            time: String,
            ckeck: Boolean,
            editfunc: Function
        }
    }
</script>

<style scoped>
    .flex{
        display: flex;
        flex-direction: row;
    }
    .line{
        text-decoration: line-through;
    }
</style>