const Vehicles = require('../model/Vehicles');
const Payments = require('../model/Payments');

module.exports = {
    async index (req, res) {
        const vehiclesNowQtd = (await Vehicles.find({paid: false})).length;

        const paymentsToday = await Payments.find();
        const paymentsTodayQtd = paymentsToday.length;
        var paymentsTodaySum = 0;

        for(i=0; i <= paymentsTodayQtd-1; i++){
            paymentsTodaySum = +(paymentsTodaySum) + +(paymentsToday[i].value);
        }

        // 36 is the number of available parking spots (random lol)
        res.json({
            'vehiclesNow': vehiclesNowQtd,
            'freeSpace': 36 - vehiclesNowQtd,
            'paymentsTodayQtd': paymentsTodayQtd,
            'paymentsTodaySum': paymentsTodaySum,
        })
    }
}
