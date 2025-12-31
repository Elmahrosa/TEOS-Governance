const schema = require('../governance/proposal_schema.json');
const Ajv = require('ajv');
const ajv = new Ajv();
const validate = ajv.compile(schema);

test('Invalid badge should fail', () => {
  const proposal = {
    proposer: "Akvm3CbDN448fyD8qmQjowgBGpcYZtjuKFL4xT8PZhbF",
    badge: "Hacker",
    proposal: "Upgrade node",
    type: "upgrade"
  };
  expect(validate(proposal)).toBe(false);
});

test('Missing required field should fail', () => {
  const proposal = {
    proposer: "Akvm3CbDN448fyD8qmQjowgBGpcYZtjuKFL4xT8PZhbF",
    badge: "Citizen",
    type: "upgrade"
  };
  expect(validate(proposal)).toBe(false);
});
