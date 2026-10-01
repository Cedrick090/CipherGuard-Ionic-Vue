<template>
  <ion-page>
    <ion-header><ion-toolbar><ion-title>History</ion-title><ion-buttons slot="end"><ion-button @click="clear">🗑</ion-button></ion-buttons></ion-toolbar></ion-header>
    <ion-content>
      <div class="page">
        <div v-if="items.length===0" class="card" style="text-align:center">
          <div style="font-size:42px">🕐</div><h3>No history yet</h3><p class="muted">Your encrypted messages will appear here.</p>
        </div>
        <div v-for="(item,i) in items" :key="i" class="card">
          <div style="display:flex;align-items:center;gap:12px">
            <div class="feature-icon" :class="item.type.startsWith('Caesar')?'purple':'green'">{{item.type.startsWith('Caesar')?'↻':'🔑'}}</div>
            <div style="flex:1">
              <b>{{item.type}}</b>
              <div class="muted" style="font-size:11px;margin-top:4px">{{item.message}} → {{item.result}}</div>
              <div class="muted" style="font-size:10px;margin-top:5px">{{item.key}} · {{item.date}}</div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav active="history"/>
    </ion-content>
  </ion-page>
</template>
<script setup>
import { ref } from 'vue'
import { IonPage,IonHeader,IonToolbar,IonTitle,IonContent,IonButtons,IonButton } from '@ionic/vue'
import BottomNav from '../components/BottomNav.vue'
const items=ref(JSON.parse(localStorage.getItem('cipherHistory')||'[]'))
function clear(){localStorage.removeItem('cipherHistory');items.value=[]}
</script>