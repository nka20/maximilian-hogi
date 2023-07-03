<template>
<base-layout PageTitle="all memories">
<template v-slot:actions-end>
<ion-button router-link="/memories/add">
<ion-icon slot="icon-only" :icon="add"></ion-icon>
</ion-button>
</template>
<memories-list :memories="memories"></memories-list>
</base-layout>

</template>
<script>
import {IonButton,IonIcon} from '@ionic/vue';
import {add} from 'ionicons/icons'
import MemoriesList from '../components/memories/MemoriesList.vue';
export default {
    computed:{
memories(){
    return this.$store.getters.memories
}
    },
    data(){
return{
    add
}
    },
    components:{
         MemoriesList,
         IonButton,
         IonIcon
    }
}//on peut ecrire ailleur le code css sur le dossier theme 
</script>
<style scoped>

</style>
