<template>
  <ion-page>
    <ion-header><ion-toolbar><ion-title></ion-title></ion-toolbar></ion-header>
    <ion-content>
      <div class="page">
        <div style="display:flex;align-items:center;justify-content:space-between">
          <div>
            <div class="title">🛡️ Cipher<span style="color:#2f88ff">Guard</span></div>
            <div class="muted">Secure encryption made simple.</div>
          </div>
          <ion-button fill="clear" @click="go('/settings')">
            <ion-icon :icon="settingsOutline" />
          </ion-button>
        </div>

        <h2 style="margin-top:28px">Hello! 👋</h2>
        <p class="muted">Choose a cipher method to get started.</p>

        <div class="card" @click="go('/cipher/caesar')" style="cursor:pointer">
          <div style="display:flex;gap:14px;align-items:center">
            <div class="feature-icon purple">↻</div>
            <div style="flex:1">
              <b style="font-size:17px">Caesar Cipher</b>
              <p class="muted" style="margin:6px 0 0;font-size:12px">Shift each letter by a fixed number of positions.</p>
            </div>
            <ion-icon :icon="chevronForwardOutline" />
          </div>
        </div>

        <div class="card" @click="go('/cipher/vigenere')" style="cursor:pointer">
          <div style="display:flex;gap:14px;align-items:center">
            <div class="feature-icon green">🔑</div>
            <div style="flex:1">
              <b style="font-size:17px">Vigenère Cipher</b>
              <p class="muted" style="margin:6px 0 0;font-size:12px">Use a keyword for multi-shift encryption.</p>
            </div>
            <ion-icon :icon="chevronForwardOutline" />
          </div>
        </div>

        <h3 style="margin:24px 0 12px">Quick Actions</h3>
        <div class="quick-grid">
          <div class="quick" @click="go('/history')"><ion-icon :icon="timeOutline"/><br>History</div>
          <div class="quick"><ion-icon :icon="documentTextOutline"/><br>Saved</div>
          <div class="quick"><ion-icon :icon="informationCircleOutline"/><br>About</div>
          <div class="quick" @click="go('/settings')"><ion-icon :icon="settingsOutline"/><br>Settings</div>
        </div>
      </div>
      <BottomNav active="home"/>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { IonPage,IonHeader,IonToolbar,IonTitle,IonContent,IonButton,IonIcon } from '@ionic/vue'
import { settingsOutline, chevronForwardOutline, timeOutline, documentTextOutline, informationCircleOutline } from 'ionicons/icons'
import BottomNav from '../components/BottomNav.vue'
const router=useRouter()
const go=(p)=>router.push(p)
</script>