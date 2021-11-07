module.exports = {
    // xu ly document ve ve object 
    multipleMongooseToObject : function (mongooses) {
        return mongooses.map(mongooses => mongooses.toObject());
    },
    MongooseToObject : function (mongooses) {
        return mongooses ? mongooses.toObject() : mongooses;
    }
}