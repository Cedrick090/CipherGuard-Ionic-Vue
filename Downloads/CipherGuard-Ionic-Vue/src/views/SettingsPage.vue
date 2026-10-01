<template>
  <ion-page>
    <ion-header><ion-toolbar><ion-buttons slot="start"><ion-back-button default-href="/home"/></ion-buttons><ion-title>Settings</ion-title></ion-toolbar></ion-header>
    <ion-content>
      <div class="page">
        <h3>App Preferences</h3>
        <div class="card">
          <div class="setting-row"><span>🌙 Theme</span><b>Dark</b></div>
          <div class="setting-row"><span>🌐 Language</span><b>English</b></div>
        </div>
        <h3>Security</h3>
        <div class="card">
          <div class="setting-row"><span>🗑 Clear History</span><ion-button fill="clear" @click="clear">Clear</ion-button></div>
          <div class="setting-row"><span>🛡 Privacy</span><b>Local</b></div>
        </div>
        <h3>About</h3>
        <div class="card">
          <b>CipherGuard</b><p class="muted">Version 1.0.0</p>
          <p class="muted">A simple educational Caesar and Vigenère encryption app.</p>
        </div>
      </div>
      <BottomNav active="settings"/>
    </ion-content>
  </ion-page>
</template>
<script setup>
import { IonPage,IonHeader,IonToolbar,IonButtons,IonBackButton,IonTitle,IonContent,IonButton } from '@ionic/vue'
import BottomNav from '../components/BottomNav.vue'
function clear(){localStorage.removeItem('cipherHistory')}
</script>