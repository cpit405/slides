<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  count: {
    default: 0,
  },
})

const counter = ref(props.count)
</script>


<template>
    <!-- This is the component's HTML template. -->
  </template>
  
  <script>
    export default {
      // This is the component's JavaScript code.
    }
  </script>
  </style>