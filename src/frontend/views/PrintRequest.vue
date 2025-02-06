<script setup>
// import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
import DefaultLayout from '@/frontend/layouts/DefaultLayout.vue'

const handleSubmit = async (credentials) => {
  try {
    const printRequestResponse = await axios.post('/wp-json/vueapp/v1/send_email', credentials)
    console.log('Email sent successfully')
    console.log(printRequestResponse.data.message)
  } catch (error) {
    console.error('Error sending email:', error)
  }
}
</script>
<template>
  <DefaultLayout>
    <section class="print-options">
      <FormKit type="form" @submit="handleSubmit">
        <FormKit
          type="text"
          label="Name"
          name="name"
          validation="required"
          placeholder="Enter your full name"
        />
        <FormKit
          type="text"
          label="Street Address"
          name="street"
          validation="required"
          placeholder="123 Street Name"
        />
        <FormKit type="text" label="City" name="city" validation="required" placeholder="City" />
        <FormKit
          type="text"
          label="Postcode"
          name="postcode"
          validation="required|length:6,8"
          placeholder="AB12 3CD"
        />
      </FormKit>
    </section>
  </DefaultLayout>
</template>
<style scoped lang="scss">
.print-options {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: auto;
}
</style>
