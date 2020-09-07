<template>
    <div>
        <input type="checkbox" name="" id="" :checked="ckeck ? true : false">
        <b>{{time}}</b>
        <span> {{title}}</span>                 
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            time: String,
            ckeck: Boolean
        }
    }
</script>

<style scoped>

</style>