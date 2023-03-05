/// <reference types="cypress" />
import { HomeElements } from '../../support/Pages/home';
import { CepElements } from './../../support/Pages/pageCep';
import { RastreioElements } from './../../support/Pages/pageRastreio';


describe("Avaliação – Busca CEP", () => {
  beforeEach(() => {
      cy.AcessaSite();
  });

  it("Devo Confirmar que o CEP não existe", () => {
    // 1.	Digito o CEP 80700000 no campo de busca
    cy.xpath(HomeElements.inputBuscaCepXpath).type("80700000");

    // 2.	Clico na lupa de busca de CEP
    cy.get(HomeElements.BtnLupaBuscaCep).click();

    // 3.	Deve validar a mensagem não há dados a serem exibidos
    cy.get(CepElements.lblMensagem).should(
      "have.text",
      "Não há dados a serem exibidos"
    );
    // 4.	Deve validar a mensagem Dados não encontrado
    cy.get(CepElements.lblMensagem2).should(
      "have.text",
      "Dados não encontrado"
    );

    // 5.	Deve clicar na logo dos correios e deve reedirecionar para a home
    cy.get(CepElements.logoRedirecionaHome).click();
  });

  it("Devo Confirmar que o CEP existe", () => {
    // 1.	Digito o CEP 80700000 no campo de busca
    cy.get(HomeElements.inputBuscaCep).type("01013001");

    // 2.	Clico na lupa de busca de CEP
    cy.get(HomeElements.BtnLupaBuscaCep).click();

    // 3.	Deve validar que o logradouro existe
    cy.get(CepElements.lblCampoLogradouro).contains(
      "Rua Quinze de Novembro"
    );

    // 4.	Deve validar que a cidade e estado existem
    cy.get(CepElements.lblCampoCidadeEstado).should(
      "have.text",
      "São Paulo/SP"
    );
    
    // 5.	Deve clicar na logo dos correios e deve reedirecionar para a home
    cy.get(CepElements.logoRedirecionaHome).click();
  });

  it("Devo Confirmar que o código de Rastreio não existe", () => {
    // 1.	Procure pelo numero de rastreio SS987654321BR
    cy.get(RastreioElements.inputBuscaRastreio).type("SS987654321BR");

    // 2.	Clico na lupa de busca de Rastreio
    cy.get(HomeElements.BtnLupaBuscaRastreio).click();

    // 3.	Clico na lupa de busca de rastreio dentro da página de rastreio
    cy.get(RastreioElements.btnBuscaRastreamento).click();

    //Não é possível continuar o teste automatizado devido a página possuir um Captcha ativo. Não sendo possível quebrar-lo em produção.
  });
});
