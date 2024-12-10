<template>
  <div class="parent">
    <h2>Ejercicio 3 - Comunicación entre componentes</h2>
    <p v-if="receivedMessage" class="received-message">Mensaje recibido: {{ receivedMessage }}</p>
    <Child @send-message="handleMessage" />
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: 'Parent',
  components: {
    Child
  },
  data() {
    return {
      receivedMessage: ''
    }
  },
  methods: {
    handleMessage(message) {
      if (message.trim()) {
        this.receivedMessage = message;
      }
    }
  }
}
</script>

<style scoped>
.parent {
  text-align: center;
  padding: 20px;
  background-color: #fafafa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 400px;
  margin: 20px auto;
}

h2 {
  font-size: 24px;
  color: #333;
}

.received-message {
  font-size: 18px;
  color: #333;
  background-color: #d1ffd6;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #4caf50;
  margin-top: 20px;
}
</style>
