import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company'


export default class CompaniesController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const company = await Company.create(body)

    response.status(201)

    return {
      message: 'Empresa cadastrada',
      data: company,
    }
  }
  public async index() {
    const company = await Company.all()
    return company
  }
  public async show({ params }: HttpContextContract) {
    const company = await Company.findByOrFail('id', params.id)
    return company
  }
  public async destroy({ params }: HttpContextContract) {
    const company = await Company.findByOrFail('id', params.id)
    await company.delete()
    return {
      message: `Empresa ${company.id} foi excluida com Sucesso!`,
    }
  }
  public async update({ params, request }: HttpContextContract) {
    const body = request.body()
    const company = await Company.findByOrFail('id', params.id)

    company.fantasia = body.fantasia
    company.razao = body.razao

    await company.save()

    return {
      message: `Empresa ${company.id} atualizada com sucesso!`,
    }
  }
}
