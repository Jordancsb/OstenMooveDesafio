import useApi from 'src/composables/UseApi'

export default function postService () {
  const { list, post, update, remove, getById } = useApi('api/companies')

  return {
    list,
    post,
    update,
    remove,
    getById
  }
}
