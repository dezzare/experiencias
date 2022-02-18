function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);

}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject("BAD VALUE")
      return
    }
    setTimeout(() => {
      resolve(msg.toUpperCase());
      return;
    }, tempo);

  })



}

async function executa() {
  try {
    const fase1 = await esperaAi('Fase 1', 3000)
    console.log(fase1)
    const fase2 = await esperaAi(100, 500)
    console.log(fase2)
    const fase3 = await esperaAi('Fase 3', 1000)
    console.log(fase3)
    console.log('Terminado')
  } catch (e) {
    console.log(e)
  }
}

executa()
