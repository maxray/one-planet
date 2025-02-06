<script setup>
const emit = defineEmits(['confirm', 'cancel'])

const confirm = () => {
  emit('confirm')
}

const cancel = () => {
  emit('cancel')
}
</script>
<template>
  <div class="opl-modal-overlay" @click.self="cancel">
    <div class="opl-modal">
      <div class="opl-modal-header">
        <slot name="header">Confirm Action</slot>
      </div>
      <div class="opl-modal-body">
        <slot>Are you sure you want to do this?</slot>
      </div>
      <div class="opl-modal-footer">
        <button class="c-btn c-btn--danger" @click="confirm">Delete</button>
        <button class="c-btn c-btn--primary" @click="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.opl-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
}

.opl-modal {
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.opl-modal-header {
  margin-bottom: 20px;
  font-size: 1.2em;
}

.opl-modal-body {
  margin-bottom: 20px;
}

.opl-modal-footer {
  text-align: right;
  display: flex;
  justify-content: space-between;
}

.opl-modal-footer button {
  margin-left: 10px;
}
</style>
