class chattingWhatsAppBtn {

    constructor({ dialcode, phone, text, backgroundColor, textColor, position, channels, shape}) {
        this.dialcode = dialcode
        this.phone = phone
        this.text = text
        this.backgroundColor = backgroundColor
        this.textColor = textColor
        this.position = position
        this.channels = channels
        this.shape = shape
        //console.log(this.backgroundColor)
        this.clicked = false 

    }
    //

    renderMainButton() {

        let options = this.channels
        let shape = this.shape
        let styles = document.createElement('link')
        styles.setAttribute('href', './whatsapp-button-widget.css')
        styles.setAttribute('rel', 'stylesheet')
        styles.setAttribute('type', 'text/css')
        styles.setAttribute('style', `background:${this.backgroundColor}`)
        
        document.body.appendChild(styles)

        let root = document.createElement('div')
        root.className = 'WhatsAppButton__root'
        if (this.position == 'right'){ 
            root.setAttribute('style', 'position: fixed; bottom: 10px;right: 20px; z-index:99; text-align: center; margin: auto; max-width: 50px')
        } else {
            root.setAttribute('style', 'position: fixed; bottom: 10px;left: 20px; z-index:99; text-align: center; margin: auto;  max-width: 50px')

        }
        document.body.appendChild(root);

        let button_root = document.createElement('a')
        button_root.setAttribute('id', 'main')

        root.appendChild(button_root)

        let waicon = document.createElement("img")
    

        //let button_text = document.createElement('p')
        //button_text.setAttribute('style', 'margin: 0')
        //button_text.innerText = this.callTo
        //button.appendChild(button_text)

        
        //button.appendChild(whatsappIcon)

        let poweredByButton = document.createElement('a')
        let logo = document.createElement('img')
        //logo.src = 'https://cdn.jsdelivr.net/gh/luisxciv/whatsapp-button-widget@3.2/img/ls.png'
        poweredByButton.setAttribute('href', 'https://chatting.app')
        poweredByButton.setAttribute('class', 'whatsapp__poweredBy')
        poweredByButton.setAttribute('target', '_blank')
        poweredByButton.innerText = 'Powered by '
        poweredByButton.appendChild(logo)
        poweredByButton.innerText = '⚡'
        root.appendChild(poweredByButton)
        let button = document.createElement('button')
        button.setAttribute('class', 'chatting-whatsapp__button')

        button.setAttribute('style', `background:${this.backgroundColor};color:${this.textColor};z-index:99;text-align:center; display: flex; align-items:center`)
        if(this.shape == 'square'){ 
            button.setAttribute('style', "border-radius: 3px")
        }
        button.appendChild(waicon)

        //button.setAttribute('onclick', 'renderCommButtons();')

        button_root.appendChild(button)

        button.onclick = function() { 

            this.clicked = !this.clicked

            console.log(this.clicked)

            if(this.clicked){ 

                options.forEach(element => {
                    let new_button_root = document.createElement('a')
                    new_button_root.setAttribute('id', 'channel')

                  


                    switch(element){ 


                        case "whatsapp":
                        let whats_icon = document.createElement("img")

                        var new_button = document.createElement('button')

                        new_button.setAttribute('class', 'chatting-whatsapp__button')
                        new_button.setAttribute('style', `z-index:99;text-align:center; display: flex; align-items:center`)
                        whats_icon.src = './img/whatsapp.svg'
                        whats_icon.setAttribute('style', 'height : 35px')
                        new_button.setAttribute('style', `background-color: #0bd561`)
                       
                        new_button.appendChild(whats_icon)

                        break; 

                        case "messenger": 
                        let msn_icon = document.createElement("img")

                        var new_button = document.createElement('button')
                        new_button.setAttribute('class', 'chatting-whatsapp__button')
                        new_button.setAttribute('style', `z-index:99;text-align:center; display: flex; align-items:center`)
                        msn_icon.src = './img/messenger.png'
                        msn_icon.setAttribute('style', 'height : 25px')
                        new_button.setAttribute('style', `background-color: white`)
                       
                        new_button.appendChild(msn_icon)
                        break; 

                        case "instagram":
                        let insta_icon = document.createElement("img")

                        var new_button = document.createElement('button')
                        new_button.setAttribute('class', 'chatting-whatsapp__button')
                        new_button.setAttribute('style', `z-index:99;text-align:center; display: flex; align-items:center`)
                        insta_icon.src = './img/instragram.svg'
                        insta_icon.setAttribute('style', 'height : 40px')
                        new_button.setAttribute('style', `background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);`)
                      
                        new_button.appendChild(insta_icon)

                        break; 

                        case "telegram":
                        let tele_icon = document.createElement("img")

                        var new_button = document.createElement('button')
                        new_button.setAttribute('class', 'chatting-whatsapp__button')
                        new_button.setAttribute('style', `z-index:99;text-align:center; display: flex; align-items:center`)
                        tele_icon.src = './img/telegram.svg'
                        tele_icon.setAttribute('style', 'height : 35px')
                        new_button.setAttribute('style', `background-image: linear-gradient(-203deg, #37AEE2 13%, #1E96C8 76%)`)
                      
                        new_button.appendChild(tele_icon)

                        break; 

                        case "email": 
                        let email_icon = document.createElement("img")

                        var new_button = document.createElement('button')
                        new_button.setAttribute('class', 'chatting-whatsapp__button')
                        new_button.setAttribute('style', `z-index:99;text-align:center; display: flex; align-items:center`)
                        email_icon.src = './img/email.png'
                        email_icon.setAttribute('style', 'height : 20px')
                        new_button.setAttribute('style', `background-color: white`)
                        console.log(shape)
                      
                        new_button.appendChild(email_icon)
                        break; 



                    }

                 
                    if(shape == 'square'){ 
                        new_button.setAttribute('style', new_button.getAttribute('style')+'; border-radius: 3px');
                    }


                    //button.endChild(whatsappIcon)             
                 
    

                    
                    //let waicon = document.createElement("img")
                    //waicon.src = 'https://cdn.jsdelivr.net/gh/luisxciv/whatsapp-button-widget@3.2/img/logo.png'
                    //waicon.setAttribute('style', 'margin-right : 10px')
                    //new_button.appendChild(waicon)

                    //button.setAttribute('onclick', 'renderCommButtons();')

                    new_button_root.appendChild(new_button)

                    root.prepend(new_button_root)

                  
                });

                //render channels and close button 



            } else { 

              
               //console.log(root.childNodes)
               while (root.childNodes.length > 2) {
                root.removeChild(root.firstChild);
                }






            }






        }




       





    

        //button_root.setAttribute('href', `https://api.whatsapp.com/send?phone=${this.dialcode}${this.phone}&text=${this.text}`)
        //button_root.setAttribute('style', 'text-decoration: none')
        //button_root.setAttribute('target', '_blank')

  





   


    }


}