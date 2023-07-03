<template>
    <ion-item :router-link="`/memories/${memo.id}`" >
<ion-thumbnail slot="start">
<ion-img :src="memo.image"></ion-img>
</ion-thumbnail>
<ion-label>
{{memo.title}}
</ion-label>
</ion-item>
</template>

<script>
import {IonItem,IonThumbnail,IonImg,IonLabel} from '@ionic/vue'
export default {
    props:["memo"],
components:{
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel
}
}
</script>