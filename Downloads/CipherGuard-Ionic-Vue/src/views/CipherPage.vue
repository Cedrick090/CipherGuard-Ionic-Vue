<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start"><ion-back-button default-href="/home"/></ion-buttons>
        <ion-title>{{ isCaesar ? 'Caesar Cipher' : 'Vigenère Cipher' }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="page">
        <div class="segment">
          <ion-segment v-model="mode">
            <ion-segment-button value="encrypt">Encrypt</ion-segment-button>
            <ion-segment-button value="decrypt">Decrypt</ion-segment-button>
          </ion-segment>
        </div>

        <label class="section-label">Message</label>
        <ion-textarea v-model="message" class="input-box" :placeholder="mode==='encrypt'?'Enter your message...':'Enter encrypted message...'" :auto-grow="true" rows="5"/>

        <template v-if="isCaesar">
          <label class="section-label">Shift Value</label>
          <ion-item class="input-box">
            <ion-input v-model.number="shift" type="number"/>
            <ion-button fill="clear" @click="shift--">−</ion-button>
            <ion-button fill="clear" @click="shift++">+</ion-button>
          </ion-item>
        </template>

        <template v-else>
          <label class="section-label">Key</label>
          <ion-input v-model="key" class="input-box" placeholder="Enter keyword..."/>
        </template>

        <ion-button expand="block" class="gradient-btn" @click="runCipher">
          🔒 {{ mode==='encrypt' ? 'Encrypt' : 'Decrypt' }}
        </ion-button>
        <ion-button expand="block" fill="outline" class="outline-btn" @click="clearAll">🗑 Clear</ion-button>

        <div style="margin-top:22px">
          <label class="section-label">Result</label>
          <div class="result">{{ result || 'Encrypted message will appear here...' }}</div>
          <ion-button v-if="result" fill="clear" size="small" @click="copyResult">📋 Copy Result</ion-button>
        </div>

        <div v-if="success" class="badge" style="margin-top:10px">✓ Message {{mode}}ed successfully!</div>
      </div>
      <BottomNav />
    </ion-content>
  </ion-page>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { IonPage,IonHeader,IonToolbar,IonButtons,IonBackButton,IonTitle,IonContent,IonSegment,IonSegmentButton,IonTextarea,IonItem,IonInput,IonButton } from '@ionic/vue'
import BottomNav from '../components/BottomNav.vue'

const route=useRoute()
const isCaesar=computed(()=>route.params.type==='caesar')
const mode=ref('encrypt'), message=ref(''), result=ref(''), shift=ref(3), key=ref('KEY'), success=ref(false)

function caesar(text,n){
  return [...text].map(c=>{
    if(!/[a-z]/i.test(c)) return c
    const base=c===c.toUpperCase()?65:97
    return String.fromCharCode(((c.charCodeAt(0)-base+n)%26+26)%26+base)
  }).join('')
}
function vigenere(text,k,decrypt=false){
  k=k.toUpperCase().replace(/[^A-Z]/g,'')
  if(!k) return text
  let i=0
  return [...text].map(c=>{
    if(!/[a-z]/i.test(c)) return c
    const base=c===c.toUpperCase()?65:97
    const n=(k.charCodeAt(i++%k.length)-65)*(decrypt?-1:1)
    return String.fromCharCode(((c.charCodeAt(0)-base+n)%26+26)%26+base)
  }).join('')
}
function runCipher(){
  success.value=false
  if(!message.value.trim()){result.value='Please enter a message.';return}
  result.value=isCaesar.value ? caesar(message.value,mode.value==='encrypt'?Number(shift.value):-Number(shift.value)) : vigenere(message.value,key.value,mode.value==='decrypt')
  success.value=true
  const history=JSON.parse(localStorage.getItem('cipherHistory')||'[]')
  history.unshift({type:isCaesar.value?'Caesar Cipher':'Vigenère Cipher',message:message.value,result:result.value,key:isCaesar.value?`Shift: ${shift.value}`:`Key: ${key.value}`,date:new Date().toLocaleString()})
  localStorage.setItem('cipherHistory',JSON.stringify(history.slice(0,20)))
}
async function copyResult(){ await navigator.clipboard?.writeText(result.value) }
function clearAll(){message.value='';result.value='';success.value=false}
</script>