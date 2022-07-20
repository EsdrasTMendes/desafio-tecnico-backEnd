interface IcreateInvestiment {
  status: number, 
  response: {
    codCliente: number, 
    codAtivo: number,
    qtdeAtivo: number
  },
}

export default IcreateInvestiment;