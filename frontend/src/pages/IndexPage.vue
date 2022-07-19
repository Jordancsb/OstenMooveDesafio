<template>
    <q-page padding>
      <q-table
        title="Cadastro de Veiculos"
        :rows="posts"
        :columns="columns"
        row-key="name"
        :filter="filter"
      >
      <template v-slot:top>
            <q-btn color="primary" label="Novo" :to="{ name: 'formArticle' }" />
            <q-space />
            <q-input border dense debounce="300" color="" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
          </q-input>
      </template>

      <template v-slot:body-cell-actions="props">
         <q-td :props="props" class="q-gutter-sm">
          <q-btn icon="edit" color="info" dense size="sm" @click="handleEditPost(props.row.id)" />
          <q-btn icon="delete" color="negative" dense size="sm" @click="handleDeletePost(props.row.id)" />
         </q-td>
      </template>
      </q-table>
    </q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import postService from 'src/services/posts'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

export default ({
  name: 'IndexPage',
  setup () {
    const posts = ref([])
    const filter = ref('')
    const { list, remove } = postService()
    const columns = [
      { name: 'id', field: 'id', align: 'center', label: 'id', sortable: true },
      { name: 'razao', field: 'razao', align: 'center', label: 'Razão Social', sortable: true },
      { name: 'fantasia', field: 'fantasia', align: 'center', label: 'Nome Fantasia', sortable: true },
      { name: 'cnpj', field: 'cnpj', align: 'center', label: 'CNPJ', sortable: true },
      { name: 'rua', field: 'rua', align: 'center', label: 'Rua', sortable: true },
      { name: 'numero', field: 'numero', align: 'center', label: 'Número', sortable: true },
      { name: 'bairro', field: 'bairro', align: 'center', label: 'Bairro', sortable: true },
      { name: 'cidade', field: 'cidade', align: 'center', label: 'Cidade', sortable: true },
      { name: 'estado', field: 'estado', align: 'center', label: 'UF', sortable: true },
      { name: 'telefone', field: 'telefone', align: 'center', label: 'Telefone', sortable: true },
      { name: 'created_at', field: 'created_at', align: 'center', label: 'Criado em:', sortable: true },
      { name: 'updated_at', field: 'updated_at', align: 'center', label: 'Alterado em:', sortable: true },
      { name: 'actions', field: 'actions', align: 'right', label: 'Açoes' }
    ]
    const $q = useQuasar()
    const router = useRouter()

    onMounted(() => {
      getPosts()
    })

    const getPosts = async () => {
      try {
        const data = await list()
        posts.value = data
      } catch (err) {
        console.log(err)
      }
    }

    const handleDeletePost = async (id) => {
      try {
        $q.dialog({
          title: 'Remover',
          message: 'Deseja realmente remover o item',
          cancel: true,
          persistent: true
        }).onOk(async () => {
          await remove(id)
          $q.notify({ message: 'Apagado com Sucesso', icon: 'check', color: 'positive' })
          await getPosts()
        })
      } catch (err) {
        $q.notify({ message: 'Erro ao apagar!', icon: 'times', color: 'negative' })
      }
    }

    const handleEditPost = (id) => {
      router.push({ name: 'formArticle', params: { id } })
    }

    return {
      posts,
      columns,
      handleDeletePost,
      handleEditPost,
      filter
    }
  }
})
</script>
