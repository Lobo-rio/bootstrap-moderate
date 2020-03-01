window.themeStart = {
    
    elApp: document.querySelector('div#app'),
    
    data: dataSite,
    currentData: {},
    keywords: 0,
    aMenuNew: [],

    /* start of header tags */
    elHeader: document.createElement('header'),
    elHeaderH1: document.createElement('h1'),
    elHeaderP: document.createElement('p'),

    /* start of navbar tags */
    elNav: document.createElement('nav'),
    elNavDiv: document.createElement('div'),
    elNavUl: document.createElement('ul'),
    elNavA: document.createElement('a'),
    elNavImg: document.createElement('img'),
    elNavButton: document.createElement('button'),
    elNavSpan: document.createElement('span'),
    elNavLi: document.createElement('li'),
    elNavAMenu: document.createElement('a'),

        
    start() {
        this.currentData = this.data[this.keywords]
        this.startNavBar()
        this.startHeader()
    },

    startHeader() {
        this.elHeader.appendChild(this.elHeaderH1)
        this.elHeader.appendChild(this.elHeaderP)

        this.elHeader.setAttribute('id', `${this.currentData.header['id']}`)
        this.elHeaderH1.setAttribute('class', `${this.currentData.header['titleClass']}`)
        this.elHeaderP.setAttribute('class', `${this.currentData.header['subTitleClass']}`)

        this.elHeaderH1.innerText = this.currentData.header['titleText']
        this.elHeaderP.innerText = this.currentData.header['subTitleText']
    },

    startNavBar() {
        this.elApp.appendChild(this.elHeader)

        this.elHeader.appendChild(this.elNav)
        this.elNav.appendChild(this.elNavA)
        this.elNavA.appendChild(this.elNavImg)
        this.elNav.appendChild(this.elNavButton)
        this.elNavButton.appendChild(this.elNavSpan)
        this.elNav.appendChild(this.elNavDiv)
        this.elNavDiv.appendChild(this.elNavUl)

        this.elNav.setAttribute(
            'class',
            `
                ${this.currentData.navbar['class']} 
                ${this.currentData.navbar['size']} 
                ${this.currentData.navbar['color']} 
                ${this.currentData.navbar['background']}
            `
        )

        this.elNavA.setAttribute('class', 'navbar-brand');
        this.elNavA.setAttribute('href', `${this.currentData.navbar['imgHref']}`)
        this.elNavImg.setAttribute('alt', 'Image Logo')
        this.elNavImg.setAttribute('src', `${this.currentData.navbar['imgLogo']}`)

        this.elNavButton.setAttribute('class', 'navbar-toggler')
        this.elNavButton.setAttribute('type', 'button')
        this.elNavButton.setAttribute('data-toggle', 'collapse')
        this.elNavButton.setAttribute('data-target', '#mainMenu')
        this.elNavButton.setAttribute('aria-controls', 'mainMenu')
        this.elNavButton.setAttribute('aria-expanded', 'false')
        this.elNavButton.setAttribute('aria-label', 'Alterna navegação')

        this.elNavSpan.setAttribute('class', 'navbar-toggler-icon')
        
        this.elNavDiv.setAttribute('id', 'mainMenu')
        this.elNavDiv.setAttribute('class', 'collapse navbar-collapse')

        this.elNavUl.setAttribute('class', `${this.currentData.navbar['ul']}`)

        for(var i = 0; i < this.currentData.navbar['aMenu'].length; i ++){
            
            if (i == 0) {
                this.elNavLi.setAttribute('class', 'nav-item active');
            } else {
                this.elNavLi.setAttribute('class', 'nav-item');
            }

            this.elNavAMenu.setAttribute('class', 'nav-link')
            this.elNavAMenu.setAttribute('href', this.currentData.navbar['aMenu'][i])
            this.elNavAMenu.innerText = this.currentData.navbar['aMenuText'][i]
            this.elNavLi.appendChild(this.elNavAMenu)
            this.elNavUl.appendChild(this.elNavLi)
        }
        
    }

}