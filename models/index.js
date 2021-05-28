const User = require("./User");
const Plan = require("./Plan");

User.hasMany(Plan, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Plan.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {User, Plan}
