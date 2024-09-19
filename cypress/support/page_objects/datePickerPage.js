

function navigateToMontFuture(day){
    let date= new Date()
    date.setDate(date.getDate() + day)
    let dateFuture= date.getDate()
    let monthFuture = date.toLocaleDateString('en-US',{month : "short"})
    let yearFuture = date.getFullYear()
    let dateToAssertion= `${monthFuture} ${dateFuture}, ${yearFuture}`
    cy.get('nb-calendar-navigation').invoke('attr','ng-reflect-date').then( currentDate =>{
        if(!currentDate.includes(monthFuture) || !currentDate.includes(yearFuture) ){
            cy.get('[data-name="chevron-right"]').click()
            navigateToMontFuture(day)
        }else{
            cy.get('.day-cell').not('.bounding-month').contains(dateFuture).click({force: true})

        }

    })
    return dateToAssertion;

}
 export class DatePickerPage{

 selectDate(dayFromToday){
        cy.contains('nb-card','Common Datepicker').find('input').then(datePicker =>{

        cy.wrap(datePicker).click();
        const dateToAssertion=  navigateToMontFuture(dayFromToday)
        cy.wrap(datePicker).invoke('val').should('contain',dateToAssertion)
        })

    }   
 selectDateWithRange(dayFrom, dayTo){
    cy.contains('nb-card','Datepicker With Range').find('input').then(datePicker =>{
        cy.wrap(datePicker).click();
        const dateFrom=  navigateToMontFuture(dayFrom)
        const dateTo = navigateToMontFuture(dayTo)
        cy.wrap(datePicker).invoke('val').should('contain', dateFrom + ' - ' + dateTo)


    })

 }

 }

 export const datePickerPage = new DatePickerPage()