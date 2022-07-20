const Terceirizada = [
  { id: 1, nome: 'Tássio Freire', salario: 1500 },
  { id: 2, nome: 'Marina de Paula', salario: 1500 }
]
const comparacaoSalario = function (Terceirizada) {
  const Funcionarios = [
    {
      id: 1,
      nome: 'Tássio Freire',
      salario: 1200.35
    },
    {
      id: 2,
      nome: 'Marina de Paula',
      salario: 1250.48
    }
  ]
  for (let i = 0; i < Terceirizada.length; i++) {
    for (let j = 0; j < Funcionarios.length; j++)
      if (Terceirizada[i].nome == Funcionarios[j].nome)
        if (Terceirizada[i].salario == Funcionarios[j].salario)
          console.log('tudo certo!')
        else
          console.log(
            'o sálario de ' +
              Terceirizada[i].nome +
              ' está errado e a diferença é de R$ ' +
              Math.abs((Terceirizada[i].salario - Funcionarios[j].salario).toFixed(2))
          )
  }
  let somaSalarioTerceirizada = 0

  Terceirizada.forEach(res => {
    somaSalarioTerceirizada += res.salario
  })
  let somaSalarioFuncionarios = 0

  Funcionarios.forEach(res => {
    somaSalarioFuncionarios += res.salario
  })
  console.log("\nA diferença entre o valor total da folha de referência e o valor da folha que foi enviada pela empresa especializada: R$ " + Math.abs((somaSalarioTerceirizada - somaSalarioFuncionarios).toFixed(2)))

  let mediaSalarioTerceirizada = 0

  Terceirizada.forEach(res => {
    mediaSalarioTerceirizada += res.salario
  })
  mediaSalarioTerceirizada = mediaSalarioTerceirizada / Terceirizada.length

  let mediaSalarioFuncionarios = 0

  Funcionarios.forEach(res => {
    mediaSalarioFuncionarios += res.salario
  })
  mediaSalarioFuncionarios = mediaSalarioFuncionarios / Terceirizada.length

  console.log("\nA diferença média entre os valores da folha de referência e os valores da folha enviada pela empresa especializada: R$ " + Math.abs((mediaSalarioTerceirizada - mediaSalarioFuncionarios).toFixed(2)))
}

comparacaoSalario(Terceirizada)
