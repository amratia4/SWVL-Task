export class TodoPage{

    navigate(){
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    }


    addTodo(todotext){
        cy.get('.new-todo', {timeout: 5000}).type(todotext + "{enter}")
    
        
    }
}