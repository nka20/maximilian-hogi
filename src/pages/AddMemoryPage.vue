<template>
    <base-layout PageTitle="Add memory" page="/memories">
<create-memory @save-memory="SaveMemory"></create-memory>
    </base-layout>
</template>
<script>
import CreateMemory from '../components/memories/CreateMemoryForm.vue';
export default {
components:{
    CreateMemory
},
methods:{
    SaveMemory(memoryData){
        this.$store.dispatch('addMemory',memoryData);
        this.$router.push('/memories');
    }
}
}
</script>