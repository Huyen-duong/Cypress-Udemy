/// <reference types="cypress" />

import { pageModel } from "../support/page_objects/pagesNavigate";
import { formPage } from "../support/page_objects/formPage";
 describe ('test with page object ', ()=>{
    beforeEach('open application', ()=>{
        cy.visit('/');
    })

    it('navigate to a Page', ()=>{
        pageModel.formlayoutPage();
        pageModel.datePicker();
        pageModel.alert();
        pageModel.toastItem();
        pageModel.toolTip();
    })
    it.only('should confirm submit form',() =>{
        pageModel.formlayoutPage();
        formPage.inputForm("huyen","huyendt@gmail.com")

    })
 })