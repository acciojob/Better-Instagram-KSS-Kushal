//your code here
function allowDrop(ev) {
  ev.preventDefault();
}

let start;
let end;
function drag(ev) {
	start = ev.target;
}

function drop(ev) {
  ev.preventDefault();
	end = ev.target;
	swapEle(start, end);
}

function swapEle(start, end) {
 // Create a temporary storage for the start element
    let temp = document.createElement("div");
    temp.appendChild(start.cloneNode(true));

    // Replace start with end
    start.parentNode.replaceChild(end.cloneNode(true), start);

    // Replace end with temp (original start)
    end.parentNode.replaceChild(temp.firstChild, end);
}

it('should have 6 draggable elements', () => {
  cy.visit('http://localhost:3000') // replace with your page's URL
  cy.wait(5000) // wait for 5 seconds
  for (let index = 1; index <= 6; index++) {
    cy.get(`#div${index}`).should('have.length', 1)
  }
})