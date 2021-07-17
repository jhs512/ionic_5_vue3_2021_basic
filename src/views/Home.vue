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

      <main class="flex flex-col">
        <section class="mt-6 section section-write-todo">
          <hr class="mb-6" />
          <div class="con-padd">
            <ion-badge color="primary">
              <span>새 할일 등록</span>
            </ion-badge>
          </div>
          <ion-item>
            <ion-label position="stacked">새 할일</ion-label>
            <ion-input v-model="newTodoTitleRef"></ion-input>
          </ion-item>
          <div class="mt-4 btns con-padd">
            <ion-button size="small" @click="addNewTodo">
              <font-awesome-icon slot="start" icon="plus" />
              <span class="ml-1">할일 등록</span>
            </ion-button>
          </div>
        </section>

        <section class="mt-6 section section-todo-list">
          <hr class="mb-6" />
          <div class="con-padd">
            <ion-badge color="primary">
              <span>할일리스트</span>
            </ion-badge>
          </div>
          <ion-list>
            <ion-list-header>
              <ion-label>목록</ion-label>
            </ion-list-header>
            <ion-item v-for="todo in todoStore.latestTodos" :key="todo.id">
              <ion-label>{{ todo.title }}</ion-label>
              <ion-button slot="end" size="small" color="danger" @click="deleteTodo(todo)">
                <font-awesome-icon slot="start" icon="minus" />
                <span class="ml-1">삭제</span>
              </ion-button>
            </ion-item>
          </ion-list>
        </section>
      </main>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/store/todo';
import { IonBadge, IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { ref } from '@vue/reactivity';

const todoStore = useTodoStore()

const newTodoTitleRef = ref("");

function addNewTodo() {
  newTodoTitleRef.value = newTodoTitleRef.value.trim()

  if (newTodoTitleRef.value.length == 0) {
    alert('새 할일을 입력해주세요.');
    return;
  }

  todoStore.addTodo(newTodoTitleRef.value);
  newTodoTitleRef.value = '';
}

function deleteTodo(todo: Todo) {
  todoStore.deleteTodo(todo);
}
</script>

<style scoped>
</style>