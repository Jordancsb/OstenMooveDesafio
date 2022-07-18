<template>
  <q-page padding>
    <q-form
      @submit="onSubmit"
      class="column"
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
import { ref, onMounted } from 'vue'
import postService from 'src/services/posts'
import { useQuasar } from 'quasar'
import { useRouter, useRoute } from 'vue-router'

export default ({
  name: 'FormArticle',
  setup () {
    const { post, getById, update } = postService()
    const $q = useQuasar()
    const router = useRouter()
    const route = useRoute()
    const form = ref({
      marca: '',
      modelo: '',
      ano: '',
      cor: ''
    })

    onMounted(async () => {
      if (route.params.id) {
        getPost(route.params.id)
      }
    })

    const getPost = async (id) => {
      try {
        const response = await getById(id)
        form.value = response
      } catch (err) {
        console.error(err)
      }
    }

    const onSubmit = async () => {
      try {
        if (!form.value.id) {
          await post(form.value)
        } else {
          await update(form.value)
        }
        $q.notify({ message: 'Cadastrado com Sucesso', icon: 'check', color: 'positive' })
        router.push({ name: 'home' })
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
