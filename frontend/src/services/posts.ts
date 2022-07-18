import useApi from 'src/composables/UseApi'

export default function postService () {
  const { list, post, update, remove } = useApi('api/vehicles')

  return {
    list,
    post,
    update,
    remove
  }
}
