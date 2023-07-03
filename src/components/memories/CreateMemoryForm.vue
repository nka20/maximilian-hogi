<template>
    <form class="ion-padding" @submit.prevent="submitForm">
        <ion-list>
            <ion-item>
                <ion-label position="floating">Title</ion-label>
                <ion-input type="text" required v-model="enteredTitle"/>
            </ion-item>
        
            <ion-item>
                <ion-label position="floating">Image Url</ion-label>
                <ion-input type="url" required v-model="enteredimageUrl"/>
            </ion-item>
        
            <ion-item>
                <ion-label position="floating">Description</ion-label>
               <ion-textarea rows="5" v-model="enteredDescription"></ion-textarea>
            </ion-item>
            <ion-button type="submit" expand="block">Save</ion-button><!--expand=full fill="outline"-->
        </ion-list>
        </form>
</template>

<script>
import {IonList,IonItem,IonLabel,IonInput,IonTextarea,IonButton} from '@ionic/vue';
export default {
    emits:['save-memory'],
    components:{
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton
},
data(){
    return {
        enteredTitle:'',
        enteredImage:'',
        enteredDescription:'',
    };
},
methods:{
    submitForm(){
        const memoryData={
            title:this.enteredTitle,
            imageUrl:this.enteredimageUrl,
            description:this.enteredDescription,
        };
        this.$emit('save-memory',memoryData)
    }
}
}
</script>


<!-- appeler la photo sur gallerie avec capacitor

         <ion-item>
                <ion-thumbnail slot="start">
    <img src="" />
</ion-thumbnail>
    <ion-button type="button" fill="clear" @click="takePhoto">
        <ion-icon slot="start" :icon="camera"></ion-icon>
        Take Photo
    </ion-button>
            </ion-item>
-->