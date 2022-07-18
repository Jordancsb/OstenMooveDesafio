<template>
  <q-page padding>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="column "
    >
      <q-input
          outlined
          v-model="form.marca"
          label="Marca"
          lazy-rules
          class="col-lg-6 col-xs-12"
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
        />
      <q-input
          outlined
          v-model="form.modelo"
          label="Modelo"
          lazy-rules
          class="col-lg-6 col-xs-12"
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
        />
      <q-input
          outlined
          v-model="form.ano"
          label="Ano"
          lazy-rules
          class="col-lg-6 col-xs-12"
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
        />
      <q-input
          outlined
          v-model="form.cor"
          label="Cor"
          lazy-rules
          class="col-lg-6 col-xs-12"
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
        />
        <div class="col-12">
          <q-btn label="Salvar" color="primary" type="submit"/>
          <q-btn label="Cancelar" :to="{ name: 'home' }"/>
        </div>
      </q-form>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import postService from 'src/services/posts'
import { useQuasar } from 'quasar'

export default ({
  name: 'FormArticle',
  setup () {
    const { post } = postService()
    const $q = useQuasar()
    const form = ref({
      marca: '',
      modelo: '',
      ano: '',
      cor: ''
    })

    const onSubmit = async () => {
      try {
        await post(form.value)
      } catch (err) {
        console.error(err)
      }
    }

    return {
      form,
      onSubmit
    }
  }

})

</script>
