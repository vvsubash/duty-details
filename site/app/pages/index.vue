<script setup lang="ts">

</script>

<template>
  <section>
    <h1>Hello World</h1>
    <p>This is a test page</p>
    <div class="card">
      <div class="flex width">
        <fieldset class="width">
          <label>Point</label>
          <select>
            <option value="1">Indus</option>
            <option value="2">Main Gate</option>
            <option value="3">Gangavaram</option>
          </select>
        </fieldset>
        <fieldset class="width">
          <label>Shift</label>
          <select>
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
          </select>
        </fieldset>
      </div>
      <fieldset>
        <label>Name</label>
        <input type="text" />
      </fieldset>
      <button class="widht">Submit</button>
    </div>
  </section>
</template>

<style scoped>

</style>