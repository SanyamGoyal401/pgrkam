const { User } = require('../models')
const CrudRepository = require('./crud-repository');

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async getUserById(id) {
        try {
            const user = await User.findById(id).exec();
            return user;
        } catch (error) {
            throw error;
        }
    }

    async getUserByEmail(email) {
        try {
            const user = await User.findOne({ email });
            return user;
        } catch (error) {
            throw error;
        }
    }

    async updateTimestamps(id) {
        try {
            const response = await User.findByIdAndUpdate(id, { $currentDate: { updatedAt: true } }, { new: true });
            console.log(response);
        } catch (error) {
            throw error;
        }
    }
    async stats() {
        try {
            const result = await User.aggregate([
                {
                    $project: {
                        year: { $year: "$createdAt" },
                        month: { $month: "$createdAt" },
                        day: { $dayOfMonth: "$createdAt" }
                    }
                },
                {
                    $group: {
                        _id: {
                            year: "$year",
                            month: "$month",
                            day: "$day"
                        },
                        count: { $sum: 1 }
                    }
                },
                {
                    $sort: {
                        "_id.year": 1,
                        "_id.month": 1,
                        "_id.day": 1
                    }
                }
            ]).exec();

            console.log(result);
            // Result will contain the count of users created on each day, month, and year
            return result;
        } catch (err) {
            console.error(err);
        }
    }
    async userstats() {
        try {
            const result = await User.aggregate([
                {
                    $group: {
                        _id: null,
                        totalUsers: { $sum: 1 },
                        activeUsers: {
                            $sum: {
                                $cond: {
                                    if: {
                                        $gte: ["$updatedAt", new Date(Date.now() - 30 * 60 * 1000)] // updatedAt within last 30 mins
                                    },
                                    then: 1,
                                    else: 0
                                }
                            }
                        },
                        deadUsers: {
                            $sum: {
                                $cond: {
                                    if: {
                                        $lt: ["$updatedAt", new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)] // updatedAt 1 year ago
                                    },
                                    then: 1,
                                    else: 0
                                }
                            }
                        }
                    }
                }
            ]).exec();
            console.log(result);
            // Result will contain the count of users created on each day, month, and year
            return result;
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = UserRepository;