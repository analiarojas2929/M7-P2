<template>
  <div class="counter">
    <h2 class="title">Ejercicio 1 - Counter con Vuex</h2>
    <div class="counter-display">
      <p class="counter-text">Contador: {{ counter }}</p>
    </div>
    <div class="counter-controls">
      <button @click="increment" class="control-button increment">Incrementar</button>
      <button @click="decrement" class="control-button decrement">Decrementar</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Counter',
  computed: {
    ...mapGetters(['getCounter']),
    counter() {
      return this.getCounter
    }
  },
  methods: {
    ...mapActions(['increment', 'decrement'])
  }
}
</script>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: #f4f7fb;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 320px;
  margin: 20px auto;
}

.title {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.counter-display {
  margin-bottom: 30px;
}

.counter-text {
  font-size: 28px;
  font-weight: bold;
  color: #444;
}

.counter-controls {
  display: flex;
  gap: 20px;
}

.control-button {
  padding: 12px 24px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.increment {
  background-color: #4CAF50;
  color: white;
}

.increment:hover {
  background-color: #45a049;
}

.decrement {
  background-color: #f44336;
  color: white;
}

.decrement:hover {
  background-color: #d32f2f;
}
</style>
