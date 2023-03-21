/// <reference types="Cypress" />

describe('Belirli bir Pokemonun habitatı', () => {
    it('Snorlax dağ bölgesinde yaşar', () => {
      cy.request('https://pokeapi.co/api/v2/pokemon-species/snorlax')
        .its('body')
        .then((response) => {
          expect(response.habitat.name).to.equal('mountain');
        });
    });
  });
/** 
describe.skip('Belirli bir Pokemonun resmi', () => {
    it('Bulbasaur\'un resminin boyutu 96x96', () => {
      cy.request('https://pokeapi.co/api/v2/pokemon/1')
        .its('body')
        .then((response) => {
          expect(response.sprites.front_default).to.have.property('width', 96);
          expect(response.sprites.front_default).to.have.property('height', 96);
        });
    });
  });

  **/

  describe('Belirli bir Pokemonun evrim zinciri', () => {
    it('Charmander -> Charmeleon -> Charizard', () => {
      cy.request('https://pokeapi.co/api/v2/pokemon-species/charmander')
        .its('body')
        .then((response) => {
          const evolutionChainUrl = response.evolution_chain.url;
          return cy.request(evolutionChainUrl);
        })
        .then((response) => {
          const charmeleon = response.body.chain.evolves_to[0];
          const charizard = charmeleon.evolves_to[0];
          expect(charmeleon.species.name).to.equal('charmeleon');
          expect(charizard.species.name).to.equal('charizard');
        });
    });
  });

  describe('Belirli bir Pokemonun hareketleri', () => {
    it('Bulbasaur\'un Vine Whip hareketi için doğru güç puanı', () => {
      cy.request('https://pokeapi.co/api/v2/pokemon/1')
        .its('body')
        .then((response) => {
          const vineWhip = response.moves.find((move) => move.move.name === 'vine-whip');
          return cy.request(vineWhip.move.url);
        })
        .then((response) => {
          expect(response.body.power).to.equal(45);
        });
    });
  });
/**
  describe.skip('Belirli bir Pokemonun hareketlerinin ayrıntıları', () => {
    it('Bulbasaur\'un hareketlerinin ayrıntılarını alma', () => {
      cy.request('https://pokeapi.co/api/v2/pokemon/1')
        .its('body')
        .then((response) => {
          const moveUrls = response.moves.map((move) => move.move.url);
          return cy.request(moveUrls);
        })
        .then((responses) => {
          responses.forEach((response) => {
            expect(response.status).to.equal(200);
          });
        });
    });
  });
    describe.skip('Belirli bir Pokemonun tür uyumluluğu', () => {
    it('Bulbasaur türü çim ve zehir olduğu için, çim tipi hareketlerine karşı savunmasızdır', () => {
      cy.request('https://pokeapi.co/api/v2/pokemon-species/bulbasaur')
        .its('body')
        .then((response) => {
          const grassType = response.damage_relations.double_damage_from.find((type) => type.name === 'grass');
          expect(grassType).to.exist;
        });
    });
  });

  **/
  describe('PokeAPI Test', () => {
    it('should return Pikachu data from PokeAPI', () => {
      cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/pikachu')
        .then((response) => {
            const b = response;

          expect(response.status).to.eq(200)
          expect(response.body.name).to.eq('pikachu')
          expect(response.body.base_experience).to.eq(112)
          expect(response.body.abilities).to.have.lengthOf(2)
          expect(response.body.id).to.eq(25)
          expect(response.body.is_default).to.eq(true)
          expect(b.body.weight).to.eq(60)
          expect(response.body.forms).to.have.lengthOf(1)
          expect(b.body.order).to.eq(35)
          
        })
    })
  })

  describe('PokeAPI Test', () => {
    it('GET Pokemon', () => {
      cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/pikachu')
        .its('status')
        .should('equal', 200);
    });
  
    it('POST Pokemon', () => {
      cy.request({
        method: 'POST',
        url: 'https://pokeapi.co/api/v2/pokemon',
        body: {
          name: 'charmander',
          type: 'fire'
        }
      })
        .its('status')
        .should('equal', 201);
    });
  
    it('PUT Pokemon', () => {
      cy.request({
        method: 'PUT',
        url: 'https://pokeapi.co/api/v2/pokemon/charmander',
        body: {
          name: 'charizard',
          type: 'fire,flying'
        }
      })
        .its('status')
        .should('equal', 200);
    });
  
    it('DELETE Pokemon', () => {
      cy.request({
        method: 'DELETE',
        url: 'https://pokeapi.co/api/v2/pokemon/charizard',
      })
        .its('status')
        .should('equal', 204);
    });
  });
  
  

 
  
    


  
  
  