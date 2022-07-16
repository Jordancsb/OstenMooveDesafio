<template>
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :rows="posts"
        :columns="columns"
        row-key="name"
      />
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import postService from 'src/services/posts'

export default ({
  name: 'IndexPage',
  setup () {
    const posts = ref([])
    const { list } = postService()
    const columns = [
      { name: 'id', field: 'id', align: 'center', label: 'id', sortable: true },
      { name: 'title', field: 'title', align: 'center', label: 'Título', sortable: true },
      { name: 'author', field: 'author', align: 'center', label: 'Autor', sortable: true }
    ]

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

    return {
      posts,
      columns
    }
  }
})
</script>
