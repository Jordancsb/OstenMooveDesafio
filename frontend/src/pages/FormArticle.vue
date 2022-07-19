<template>
  <q-page padding>
    <q-form
      @submit="onSubmit"
      class="column"
    >
      <q-input
          outlined
          v-model="form.razao"
          label="Razão Social"
          lazy-rules
          class="col-3 col-xs-12"
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
        />
      <q-input
          outlined
          v-model="form.fantasia"
          label="Nome Fantasia"
          lazy-rules
          class="col-lg-6 col-xs-12"
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
        />
      <q-input
          outlined
          v-model="form.cnpj"
          label="CNPJ com pontos, traços e barra"
          lazy-rules
          class="col-lg-6 col-xs-12"
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
          maxlength="19"
        />
      <q-input
          outlined
          v-model="form.rua"
          label="Rua"
          lazy-rules
          class="col-lg-6 col-xs-9"
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
        />
      <q-input
          outlined
          v-model="form.numero"
          label="Número"
          lazy-rules
          class="col-lg-6 col-xs-3"
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
          maxlength="6"
        />
      <q-input
          outlined
          v-model="form.complemento"
          label="Complemento"
          lazy-rules
          class="col-lg-6 col-xs-3"
          :rules="[ val => val && val.length >= 0]"
        />

      <q-input
          outlined
          v-model="form.bairro"
          label="Bairro"
          lazy-rules
          class="col-lg-6 col-xs-6"
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
        />
      <q-input
          outlined
          v-model="form.cidade"
          label="Cidade"
          lazy-rules
          class="col-lg-6 col-xs-2"
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
        />
      <q-input
          outlined
          v-model="form.estado"
          label="UF"
          lazy-rules
          class="col-lg-6 col-xs-1"
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
        />
      <q-input
          outlined
          v-model="form.telefone"
          label="Telefone"
          type="phone"
          lazy-rules
          class="col-lg-6 col-xs-3"
          :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
          maxlength="11"
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
      razao: '',
      fantasia: '',
      cnpj: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      telefone: ''
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
        $q.notify({ message: 'Atualizado com Sucesso', icon: 'check', color: 'positive' })
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
