//const cypress = require("cypress")
/// <reference types="Cypress" />

describe('MeldCX Login UI Test', function(){
    beforeEach(function(){
        cy.visit("http://localhost:8080/")
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
    it("Login Test with Valid Credentials", function(){
        cy.get("[placeholder='Enter Username']").type("SomeUser_name")
        cy.get("[placeholder='password']").type(this.data.SomeUser_name.password)
        cy.get(".sc-bZQynM").click()
        cy.get(".sc-bdVaJa > div").contains(`Hello ${this.data.SomeUser_name.name}`)
    })
    it("Login Test with Invalid User Name", function(){
        cy.get("[placeholder='Enter Username']").type("Some_name")
        cy.get("[placeholder='password']").type(this.data.SomeUser_name.password)
        cy.get(".sc-bZQynM").click()
        cy.wait(2000)
        cy.get(".sc-bdVaJa > div").contains("qa.code-quiz.dev")
    })
    it("Login Test with Invalid Password", function(){
        cy.get("[placeholder='Enter Username']").type("SomeUser_name")
        cy.get("[placeholder='password']").type("UserPassword")
        cy.get(".sc-bZQynM").click()
        cy.wait(2000)
        cy.get(".sc-bdVaJa > div").contains("qa.code-quiz.dev")
    })
    it("Login button Test with Empty Values", function(){
        cy.get(".sc-bZQynM").click()
        cy.wait(2000)
        cy.get(".sc-bdVaJa > div").contains("qa.code-quiz.dev")
    })
    it("Log Out Button Test", function(){
        cy.get("[placeholder='Enter Username']").type("SomeUser_name")
        cy.get("[placeholder='password']").type(this.data.SomeUser_name.password)
        cy.get(".sc-bZQynM").click()
        cy.wait(4000)
        cy.get(".sc-bxivhb").click()
    })
})