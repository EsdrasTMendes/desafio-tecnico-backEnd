const orderBuilder = (codCliente: number, saldoConta: number, saldoCustodia:number ) => {
  return {
    codCliente,
    saldoConta,
    saldoCustodia,
  }
}

export default orderBuilder;