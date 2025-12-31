const schema = require('../governance/proposal_schema.json');
const Ajv = require('ajv');
const ajv = new Ajv();
const validate = ajv.compile(schema);

test('Valid proposal should pass', () => {
  const proposal = {
    proposer: "Akvm3CbDN448fyD8qmQjowgBGpcYZtjuKFL4xT8PZhbF",
    badge: "Citizen",
    proposal: "Upgrade network parameters for civic node tier",
    type: "upgrade"
  };
  expect(validate(proposal)).toBe(true);
});
