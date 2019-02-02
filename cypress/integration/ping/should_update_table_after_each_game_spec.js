/// <reference types="Cypress" />

context('When finishing a game', () => {
  it('The table should update', () =>{ 
    cy.visit('/');
    cy.get('div.app button').contains('Start').click();
    addPlayer('Player One');
    addPlayer('Player Two');
    addPlayer('Player Three');
    cy.get('div.player_select button').contains('Start').click();    
    completeGame(0,0,11,10);
    completeGame(0,1,7,11);
    completeGame(0,2,11,8);
    cy.get('.player_result').eq(0).find('.player_name').should('contain', "Player One");
  });
});

function addPlayer(playerName) {
  cy.get('div.player_input:last input').type(playerName);
  cy.get('div.player_input:last button').contains('+').click();
}

function completeGame(matchIndex, gameIndex, playerOneScore, playerTwoScore) {
  cy.get('.fixture').eq(matchIndex).find('.games .game_score').eq(gameIndex).find('input').eq(0).type(playerOneScore);
  cy.get('.fixture').eq(matchIndex).find('.games .game_score').eq(gameIndex).find('input').eq(1).type(playerTwoScore);
}