<template>
  <ion-page>
    <ion-header mode="ios" color="tertiary">
      <ion-toolbar>
        <ion-title>Consent Form Style</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list color="tertiary">
        <ion-item lines="full" button @click="() => router.push('/consent-0')">
          <ion-label>Style 1</ion-label>
        </ion-item>
        <ion-item lines="full" button @click="() => router.push('/consent-1')">
          <ion-label>Style 2</ion-label>
        </ion-item>
        <ion-item lines="full" button @click="() => router.push('/consent-2')">
          <ion-label>Style 3</ion-label>
        </ion-item>
        <ion-item lines="full" button @click="() => router.push('/consent-3')">
          <ion-label style="text-decoration: line-through;">Style 4</ion-label>
        </ion-item>
        <ion-item lines="full" button @click="() => router.push('/consent-4')">
          <ion-label>Style 5</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { useRouter } from "vue-router";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonLabel,
  IonItem
} from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonLabel,
    IonItem
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
#container strong {
  font-size: 20px;
  line-height: 26px;
}
#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}
#container a {
  text-decoration: none;
}
</style>