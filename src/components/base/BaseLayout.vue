<template>
     <ion-page>
 <ion-header>
 <ion-toolbar>
 <ion-buttons>
 <ion-back-button :default-href="page"></ion-back-button>
  <ion-title>{{PageTitle}}</ion-title>
  <ion-buttons slot="end">
  <slot name="actions-end"></slot>
  </ion-buttons>
 </ion-buttons>
 </ion-toolbar>
 </ion-header>

 <ion-content>
<slot />
 </ion-content>
 </ion-page>
</template>
<script>
import {IonPage, IonHeader,IonToolbar,IonTitle,IonContent,IonBackButton,IonButtons} from '@ionic/vue'
export default {
    props:['PageTitle',"page"],
 components:{ 
 IonPage,
IonHeader,
IonToolbar,
 IonTitle,
IonContent,
IonBackButton,
IonButtons
          }
}
</script>
<style scoped>

</style>