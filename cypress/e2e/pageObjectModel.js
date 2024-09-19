/// <reference types="cypress" />

import { pageModel } from "../support/page_objects/pagesNavigate";
import { formPage } from "../support/page_objects/formPage";
import { datePickerPage } from "../support/page_objects/datePickerPage";
import { smartTable } from "../support/page_objects/smartTablePage";
 describe ('test with page object ', ()=>{
    beforeEach('open application', ()=>{
        cy.openApplication();
    })

    it('navigate to a Page', ()=>{
        pageModel.formlayoutPage();
        pageModel.datePicker();
        pageModel.alert();
        pageModel.toastItem();
        pageModel.toolTip();
    })
    it('should confirm submit form',() =>{
        pageModel.formlayoutPage();
        formPage.inputForm("huyen","huyendt@gmail.com")

    })
    it('date pikcer page', () =>{
        //common date picker
        pageModel.datePicker();
        datePickerPage.selectDate(90);
        //date picker with range
        datePickerPage.selectDateWithRange(0,20)


    })
    it('smart table', ()=>{
        pageModel.alert();
        smartTable.deleteARow();


    })


 })