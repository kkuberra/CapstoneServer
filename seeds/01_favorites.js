exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorites').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorites').insert([{
          id: 1,
          name: 'Devin Harris',
          player_id: '20000534',
          image_url: "https:\/\/s3-us-west-2.amazonaws.com\/static.fantasydata.com\/headshots\/nba\/low-res\/20000534.png"
        }
      ]);
    }).then(() => knex.raw('ALTER SEQUENCE favorites_id_seq RESTART WITH 2') );

};