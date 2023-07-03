<template>
    <base-layout :PageTitle="loadedMemory ?loadedMemory.title :'Loading...'" page="/memories">
    <h2 v-if="!loadedMemory">could not find a memory for the given id</h2>
    <memory-overview v-else :title="loadedMemory.title" 
    :image="loadedMemory.image" 
    :description="loadedMemory.description">
    
    </memory-overview>
    </base-layout>
</template>
<script>
import MemoryOverview from '../components/memories/MemoryOverview.vue'
import BaseLayout from '../components/base/BaseLayout.vue'
export default {
  components: {
     BaseLayout ,
     MemoryOverview
     },
    data() {
        return{
memoryId:this.$route.params.id
        }
    },
    computed:{
loadedMemory(){
  return this.$store.getters.memory(this.memoryId);
}
    },
    watch:{
      '$router'(currentRoute){
 this.memoryId=currentRoute.params.id
      }
    }
}
</script>
<style scoped>
h2{
  text-align: center;
}
</style>