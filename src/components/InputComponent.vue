<template>
  <div class="input-wrap">
    <label class="label"> {{ label }}</label>
    <input
      :type="type === 'password' ? 'password' : 'text'"
      :value="modelValue"
      :placeholder="placeHolder"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  fontSize: {
    type: String,
    default: "",
  },
  placeHolder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
});
</script>

<style scoped>
.input-wrap {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;
}
input {
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  font-weight: 400;
  height: 40px;
  width: 100%;
  border: 1px solid #e2e2e2;
  font-size: 13px;
  color: rgb(110, 110, 110);
}
input::placeholder {
  color: rgb(110, 110, 110, 0.5);
}
.label {
  font-size: 13px;
  color: #111122;
  font-weight: 500;
}
</style>
