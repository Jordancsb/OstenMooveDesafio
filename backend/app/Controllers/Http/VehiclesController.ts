import Application from '@ioc:Adonis/Core/Application'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Vehicle from 'App/Models/Vehicle'
import { v4 as uuidv4 } from 'uuid'

export default class VehiclesController {
  private validationOptions = {
    types: ['image'],
    size: '2mb',
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const image = request.file('image', this.validationOptions)

    if (image) {
      const imageName = `${uuidv4()}.${image.extname}`

      await image.move(Application.tmpPath('uploads'), {
        name: imageName,
      })
      body.image = imageName
    }

    const vehicle = await Vehicle.create(body)

    response.status(201)

    return {
      message: 'Veiculo cadastrado',
      data: vehicle,
    }
  }
  public async index() {
    const vehicle = await Vehicle.all()
    return vehicle
  }

  public async show({ params }: HttpContextContract) {
    const vehicle = await Vehicle.findByOrFail('id', params.id)
    return vehicle
  }

  public async destroy({ params }: HttpContextContract) {
    const vehicle = await Vehicle.findByOrFail('id', params.id)
    await vehicle.delete()
    return {
      message: `Veiculo ${vehicle.id} excluido com Sucesso!`,
    }
  }
  public async update({ params, request }: HttpContextContract) {
    const body = request.body()
    const vehicle = await Vehicle.findByOrFail('id', params.id)

    vehicle.marca = body.marca
    vehicle.modelo = body.modelo

    const image = request.file('image', this.validationOptions)

    if (vehicle.image !== body.image || !vehicle.image) {
      if (image) {
        const imageName = `${uuidv4()}.${image.extname}`

        await image.move(Application.tmpPath('uploads'), {
          name: imageName,
        })
        vehicle.image = imageName
      }
    }
    await vehicle.save()

    return {
      message: `Veiculo ${vehicle.id} atualizado com sucesso!`,
    }
  }
}
