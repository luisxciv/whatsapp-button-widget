class chattingWhatsAppBtn {

    constructor({ contact, text, callTo, backgroundColor, textColor, position, channels, shape, emojii}) {
        this.contact = contact
        this.text = text
        this.callTo = callTo
        this.backgroundColor = backgroundColor
        this.textColor = textColor
        this.position = position
        this.channels = channels
        this.shape = shape
        this.emojii = emojii
        this.clicked = false 
    }
    //

    renderButton() {
        let callTo = this.callTo
        let phone = this.contact.phone
        let meLink = this.contact.meLink
        let instagram = this.contact.instagram
        let telegram = this.contact.telegram
        let email = this.contact.email
        let text = this.text 
     

        let options = this.channels
        let shape = this.shape
        let styles = document.createElement('link')
        styles.setAttribute('href', 'https://cdn.jsdelivr.net/gh/luisxciv/whatsapp-button-widget@4.3/whatsapp-button-widget.css')
        styles.setAttribute('rel', 'stylesheet')
        styles.setAttribute('type', 'text/css')
        styles.setAttribute('style', `background:${this.backgroundColor}`)
        
        document.body.appendChild(styles)

        let root = document.createElement('div')
        root.className = 'WhatsAppButton__root'
        if (this.position == 'right'){ 
            root.setAttribute('style', root.getAttribute('style')+`;right: 20px;margin-left: 10px;`);   

        } else {
            root.setAttribute('style', root.getAttribute('style')+`;left: 20px;`);   

            //root.setAttribute('style', 'position: fixed; bottom: 10px;left: 20px; z-index:99; text-align: center; margin: auto; max-width: 50px')

        }
        document.body.appendChild(root);

        let button_root = document.createElement('a')
        button_root.setAttribute('id', 'main')

        root.appendChild(button_root)

        let poweredByButton = document.createElement('a')
        let logo = document.createElement('img')
        //logo.src = 'https://cdn.jsdelivr.net/gh/luisxciv/whatsapp-button-widget@3.2/img/ls.png'

    

        poweredByButton.setAttribute('href', 'https://www.chatting.app')
        poweredByButton.setAttribute('class', 'whatsapp__poweredBy')
        poweredByButton.setAttribute('target', '_blank')
        poweredByButton.innerText = 'Powered by '
        poweredByButton.appendChild(logo)
        poweredByButton.innerText = '⚡ by Chatting'

        if (this.position == 'right'){ 
            poweredByButton.setAttribute('style', poweredByButton.getAttribute('style')+`;right: 12px`);   

        } else {
            poweredByButton.setAttribute('style', poweredByButton.getAttribute('style')+`;left: 5px`);   

        }

        console.log(callTo)

        if(callTo.length > 0){
            // call to action not undefined
            let callToAction = document.createElement('div')
            callToAction.setAttribute('class', 'callTo')   
            callToAction.id = 'callTo'
            callToAction.innerText = callTo

            if (this.position == 'right'){ 
                callToAction.setAttribute('style', callToAction.getAttribute('style')+`;right: 75px;background:${this.backgroundColor};color:${this.textColor};border-top-right-radius: 0px`);
            } else {
                callToAction.setAttribute('style', callToAction.getAttribute('style')+`;left: 75px;background:${this.backgroundColor};color:${this.textColor};border-top-left-radius: 0px`);
    
            }
            console.log(callToAction)

            root.appendChild(callToAction)

        }
        root.appendChild(poweredByButton)

        

        let button = document.createElement('button')
        button.setAttribute('class', 'chatting-whatsapp__button')
        button.setAttribute('style', button.getAttribute('style')+`;background-color:${this.backgroundColor};color:${this.textColor};z-index:99;text-align:center; display: flex; align-items:center`)
        if(this.shape == 'square'){ 
            button.setAttribute('style', button.getAttribute('style')+";border-radius: 3px")
        }
    
        button.innerText = this.emojii
        button_root.appendChild(button)
        button.onclick = function() { 

            this.clicked = !this.clicked
            if(callTo.length > 0) {
                // hide call to action
                let callToAction = document.getElementById('callTo')

                console.log(callToAction)
                console.log(root.children[1])
                root.children[1].setAttribute('style', callToAction.getAttribute('style') + `;display:none`);   
            }

            if(this.clicked){ 

                options.forEach(element => {
                
                    switch(element){ 

                        case "whatsapp":
                        let new_whatsapp_button_root = document.createElement('a')
                        new_whatsapp_button_root.setAttribute('id', 'channel')
                        new_whatsapp_button_root.setAttribute('href', `https://api.whatsapp.com/send?phone=${phone}&text=${text}`)
                        new_whatsapp_button_root.setAttribute('target', '_blank')

                        let whats_icon = document.createElement("img")

                        var new_button = document.createElement('button')

                        new_button.setAttribute('class', 'chatting-whatsapp__button')
                        new_button.setAttribute('style', `z-index:99;text-align:center; display: flex; align-items:center`)
                        whats_icon.src = 'https://cdn.jsdelivr.net/gh/luisxciv/whatsapp-button-widget@4.3/img/whatsapp.svg'
                        whats_icon.setAttribute('style', 'height : 35px')
                        new_button.setAttribute('style', `background-color: #0bd561`)
                  

                        new_button.appendChild(whats_icon)
                        new_whatsapp_button_root.appendChild(new_button)
                        root.prepend(new_whatsapp_button_root)

                        break; 

                        case "messenger": 
                        let new_messenger_button_root = document.createElement('a')
                        new_messenger_button_root.setAttribute('id', 'channel')
                        new_messenger_button_root.setAttribute('href', meLink)
                        new_messenger_button_root.setAttribute('target', '_blank')

                        let msn_icon = document.createElement("img")

                        var new_button = document.createElement('button')
                        new_button.setAttribute('class', 'chatting-whatsapp__button')
                        new_button.setAttribute('style', `z-index:99;text-align:center; display: flex; align-items:center`)
                        msn_icon.src = 'https://cdn.jsdelivr.net/gh/luisxciv/whatsapp-button-widget@4.3/img/messenger.png'
                        msn_icon.setAttribute('style', 'height : 25px')
                        new_button.setAttribute('style', `background-color: white`)
                       
                        new_button.appendChild(msn_icon)
                        new_messenger_button_root.appendChild(new_button)
                        root.prepend(new_messenger_button_root)

                        break; 

                        case "instagram":
                        let new_instragram_button_root = document.createElement('a')
                        new_instragram_button_root.setAttribute('id', 'channel')
                        new_instragram_button_root.setAttribute('href', `https://instagram.com/${instagram}`)
                        new_instragram_button_root.setAttribute('target', '_blank')
                        let insta_icon = document.createElement("img")

                        var new_button = document.createElement('button')
                        new_button.setAttribute('class', 'chatting-whatsapp__button')
                        new_button.setAttribute('style', `z-index:99;text-align:center; display: flex; align-items:center`)
                        insta_icon.src = 'https://cdn.jsdelivr.net/gh/luisxciv/whatsapp-button-widget@4.3/img/instragram.svg'
                        insta_icon.setAttribute('style', 'height : 40px')
                        new_button.setAttribute('style', `background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);`)
                      
                        new_button.appendChild(insta_icon)
                        new_instragram_button_root.appendChild(new_button)
                        root.prepend(new_instragram_button_root)

                        break; 

                        case "telegram":
                        let new_telegram_button_root = document.createElement('a')
                        new_telegram_button_root.setAttribute('id', 'channel')
                        new_telegram_button_root.setAttribute('href', `https://telegram.com/${telegram}`)
                        new_telegram_button_root.setAttribute('target', '_blank')
                        let tele_icon = document.createElement("img")

                        var new_button = document.createElement('button')
                        new_button.setAttribute('class', 'chatting-whatsapp__button')
                        new_button.setAttribute('style', `z-index:99;text-align:center; display: flex; align-items:center`)
                        tele_icon.src = 'https://cdn.jsdelivr.net/gh/luisxciv/whatsapp-button-widget@4.3/img/telegram.svg'
                        tele_icon.setAttribute('style', 'height : 35px')
                        new_button.setAttribute('style', `background-image: linear-gradient(-203deg, #37AEE2 13%, #1E96C8 76%)`)
                      
                        new_button.appendChild(tele_icon)
                        new_telegram_button_root.appendChild(new_button)
                        root.prepend(new_telegram_button_root)

                        break; 

                        case "email": 
                        let new_email_button_root = document.createElement('a')
                        new_email_button_root.setAttribute('id', 'channel')
                        new_email_button_root.setAttribute('href', `mailto:${email}?subject=${callTo}?body=${text}`)
                        new_email_button_root.setAttribute('target', '_top')
                        let email_icon = document.createElement("img")

                        var new_button = document.createElement('button')
                        new_button.setAttribute('class', 'chatting-whatsapp__button')
                        new_button.setAttribute('style', `z-index:99;text-align:center; display: flex; align-items:center`)
                        email_icon.src = 'https://cdn.jsdelivr.net/gh/luisxciv/whatsapp-button-widget@4.3/img/email.png'
                        email_icon.setAttribute('style', 'height : 20px')
                        new_button.setAttribute('style', `background-color: white`)  
                        new_button.appendChild(email_icon)
                        new_email_button_root.appendChild(new_button)
                        root.prepend(new_email_button_root)

                        break; 
                    }

                 
                    if(shape == 'square'){ 
                        new_button.setAttribute('style', new_button.getAttribute('style')+'; border-radius: 3px');
                    }


                  
                });

                //render channels and close button 

            } else { 

                var length = 2

                if(callTo.length > 0){ 
                    length = 3
                }

               //console.log(root.childNodes)
               while (root.childNodes.length > length) {
                root.removeChild(root.firstChild);
                }

            }

        }


    }


}