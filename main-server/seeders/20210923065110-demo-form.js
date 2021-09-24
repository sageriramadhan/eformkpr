'use strict';

module.exports = {
  
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('forms', [{
        id:10,
        userId:1,
        skemaPengajuan:"Penghasilan Pribadi",
        objekDibiayai:"Properti",
        peruntukanPembiayaan:"Properti",
        pilihProgram:"MMQ",
        specialMmq:"specialMmq",
        akadDiajukan:"Murabahah",
        plafondDiajukan:"plafondDiajukan",
        jangkaWaktuPembiayaan:"jangkaWaktuPembiayaan",
        createdAt:new Date,
        updatedAt:new Date
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('forms', null, {});
  }
};
