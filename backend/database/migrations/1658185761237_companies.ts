import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'companies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id")
      table.string("razao").notNullable()
      table.string("fantasia")
      table.string("cnpj")
      table.string("rua")
      table.string("numero")
      table.string("complemento")
      table.string("bairro")
      table.string("cidade")
      table.string("estado")
      table.string("telefone")
      table.timestamp("created_at", { useTz: true })
      table.timestamp("updated_at", { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
