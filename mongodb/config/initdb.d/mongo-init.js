print('Start #################################################################');

db = db.getSiblingDB('nightscout');
db.createCollection('nightscoutTestCollection');
db.createUser(
  {
    user: 'nightscout_user',
    pwd: 'nightscout_pass_123*',
    roles: [
      { "role": "readWrite", "db": "nightscout" }
    ]
  },
);

print('End #################################################################');