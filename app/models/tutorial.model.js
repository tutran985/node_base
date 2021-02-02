// chay tu model/indexjs => sau do ms toi day

module.exports = (mongoose, mongoosePaginate) => {
    var schema = mongoose.Schema({
        title: String,
        description: String,
        published: Boolean
    }, { timestamps: true });
    /*
        {
            "_id": "5e363b135036a835ac1a7da8",
            "title": "Js Tut#",
            "description": "Description for Tut#",
            "published": true,
            "createdAt": "2020-02-02T02:59:31.198Z",
            "updatedAt": "2020-02-02T02:59:31.198Z",
            "__v": 0
        }
        Nếu bạn sử dụng ứng dụng này với giao diện người dùng cần trường id thay vì _id
        bạn phải ghi đè toJSONphương thức ánh xạ đối tượng mặc định thành đối tượng tùy chỉnh

    */
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    // theem phan trang
    schema.plugin(mongoosePaginate);

    const Tutorial = mongoose.model("tutorial", schema);
    return Tutorial;
};