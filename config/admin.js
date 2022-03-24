module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5d5d760094925de31feda1a5c2789013'),
  },
});
