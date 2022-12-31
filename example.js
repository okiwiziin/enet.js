const enet = require('enet.js')

function bootstrap() {
  const host = enet.enet_host_create('0.0.0.0', 22102, 1)
  
  setInterval(() => {
    const packet = enet.enet_host_service(host)
    
    if (packet) {
      console.log(packet)
    }
  }, 1000)
}

bootstrap()
