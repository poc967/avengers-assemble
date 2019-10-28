function filterBy(poweredIndividuals, predicate) {
  return poweredIndividuals.filter(predicate)
}

function filterByAffiliation(poweredIndividuals, criteria) {
  const predicate = (individual) => individual.affliations === criteria

  return filterBy(poweredIndividuals, predicate)
}

function filterByAlias(poweredIndividuals, criteria) {
  const predicate = (individual) => individual.alias === criteria

  return filterBy(poweredIndividuals, predicate)
}

function filterByCountry(poweredIndividuals, criteria) {
  const predicate = (individual) => individual.country === criteria

  return filterBy(poweredIndividuals, predicate)
}

function filterById(poweredIndividuals, criteria) {
  const predicate = (individual) => individual.id === criteria

  return filterBy(poweredIndividuals, predicate)
}

function registry(poweredIndividuals, mode, criteria) {
  switch (mode) {
    case 'byAffiliation':
      return filterByAffiliation(poweredIndividuals, criteria)
    case 'byAlias':
      return filterByAlias(poweredIndividuals, criteria)
    case 'byCountry':
      return filterByCountry(poweredIndividuals, criteria)
    case 'byId':
      return filterById(poweredIndividuals, criteria)
    default:
      throw new Error(`Unknown mode: ${mode}`)
  }
}

module.exports = registry
