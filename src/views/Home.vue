<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div
        class="bg-red-600 h-full"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque aut vero sit, corporis aliquam velit, soluta necessitatibus quaerat exercitationem voluptatum temporibus obcaecati magnam suscipit. Recusandae, veniam similique. Culpa, distinctio maxime?</div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
</script>

<style scoped>
</style>