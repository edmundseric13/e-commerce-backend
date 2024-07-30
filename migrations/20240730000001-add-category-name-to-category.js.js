'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Check if the column exists before trying to add it
    const tableInfo = await queryInterface.describeTable('category');
    if (!tableInfo.category_name) {
      await queryInterface.addColumn('category', 'category_name', {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Uncategorized'
      });
    }

  },

  async down (queryInterface, Sequelize) {
  }
};