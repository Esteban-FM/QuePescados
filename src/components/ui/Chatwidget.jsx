import { useEffect } from 'react'

export default function ChatWidget() {
  useEffect(() => {
    // Evita cargar el script dos veces
    if (document.getElementById('getbutton-script')) return

    const options = {
      whatsapp: '+526144664881',
      email: 'contacto@quepescados.com',
      call_to_action: 'Hola ¿Podemos ayudarte?',
      button_color: '#00acff',
      position: 'right',
      order: 'whatsapp,email',
    }

    const proto = document.location.protocol
    const host = 'getbutton.io'
    const url = proto + '//static.' + host

    const s = document.createElement('script')
    s.id = 'getbutton-script'
    s.type = 'text/javascript'
    s.async = true
    s.src = url + '/widget-send-button/js/init.js'

    s.onload = function () {
      WhWidgetSendButton.init(host, proto, options)

      // Observador para WhatsApp con mensaje "Hola"
      const observer = new MutationObserver(() => {
        let whatsappButton = document.querySelector('[href*="wa.me"]')
        if (whatsappButton && !whatsappButton.href.includes('text=Hola')) {
          whatsappButton.href = 'https://wa.me/526144664881?text=Hola'
        }
      })
      observer.observe(document.body, { childList: true, subtree: true })

      // Botón del chatbot
      if (!document.getElementById('chatbot-button')) {
        let chatButton = document.createElement('div')
        chatButton.innerHTML = '💬 Chatbot'
        chatButton.id = 'chatbot-button'
        chatButton.onclick = function () {
          let chatbox = document.getElementById('chatbot-container')
          chatbox.style.display = chatbox.style.display === 'none' ? 'block' : 'none'
        }
        // document.body.appendChild(chatButton)
      }

      // Contenedor del chatbot
      // if (!document.getElementById('chatbot-container')) {
      //   let chatContainer = document.createElement('div')
      //   chatContainer.id = 'chatbot-container'
      //   chatContainer.innerHTML =
      //     '<iframe src="https://landbot.online/v3/H-2856090-BKKA2H7IU7JTDBXT/index.html" width="100%" height="100%"></iframe>'
      //   document.body.appendChild(chatContainer)
      // }
    }

    const x = document.getElementsByTagName('script')[0]
    x.parentNode.insertBefore(s, x)

    // Limpieza al desmontar
    return () => {
      const script = document.getElementById('getbutton-script')
      if (script) script.remove()
      const btn = document.getElementById('chatbot-button')
      if (btn) btn.remove()
      const container = document.getElementById('chatbot-container')
      if (container) container.remove()
    }
  }, [])

  return null
}