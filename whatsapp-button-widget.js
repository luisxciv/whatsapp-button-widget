class LeadsalesWhatsAppBtn {

    constructor({ dialcode, phone, text, backgroundColor, callTo, textColor, position}) {
        this.dialcode = dialcode
        this.phone = phone
        this.text = text
        this.backgroundColor = backgroundColor
        this.callTo = callTo
        this.textColor = textColor
        this.position = position
        //console.log(this.backgroundColor)
    }
    //

    renderButton() {


        let styles = document.createElement('link')
        styles.setAttribute('href', 'https://cdn.jsdelivr.net/gh/luisxciv/whatsapp-button-widget@3.2/whatsapp-button-widget.css')
        //styles.setAttribute('href', './whatsapp-button-widget.css')

        styles.setAttribute('rel', 'stylesheet')
        styles.setAttribute('type', 'text/css')
        styles.setAttribute('style', `background:${this.backgroundColor}`)
        //
        document.body.appendChild(styles)

        let root = document.createElement('div')
        root.className = 'WhatsAppButton__root'
        if(this.position == 'right'){ 
            root.setAttribute('style', 'position: fixed; bottom: 10px;right: 20px; z-index:99; text-align: center; margin: auto')

        }else{
            root.setAttribute('style', 'position: fixed; bottom: 10px;left: 20px; z-index:99; text-align: center; margin: auto')

        }
        document.body.appendChild(root);

        let button_root = document.createElement('a')
        button_root.setAttribute('href', `https://api.whatsapp.com/send?phone=${this.dialcode}${this.phone}&text=${this.text}`)
        button_root.setAttribute('style', 'text-decoration: none')
        button_root.setAttribute('target', '_blank')
        root.appendChild(button_root)

        let button = document.createElement('button')
        button.setAttribute('class', 'leadsales-whatsapp__button')

        button_root.appendChild(button)


        let waicon = document.createElement("img")
        waicon.src = 'https://cdn.jsdelivr.net/gh/luisxciv/whatsapp-button-widget@3.2/img/logo.png'
        waicon.setAttribute('style', 'margin-right    : 10px')

        button.appendChild(waicon)

        let button_text = document.createElement('p')
        button_text.setAttribute('style', 'margin: 0')
        button_text.innerText = this.callTo
        button.appendChild(button_text)

        let whatsappIcon = document.createElement('i')
        whatsappIcon.setAttribute('class', 'fab fa-whatsapp')

        whatsappIcon.setAttribute('style', 'font-size: 24px; margin-left    : 5px')
        //button.appendChild(whatsappIcon)

        let poweredByButton = document.createElement('a')
        let logo = document.createElement('img')
        logo.src = 'https://cdn.jsdelivr.net/gh/luisxciv/whatsapp-button-widget@3.2/img/ls.png'
        poweredByButton.setAttribute('href', 'https://leadsales.mx')
        poweredByButton.setAttribute('class', 'whatsapp__poweredBy')
        poweredByButton.setAttribute('target', '_blank')
        poweredByButton.innerText = 'Powered by '
        poweredByButton.appendChild(logo)
        root.appendChild(poweredByButton)

        button.setAttribute('style', `background:${this.backgroundColor};color:${this.textColor};z-index:99;text-align:center; display: flex; align-items:center`)



    }
}