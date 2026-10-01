<template>
  <div class="bottom-nav">
    <button class="nav-btn" :class="{active:active==='home'}" @click="go('/home')"><ion-icon :icon="homeOutline"/><span>Home</span></button>
    <button class="nav-btn" :class="{active:active==='history'}" @click="go('/history')"><ion-icon :icon="timeOutline"/><span>History</span></button>
    <button class="nav-btn" :class="{active:active==='saved'}"><ion-icon :icon="bookmarkOutline"/><span>Saved</span></button>
    <button class="nav-btn" :class="{active:active==='settings'}" @click="go('/settings')"><ion-icon :icon="settingsOutline"/><span>Settings</span></button>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { IonIcon } from '@ionic/vue'
import { homeOutline,timeOutline,bookmarkOutline,settingsOutline } from 'ionicons/icons'
defineProps({active:String})
const router=useRouter()
const go=(p)=>router.push(p)
</script>