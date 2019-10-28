const mocha = require('mocha')
const expect = require('chai').expect
const { describe, it } = mocha
const registry = require('../registry')
const poweredIndividuals = require('./poweredIndividuals.json')

describe('Registry', () => {
  it('returns the powered individuals for a specific country', () => {
    const returned = registry(poweredIndividuals, 'byCountry', 'Afghanistan')

    expect(returned).to.deep.equal([{
      id: "2", name: "Sooraya Qadir", alias: "Dust", country: "AFGHANISTAN",
      powers: ["transmorph"], affliations: ["X-Men"]
    }])
  })

  it('returns the powered individuals for a specific affiliation', () => {
    const returned = registry(poweredIndividuals, 'byAffiliation', 'Avengers')

    expect(returned).to.deep.equal([{
      id: 1, name: "Steve Rogers", alias: "Captain America", country: "United States",
      powers: ["Super Strength", "Super Speed", "Super Durability"], affliations: ["Avengers"]
    }, {
      id: 3, name: "Bruce Banner", alias: "Hulk", country: "United States",
      powers: ["Super Strength", "Involnerability"], affliations: ["Avengers"]
    }, {
      id: 4, name: "Roberto Da Costa", alias: " Sunspot ", country: "Brazil",
      powers: ["Super Strength", "Super Speed", "Super Durability"],
      affliations: ["Avengers", "X-Men"]
    }])
  })

  it('returns the powered individuals for a specific id', () => {
    const returned = registry(poweredIndividuals, 'byId', 2)

    expect(returned).to.deep.equal([{
      id: "2", name: "Sooraya Qadir", alias: "Dust", country: "AFGHANISTAN",
      powers: ["transmorph"], affliations: ["X-Men"]
    }])
  })

  it('returns the powered individuals for a specific alias', () => {
    const returned = registry(poweredIndividuals, 'byAlias', 'Sunspot')

    expect(returned).to.deep.equal([{
      id: 4, name: "Roberto Da Costa", alias: " Sunspot ", country: "Brazil",
      powers: ["Super Strength", "Super Speed", "Super Durability"],
      affliations: ["Avengers", "X-Men"]
    }])
  })

  it('throws an error for an unknown mode', () => {
    expect(() => registry([], 'unknown', '')).to.throw('Unknown mode: unknown')
  })
})
