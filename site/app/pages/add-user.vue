<script setup>
import { ref } from "vue";

// Reactive state for each form field
const name = ref("");
const email = ref("");
const password = ref("");
const avatar = ref("");

// Function to submit the form and add a user
async function addUser() {
  try {
    // Send a POST request to the /api/user endpoint
    const response = await $fetch("/api/user", {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        password: password.value,
        avatar: avatar.value,
      },
    });
    console.log("User added successfully:", response);
    // Reset the form fields after successful submission
    name.value = "";
    email.value = "";
    password.value = "";
    avatar.value = "";
  } catch (error) {
    console.error("Error adding user:", error);
  }
}
</script>

<template>
  <section>
    <h1>Add User</h1>
    <div >
      <div>
        <label for="name">Name:</label>
        <input id="name" type="text" v-model="name" placeholder="Name" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" placeholder="Email" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div>
        <label for="avatar">Avatar:</label>
        <input id="avatar" type="text" v-model="avatar" placeholder="Avatar" />
      </div>
      <button  @click="addUser">Add User</button>
    </div>
  </section>
</template>

<style scoped></style>
