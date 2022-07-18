<template>
    <q-page padding>
      <q-table
        title="Cadastro de Veiculos"
        :rows="posts"
        :columns="columns"
        row-key="name"
      >
      <template v-slot:top>
            <q-btn color="primary" label="Novo" :to="{ name: 'formArticle' }" />
            <q-space />
            <q-input borderless dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
          </q-input>
      </template>

      <template v-slot:body-cell-actions="props">
         <q-td :props="props">
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

export default ({
  name: 'IndexPage',
  setup () {
    const posts = ref([])
    const { list, remove } = postService()
    const columns = [
      { name: 'id', field: 'id', align: 'center', label: 'id', sortable: true },
      { name: 'Modelo', field: 'modelo', align: 'center', label: 'Modelo', sortable: true },
      { name: 'Marca', field: 'marca', align: 'center', label: 'Marca', sortable: true },
      { name: 'Ano', field: 'marca', align: 'center', label: 'Marca', sortable: true },
      { name: 'Cor', field: 'cor', align: 'center', label: 'Marca', sortable: true },
      { name: 'actions', field: 'actions', align: 'right', label: 'Açoes' }
    ]
    const $q = useQuasar()

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

    return {
      posts,
      columns,
      handleDeletePost
    }
  }
})
</script>
