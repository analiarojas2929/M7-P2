<template>
  <div class="child">
    <input 
      v-model="message" 
      type="text" 
      placeholder="Escribe un mensaje"
      class="message-input"
    >
    <button @click="sendMessage" class="send-button" :disabled="!message.trim()">Enviar mensaje</button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    sendMessage() {
      if (this.message.trim()) {
        this.$emit('send-message', this.message)
        this.message = ''
      }
    }
  }
}
</script>

<style scoped>
.child {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.message-input {
  width: 80%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border 0.3s ease;
}

.message-input:focus {
  border-color: #4caf50;
}

.send-button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.send-button:hover {
  background-color: #45a049;
}

.send-button:disabled {
  background-color: #b0b0b0;
  cursor: not-allowed;
}
</style>
