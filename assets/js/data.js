window.dataSite = [
    {
        title: "Gilberto Medeiros",
        description: "Aprofundando no mundo do Javascript Puro, junto com o framework Bootstrap 4.",
        keywords: "HTML5, CSS3, JavaScript, Bootstrap",
        navbar:
        {
            class: "navbar",
            size: "navbar-expand-lg",
            color: "navbar-light",
            background: "bg-transparent",
            imgLogo: "assets/img/logo.png",
            imgHref: "#",
            ul: "navbar-nav ml-auto",
            aMenu: ['#Inicio', '#QuemSou', '#Serviços', '#Portfolio', '#Contato'],
            aMenuText: ['Início', 'Quem Sou', 'Serviços', 'Portfólio', 'Contato']
        },
        header:
        {
            id: "top-header",
            titleClass: "top-title text-center mt-5",
            subTitleClass: "top-subtitle text-center mt-1",
            titleText: "Gilberto Medeiros",
            subTitleText: "Lorem Ipsum is simply dummy text of the printing. Is simply dummy text of the printing."
        },
        sectionServices:
        {
            id: "section-services",
            textH2P: [
                "Nossos Serviços",
                "Contrary to popular belief, Lorem Ipsum is not simply random text."
            ],
            columnSize: 3,
            card: [
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
        },
        sectionBudget:
        {
            id: "section-budget",
            classDiv: "container text-center",
            h3Class: "h3-budget",
            h3Text: "Orçamentos e Contatos",
            p:  "p-budget",
            pText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            buttonClass: "btn btn-outline-warning btn-lg",
            buttonText: "Clique Aqui!"
        }
    }
]