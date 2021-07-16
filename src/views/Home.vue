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

      <div class="flex items-center justify-center h-full bg-red-600">
        <div>
          <font-awesome-icon icon="user-secret" class="text-4xl text-green-700 cursor-pointer" />
          <span @click="main.counter++;">{{ main.doubleCount }}</span>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useMainStore } from '@/store/main';

const main = useMainStore()
</script>

<style scoped>
</style>