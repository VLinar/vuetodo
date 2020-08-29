<template>
    <div class="calblock">
        <div class="head">
            <div class="monthhead">
                <h2>Август </h2>
                <select name="" id="">
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
            <div>
                <svg class="bi bi-arrow-left-circle-fill" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.646 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L6.207 7.5H11a.5.5 0 0 1 0 1H6.207l2.147 2.146z"/>
                </svg>
                <svg class="bi bi-arrow-right-circle-fill" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8.354 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-2.147 2.146z"/>
                </svg>
            </div>
        </div>
        <calendar />
    </div>
</template>

<script>
    import calendar from '@/components/calendar.vue';
    export default {
        components: {
            calendar,
        },
    }
</script>

<style scoped>
    .calblock{
        padding: 15px 20px;
    }
    .head{
        display: grid;
        grid-template-columns: 2fr 1fr!important;
        align-items: center;
        padding: 0px 10px;

    }
    .head h2{
        margin: 10px 0px;
    }
    .head div{
        text-align: left;
    }
    .head div:last-child{
        text-align: end;
    }
    .head svg{
        margin: 3px;
    }
    .monthhead {
        display: flex;
        align-items: center;
    }
    select{
        height: fit-content;
        display: block;
        font-size: 1.5em;
        margin: 0px 5px;
    }
    option {
        font-size: 0.7em;
    }
</style>