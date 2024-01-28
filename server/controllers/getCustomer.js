import { CUSTOMER } from '../models/customer.js';

export const getCustomer = async (req, res, next) => {
    try {
        const customer = await CUSTOMER.find({});

        if (customer) {
            res.status(201).send({
                message: "Customer data fetched successfully",
                customerData: customer
            });
        } else {
            res.status(404).send("Customer not found");
        }

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};
