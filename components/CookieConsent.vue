<template>
  <div 
    v-if="isInitialized && showBanner" 
    class="fixed bottom-0 w-full bg-yellow-300 text-neutral-900 p-5 z-50"
    style="box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);"
  >
    <p> 
      Diese Webseite verwendet Cookies, um sicherzustellen, 
      dass Sie die beste Erfahrung auf unserer Webseite erhalten. 
      Weitere Informationen finden Sie in unserer 
      <NuxtLink to="/datenschutzerklaerung" class="underline">Datenschutzerklärung</NuxtLink>.
    </p>
    <div class="mt-5 flex gap-5">
      <button 
        @click="acceptAll"
        class="bg-white text-black px-4 py-2 rounded-md"
      >
        Alle akzeptieren
      </button>
      <button @click="showPreferences = true">Einstellungen</button>
    </div>
    <div v-if="showPreferences" class="mt-5 flex flex-col">
      <h2 class="font-semibold mb-3">Cookie-Einstellungen</h2>
      <label class="py-1">
        <input type="checkbox" v-model="preferences.necessary" disabled checked>
        Notwendige Cookies
      </label>
      <label class="py-1">
        <input type="checkbox" v-model="preferences.functional">
        Funktionale Cookies
      </label>
      <label class="py-1">
        <input type="checkbox" v-model="preferences.analytics">
        Analytische Cookies
      </label>
      <button 
        @click="savePreferences"
        class="bg-white text-black px-4 py-2 rounded-md mt-5 self-start"
      >
        Einstellungen speichern
      </button>
    </div>
  </div>
</template>

<script setup>
import Cookies from 'js-cookie';

const isInitialized = ref(false); 
const showBanner = ref(true);
const showPreferences = ref(false);
const preferences = ref({
  necessary: true,
  functional: false,
  analytics: false,
});

const acceptAll = () => {
  preferences.value = {
    necessary: true,
    functional: true,
    analytics: true,
  };
  savePreferences();
};

const savePreferences = () => {
  Cookies.set('cookieConsent', JSON.stringify(preferences.value), { expires: 365 });
  showBanner.value = false;
};

if (Cookies.get('cookieConsent')) {
  const savedPreferences = JSON.parse(Cookies.get('cookieConsent'));
  Object.assign(preferences.value, savedPreferences);
}

onBeforeMount(() =>{
  const cookieConsent = Cookies.get('cookieConsent');
  if (cookieConsent) {
    showBanner.value = false;
  } 
  isInitialized.value = true;
})
</script>
