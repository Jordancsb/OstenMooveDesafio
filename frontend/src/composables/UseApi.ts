import { api } from 'boot/axios'

export default function useApi (url: never) {
  const list = async () => {
    try {
      const { data } = await api.get(url)
      return data
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  const getById = async (id: number) => {
    try {
      const { data } = await api.get(`${url}/${id}`)
      return data
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  const post = async (form: never) => {
    try {
      const { data } = await api.post(url, form)
      return data
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  const update = async (form: any) => {
    try {
      const { data } = await api.put(`${url}/${form.id}`, form)
      return data
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  const remove = async (id: number) => {
    try {
      const { data } = await api.delete(`${url}/${id}`)
      return data
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  return {
    list,
    post,
    update,
    remove,
    getById
  }
}
