import model from "../src/models/clientes.model";

describe('Testa a função getAllClients', () => {
  test('Se retorna um array de objetos com informações de clientes', async () => {
    const clients = await getAllClients();
  })
})