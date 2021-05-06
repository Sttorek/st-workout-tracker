const router = require('express').Router();
//! require models here
// const { Tenant, Property } = require('../models');


// router.get('/', async (req, res) => {
//     const tenantData = await Tenant.findAll({
//         include: [
//           {
//             model: Property,
//             attributes: ['address', 'leaseEnd'],
//           },
//         ],
//       }).catch((err) => { 
//         res.json(err);
//       });
//         const tenants = tenantData.map((tenants) => tenants.get({ plain: true }));
//         // console.log("This is the right data", tenants);
//          res.render('all_tenants', {tenants});
// });
