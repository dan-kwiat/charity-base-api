const aggByTerm = require('./aggByTerm')
const AGG_NAME = 'agg_beneficiary'
const ES_FIELD = 'beneficiaries.id'
const NUM_VALUES = 7

const aggBeneficiaries = aggByTerm(AGG_NAME, ES_FIELD, NUM_VALUES)

module.exports = aggBeneficiaries
