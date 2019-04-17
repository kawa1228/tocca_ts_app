<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">{{ title }}</v-card-title>

        <v-card-text>
          {{ description }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" flat="flat" @click="$emit('close')">
            {{ desagreeText }}
          </v-btn>

          <v-btn color="green darken-1" flat="flat" @click="$emit('execute')">
            {{ agreeText }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    agreeText: {
      type: String,
      default: 'はい'
    },
    desagreeText: {
      type: String,
      default: 'いいえ'
    }
  }
}
</script>
