/* Setando o ponta de partida */
const elApp = document.querySelector('div#app')

/* Setando os elementos do header */
const elHeader = document.createElement('header')
const elHeaderH1 = document.createElement('h1')
const elHeaderP = document.createElement('p')

const elNav = document.createElement('nav')
const elNavDiv = document.createElement('div')
const elNavUl = document.createElement('ul')
const elNavA = document.createElement('a')
const elNavImg = document.createElement('img')
const elNavButton = document.createElement('button')
const elNavSpan = document.createElement('span')

const elSection = document.createElement('section')
const elArticle = document.createElement('article')
const elAside = document.createElement('aside')


elApp.appendChild(elHeader);


/* Setando o menu NavBar */
class menuNavBar {
    constructor() {
        elHeader.appendChild(elNav)
        elNav.appendChild(elNavA)
        elNavA.appendChild(elNavImg)
        elNav.appendChild(elNavButton)
        elNavButton.appendChild(elNavSpan)
        elNav.appendChild(elNavDiv)
        elNavDiv.appendChild(elNavUl)
    }

    startMenu(textNavClass, textNavImgLogo, textNavUlClass,
        textNavAMenuHref, textNavAMenu) {
        this.navClass(textNavClass)
        this.navALogo(textNavImgLogo)
        this.navButtonAttribut()
        this.navSpanAttribut()
        this.navDivClass()
        this.navUlClass(textNavUlClass)
        this.navAMenuText(textNavAMenu, textNavAMenuHref)
    }

    navClass(textNavClass) {
        textNavClass.map(function (elem) {
            return elNav.classList.add(elem);
        });
    }

    navALogo(textNavImgLogo) {
        elNavA.setAttribute('class', 'navbar-brand');
        elNavA.setAttribute("href", `${textNavImgLogo[1]}`)
        elNavImg.setAttribute('alt', 'Image Logo')
        elNavImg.setAttribute('src', textNavImgLogo[0])
    }


    navButtonAttribut() {
        elNavButton.setAttribute('class', 'navbar-toggler')
        elNavButton.setAttribute('type', 'button')
        elNavButton.setAttribute('data-toggle', 'collapse')
        elNavButton.setAttribute('data-target', '#mainMenu')
        elNavButton.setAttribute('aria-controls', 'mainMenu')
        elNavButton.setAttribute('aria-expanded', 'false')
        elNavButton.setAttribute('aria-label', 'Alterna navegação')
    }

    navSpanAttribut() {
        elNavSpan.setAttribute('class', 'navbar-toggler-icon')
    }

    navDivClass() {
        elNavDiv.setAttribute('id', 'mainMenu')
        elNavDiv.setAttribute('class', 'collapse navbar-collapse')
    }

    navUlClass(textNavUlClass) {
        textNavUlClass.map(function (elem) {
            return elNavUl.classList.add(elem);
        });
    }

    navAMenuText(textNavAMenu, textNavAMenuHref) {
        for (var i = 0; i < textNavAMenu.length; i++) {
            var elNavLi = document.createElement('li')
            var elNavAMenu = document.createElement('a')

            var textNav = document.createTextNode(textNavAMenu[i])
            if (i == 0) {
                elNavLi.setAttribute('class', 'nav-item active');
            } else {
                elNavLi.setAttribute('class', 'nav-item');
            }
            elNavAMenu.appendChild(textNav)
            elNavAMenu.setAttribute('class', 'nav-link')
            elNavAMenu.setAttribute('href', textNavAMenuHref[i])
            elNavLi.appendChild(elNavAMenu)
            elNavUl.appendChild(elNavLi)
        }
    }

}

const elemNavBar = ['navbar', 'navbar-expand-lg', 'navbar-light', 'bg-transparent'];
const elemImgLogo = ['assets/img/logo.png', '#'];
const elemUl = ['navbar-nav', 'ml-auto'];
const elemAMenuHref = ['#Inicio', '#QuemSou', '#Serviços', '#Portfolio', '#Contato'];
const elemAMenuText = ['Início', 'Quem Sou', 'Serviços', 'Portfólio', 'Contato']

const newNavClass = new menuNavBar();

newNavClass.startMenu(elemNavBar, elemImgLogo, elemUl, elemAMenuHref,
    elemAMenuText);

/* Setando o Header da Página */
class headerTop {
    constructor() {
        elHeader.appendChild(elHeaderH1)
        elHeader.appendChild(elHeaderP)
    }

    startHeader(textHeaderId, textHeaderH1Class, TextHeaderPClass,
        textHeaderTitle, textHeaderSubTitle) {

        this.headerIdClass(textHeaderId, textHeaderH1Class, TextHeaderPClass)
        this.headerTitle(textHeaderTitle)
        this.headerSubTitle(textHeaderSubTitle)
    }

    headerIdClass(textHeaderId, textHeaderH1Class, textHeaderPClass) {
        elHeader.setAttribute('id', textHeaderId)
        elHeaderH1.setAttribute('class', textHeaderH1Class)
        elHeaderP.setAttribute('class', textHeaderPClass)
    }

    headerTitle(textHeaderTitle) {
        const textH1 = document.createTextNode(textHeaderTitle)
        elHeaderH1.appendChild(textH1)
    }

    headerSubTitle(textHeaderSubTitle) {
        const textP = document.createTextNode(textHeaderSubTitle)
        elHeaderP.appendChild(textP)
    }
}

const elemHeaderId = 'top-header';
const elemTitleClass = 'top-title text-center mt-5';
const elemSubTitleClass = 'top-subtitle text-center mt-1';
const elemHeaderTittle = 'Gilberto Medeiros';
const elemHeaderSubTitle = 'Lorem Ipsum is simply dummy text of the printing. Is simply dummy text of the printing.'

const newHeaderStar = new headerTop;
newHeaderStar.startHeader(elemHeaderId, elemTitleClass, elemSubTitleClass,
    elemHeaderTittle, elemHeaderSubTitle);

/* Setando os elementos do Section de Serviços */
const elSectionServices = document.createElement('section')
const elDivServices = document.createElement('div')
const elH2Services = document.createElement('h2')
const elPServices = document.createElement('p')
const elServicesRow = document.createElement('div')

elApp.appendChild(elSectionServices);

/* Setando section de Serviços */

class sectionServices {
    constructor() {
        elSectionServices.appendChild(elDivServices)
        elDivServices.appendChild(elH2Services)
        elDivServices.appendChild(elPServices)
    }

    startSectionServices(textSectionServicesId, textSectionServiceH2P, textSectionServicesColumn,
        textSectionServicesCard) {
        this.sectionServicesId(textSectionServicesId)
        this.sectionServicesH2P(textSectionServiceH2P)
        this.sectionCards(textSectionServicesColumn, textSectionServicesCard)
    }

    sectionServicesId(textSectionServicesId) {
        elSectionServices.setAttribute('id', textSectionServicesId)
    }

    sectionServicesH2P(textSectionServiceH2P) {
        elDivServices.setAttribute('class', 'container')

        textSectionServiceH2P.map(function () {
            var textServivesH2 = document.createTextNode(textSectionServiceH2P[0])
            var textSectionP = document.createTextNode(textSectionServiceH2P[1])
            elH2Services.appendChild(textServivesH2)
            elH2Services.setAttribute('class', 'text-center')
            elPServices.appendChild(textSectionP)
            elPServices.setAttribute('class', 'text-center mb-2')
        })
    }

    sectionCards(textSectionServicesCollumn, textSectionServicesCard) {
        elDivServices.appendChild(elServicesRow)
        elServicesRow.setAttribute('class', 'row')

        var columnSize = this.incrementCollumn(textSectionServicesCollumn)

        for (var i = 0; i < textSectionServicesCollumn; i++) {
            var elServicesCol = document.createElement('div')
            elServicesCol.setAttribute('class', `col-xs-12 col-sm-12 col-md-6 col-lg-${columnSize} text-center`)
            elServicesRow.appendChild(elServicesCol)
            var elServicesCardImage = document.createElement('p')
            var elServicesCardTitle = document.createElement('h4')
            var elServicesCardText = document.createElement('p')

            var textMountCard = this.incrementMountCard(i, textSectionServicesCard)
            var textImageCard = document.createTextNode(textMountCard[0])
            var textTitleCard = document.createTextNode(textMountCard[1])
            var textCard = document.createTextNode(textMountCard[2])

            elServicesCardImage.appendChild(textImageCard)
            elServicesCol.appendChild(elServicesCardImage)

            elServicesCardTitle.appendChild(textTitleCard)
            elServicesCol.appendChild(elServicesCardTitle)

            elServicesCardText.appendChild(textCard)
            elServicesCol.appendChild(elServicesCardText)

        }


    }

    incrementCollumn(textSectionServicesCollumn) {
        switch (textSectionServicesCollumn) {
            case 1:
                return 12;
                break;
            case 2:
                return 6;
                break;
            case 3:
                return 4;
                break;
            case 4:
                return 3;
                break;
            default:
                return 12;
        }
    }

    incrementMountCard(indice, textSectionServicesCard) {
        var textMountCard = [];
        switch (indice) {
            case 0:
                textMountCard.push(textSectionServicesCard[0])
                textMountCard.push(textSectionServicesCard[1])
                textMountCard.push(textSectionServicesCard[2])
                return textMountCard
                break;
            case 1:
                textMountCard.push(textSectionServicesCard[3])
                textMountCard.push(textSectionServicesCard[4])
                textMountCard.push(textSectionServicesCard[5])
                return textMountCard
                break;
            case 3:
                textMountCard.push(textSectionServicesCard[6])
                textMountCard.push(textSectionServicesCard[7])
                textMountCard.push(textSectionServicesCard[8])
                return textMountCard
                break;
            case 4:
                textMountCard.push(textSectionServicesCard[9])
                textMountCard.push(textSectionServicesCard[10])
                textMountCard.push(textSectionServicesCard[11])
                return textMountCard
                break;
            default:
                textMountCard.push(textSectionServicesCard[0])
                textMountCard.push(textSectionServicesCard[1])
                textMountCard.push(textSectionServicesCard[2])
                return textMountCard
        }

    }

}

const elemSectionServicesId = 'section-services';
const elemSectionServiceH2P = [
    'Nossos Serviços',
    'Contrary to popular belief, Lorem Ipsum is not simply random text.'
]
const elemSectionServicesCollumn = 3;
const elemSectionServicesCard = [
    '<i class="fa fa-star fa-4x"></i>',
    'Contrary to popular',
    'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC',
    '<i class="fa fa-camera fa-4x"></i>',
    'There are many',
    'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC',
    '<i class="fa fa-globe fa-4x"></i>',
    'It is a long',
    'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'

]

const newSectionServices = new sectionServices()
newSectionServices.startSectionServices(elemSectionServicesId, elemSectionServiceH2P, elemSectionServicesCollumn,
    elemSectionServicesCard)

/* Setando os elementos do Section do Orçamento */
const elSectionBudget = document.createElement('section')
const elDivBudget = document.createElement('div')
const elH3Budget = document.createElement('h3')
const elPBudget = document.createElement('p')
const elButtonBudget = document.createElement('button')

elApp.appendChild(elSectionBudget);

/* Setando section de Pedido de Orçamento */

class sectionBudget {
    constructor() {
        elSectionBudget.appendChild(elDivBudget)
        elDivBudget.appendChild(elH3Budget)
        elDivBudget.appendChild(elPBudget)
        elDivBudget.appendChild(elButtonBudget)
    }

    startSectionBudget(textSectionBudget, textSectionBudgetDiv, textSectionBudgetH3, textSectionBudgetP,
        textSectionBudgetButton) {

        this.sectionBudgetDiv(textSectionBudget, textSectionBudgetDiv)
        this.sectionBudgetElem(
            textSectionBudgetH3,
            textSectionBudgetP,
            textSectionBudgetButton
        )
    }

    sectionBudgetDiv(textSectionBudget, textSectionBudgetDiv) {
        elSectionBudget.setAttribute('id', textSectionBudget)
        textSectionBudgetDiv.map(function (elem) {
            elDivBudget.classList.add(elem)
        })
    }

    sectionBudgetElem(textSectionBudgetH3, textSectionBudgetP, textSectionBudgetButton) {
        elH3Budget.classList.add(textSectionBudgetH3[0])
        var textH2Budget = document.createTextNode(textSectionBudgetH3[1])
        elH3Budget.appendChild(textH2Budget)

        elPBudget.classList.add(textSectionBudgetP[0])
        var textPBudget = document.createTextNode(textSectionBudgetP[1])
        elPBudget.appendChild(textPBudget)

        elButtonBudget.setAttribute('class', textSectionBudgetButton[0])
        var textButtonBudget = document.createTextNode(textSectionBudgetButton[1])
        elButtonBudget.appendChild(textButtonBudget)
    }
}

const elemSectionBudget = 'section-budget'
const elemSectionBudgetDiv = [
    'container',
    'text-center'
]
const elemSectionBudgetH3 = [
    'h3-budget',
    'Orçamentos e Contatos'
]
const elemSectionBudgetP = [
    'p-budget',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
]
const elemSectionBudgetButton = [
    'btn btn-outline-warning btn-lg',
    'Clique Aqui!'
]

const newSectionBudget = new sectionBudget()
newSectionBudget.startSectionBudget(elemSectionBudget, elemSectionBudgetDiv, elemSectionBudgetH3,
    elemSectionBudgetP, elemSectionBudgetButton)

/* Setando section de Portfolio */

const elSectionPortfolio = document.createElement('section')
const elDivPortfolio = document.createElement('div')
const elH3Portfolio = document.createElement('h3')
const elPPortfolio = document.createElement('p')
const elDivCardRowTitle = document.createElement('div')
const elDivCardColTitle = document.createElement('div')
const elDivCardRow = document.createElement('div')



elApp.appendChild(elSectionPortfolio);

class sectionPortfolio {
    constructor() {
        elSectionPortfolio.appendChild(elDivPortfolio)

        elSectionPortfolio.setAttribute('id', 'section-portfolio')
        elDivPortfolio.setAttribute('class', 'container text-center')
    }

    startSectionPortfolio(textTitlePortfolio, textCardSize, textCardPortfolio) {
        this.newTitlePortfolio(textTitlePortfolio)
        this.newCardPortfolio(textCardSize, textCardPortfolio)
    }

    newTitlePortfolio(textTitlePortfolio) {
        elDivCardRowTitle.setAttribute('class', 'row')
        elDivPortfolio.appendChild(elDivCardRowTitle)
        elDivCardColTitle.setAttribute('class', `col-12`)
        elDivCardRowTitle.appendChild(elDivCardColTitle)

        const textH3Title = document.createTextNode(textTitlePortfolio[0])
        elH3Portfolio.appendChild(textH3Title)
        elDivCardColTitle.appendChild(elH3Portfolio)

        const textPSubTitle = document.createTextNode(textTitlePortfolio[1])
        elPPortfolio.appendChild(textPSubTitle)
        elDivCardColTitle.appendChild(elPPortfolio)
    }

    newCardPortfolio(textCardCol, textCardPortfolio) {
        let newDataCard = []
        let numberCard = 0;

        elDivCardRow.setAttribute('class', 'row')
        elDivPortfolio.appendChild(elDivCardRow)

        for (var i = 0; i < textCardPortfolio.length; i++) {

            newDataCard.push(textCardPortfolio[i])

            if (numberCard == 2) {

                var elDivCardCol = document.createElement('div')

                switch (textCardCol) {
                    case 1:
                        elDivCardCol.setAttribute('class', 'col-xs-12 col-sm-12 col-md-6 col-lg-12')
                        break
                    case 2:
                        elDivCardCol.setAttribute('class', 'col-xs-12 col-sm-12 col-md-6 col-lg-6')
                        break
                    case 3:
                        elDivCardCol.setAttribute('class', 'col-xs-12 col-sm-12 col-md-6 col-lg-4')
                        break
                    case 4:
                        elDivCardCol.setAttribute('class', 'col-xs-12 col-sm-12 col-md-6 col-lg-3')
                        break
                    default:
                        elDivCardCol.setAttribute('class', 'col-xs-12 col-sm-12 col-md-6 col-lg-12')

                }

                elDivCardRow.appendChild(elDivCardCol)

                var elDivCard = document.createElement('div')
                elDivCard.setAttribute('class', 'card mb-3')
                elDivCardCol.appendChild(elDivCard)

                var elImgCard = document.createElement('img')
                elImgCard.setAttribute('class', 'card-img-top')
                elImgCard.setAttribute('src', `${newDataCard[0]}`)
                elImgCard.setAttribute('alt', `${newDataCard[1]}`)
                elDivCard.appendChild(elImgCard)

                var elDivCardBody = document.createElement('div')
                elDivCardBody.setAttribute('class', 'card-body')
                elDivCard.appendChild(elDivCardBody)

                var elH5Card = document.createElement('h5')
                var textH5Card = document.createTextNode(newDataCard[1])
                elH5Card.setAttribute('class', 'card-title')
                elH5Card.appendChild(textH5Card)
                elDivCardBody.appendChild(elH5Card)

                var elPCard = document.createElement('p')
                var textPCard = document.createTextNode(newDataCard[2])
                elPCard.appendChild(textPCard)
                elDivCardBody.appendChild(elPCard)

                var elButtonCard = document.createElement('button')
                var textButtonCard = document.createTextNode('Ver mais...')
                elButtonCard.setAttribute('class', 'btn btn-primary')
                elButtonCard.setAttribute('type', 'submit')
                elButtonCard.appendChild(textButtonCard)
                elDivCardBody.appendChild(elButtonCard)

                numberCard = 0
                newDataCard = []
            } else {
                numberCard++;
            }

        }
    }

}

const elemTitlePortfolio = [
    'Nossos Portifólio',
    'Contrary to popular belief, Lorem Ipsum is not simply random text.'
]

const elemCardCol = 3
const elemCardPortfolio = [
    'assets/img/portfolio/image1.jpg',
    'Why do we use it',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    'assets/img/portfolio/image2.jpg',
    'Where can I get some',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    'assets/img/portfolio/image3.jpg',
    'Where does it come from',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    'assets/img/portfolio/image4.jpg',
    'Why do we use it',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    'assets/img/portfolio/image5.jpg',
    'Where can I get some',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    'assets/img/portfolio/image6.jpg',
    'Where does it come from',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
]


const newSectionPortfolio = new sectionPortfolio()
newSectionPortfolio.startSectionPortfolio(elemTitlePortfolio, elemCardCol, elemCardPortfolio)

/* Setando section de Contatos */

/* Setando footer da página */
const elFooter = document.createElement('footer')
const elDivPartOne = document.createElement('div')
const elDivPartTwo = document.createElement('div')
const elADivTwo = document.createElement('a')

elApp.appendChild(elFooter);

class footer {
    constructor() {
        elFooter.appendChild(elDivPartOne)
        elFooter.appendChild(elDivPartTwo)
        elDivPartTwo.setAttribute('class', 'container text-center')
    }

    startFooter(textDivTwo){
        this.newDivTwo(textDivTwo)
    }

    newDivTwo(textDivTwo) {
        var txtColOne = document.createTextNode(textDivTwo[0])
        elDivPartTwo.appendChild(txtColOne)
        var txtColTwo = document.createTextNode(textDivTwo[1])
        elDivPartTwo.appendChild(txtColTwo)

        elADivTwo.setAttribute('class', 'aFooter')
        elADivTwo.setAttribute('href', `${textDivTwo[3]}`)
        var txtADivTwo = document.createTextNode(textDivTwo[2])
        elADivTwo.appendChild(txtADivTwo)
        elDivPartTwo.appendChild(elADivTwo)

    }
}

elemDivTwo = [
    'Todos os direitos reservados (GSM-Loborio) - ',
    'Desenvolvido por: ',
    'Gilberto Medeiros',
    'http://meusiteaqui.com'
]

const newFooter = new footer()
newFooter.startFooter(elemDivTwo)

