export class SmartTablePage{
    deleteARow(){
        cy.get('tbody tr').first().find('.nb-trash').click()
        cy.on('window:confirm', alert =>{
            expect(alert).to.equal('Are you sure you want to delete?')
        })
    }
   
}
export const smartTable = new SmartTablePage();