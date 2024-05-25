const { Product } = require('../models');

const ProductData =
    [
        {
            "name": "Astra Widget",
            "location": "Fabrication Dept",
            "comment": "Initial phase completed, awaiting quality check.",
            "user_id": "1",
            "status": "In progress",
            "startTime": "2024-05-24T15:05:00.000Z",
            "stopTime": "2024-05-24T20:00:00.000Z",
            "duration": "4 hours 55 minutes 0 seconds"
        },
        {
            "name": "Orion Module",
            "location": "Assembly Line 3",
            "comment": "Components assembled, pending final testing.",
            "user_id": "2",
            "status": "In progress",
            "startTime": "2024-05-23T16:30:00.000Z",
            "stopTime": "2024-05-23T22:30:00.000Z",
            "duration": "6 hours 0 minutes 0 seconds"
        },
        {
            "name": "Nebula Kit",
            "location": "Packaging Section",
            "comment": "Packaging complete, ready for shipment.",
            "user_id": "3",
            "status": "Completed",
            "startTime": "2024-05-20T15:55:00.000Z",
            "stopTime": "2024-05-20T17:00:00.000Z",
            "duration": "1 hour 5 minutes 0 seconds"
        }
    ]

const seedProducts = () => Product.bulkCreate(ProductData, { individualHooks: true, returning: true });

module.exports = seedProducts;
