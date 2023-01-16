describe('Ecommerce', () => {
    it('Fluxo compra,Login,Checkout,Validação"', () => {

       /* que eu desejo acessar o site da Amazon*/
            cy.visit('https://amazon.com.br');
            cy.url().should('include','amazon.com.br')
         
           /*Acesso a página de login*/
            cy.get('#nav-link-accountList-nav-line-1').click();
            cy.url().should('include','/ap/signin?openid.pape.max_auth_');
      
         /*realizo o login*/
            cy.get('#ap_email').click();
            cy.get('#ap_email').type('testfafm@gmail.com');
            cy.get('.a-button-inner > #continue').click();;

            cy.url().should('include','/ap/signin');
            cy.get('#ap_password').click();
            cy.get('#ap_password').type('qazxsw12');
            cy.get('#signInSubmit').click();
       
         /*depois de logado Pesquiso pelo produto*/
            cy.url().should('include','?ref_=nav_ya_signin');
            cy.get('#twotabsearchtextbox').click();
            cy.get('#twotabsearchtextbox').type('Suporte para notebook');
            cy.get('#nav-search-submit-button').click();
           
         /*acesso a página do produto escolhido*/
            cy.get('.a-color-state').contains('Suporte para notebook');
            cy.get('[data-asin="B07BTC67VS"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base').
            contains('Suporte para Notebook, OCTOO, Uptable, UP-BL, Preto').click();
          
         /*adiciono o produto ao carrinho*/
            cy.get('#productTitle').contains('Suporte para Notebook, OCTOO, Uptable, UP-BL, Preto');
            cy.get('#add-to-cart-button').click(); 
           

         /*confirmo o produto no carrinho*/
            cy.get('.a-size-medium-plus').contains('Adicionado ao carrinho');
            cy.get('#sw-gtc > .a-button-inner > .a-button-text').click();
            cy.get('h1').contains('Carrinho de compras')
           
         /*Anota preço da Amazon*/
         //Int amazon = cy.get('.sc-item-price-block > .a-spacing-mini > .a-size-medium')

        /*excluo o produto do carrinho */
            cy.get('.sc-action-delete > .a-declarative > .a-color-link').click();
            cy.get('[data-action="delete"] > .a-size-base').contains('foi removido de Carrinho de compras')
        

    })
})