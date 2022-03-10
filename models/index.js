const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: false,
});

// defining page and user models (tables)
const Page = db.define("page", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
     unique: true,
    },
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM("open", "closed"),
    defaultValue: "open",
  },
});

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "guest-user",
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      unique: true,
      isEmail: true,
    },
  },
});

module.exports = {
  db, Page, User,
};
