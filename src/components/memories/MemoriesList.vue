<template>
    <ion-list>
<memory-list-item v-for="memo in memories" :key="memo.id" :memo="memo"></memory-list-item>
</ion-list>
</template>
<script>
import {IonList} from '@ionic/vue'
import MemoryListItem from './MemoryListItem.vue'
export default {
    props:['memories'],
  components:{
    IonList,
    MemoryListItem
  }
}
</script>
