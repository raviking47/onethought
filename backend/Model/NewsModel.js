const mongoose = require('mongoose');


const NewsModel = mongoose.Schema(
    {
        // newsCategory:{type:String,required:true},
        newsHeadline:{type:String,required:true},
        newsSubHeadline:{type:String,required:true},
        newsContant:{type:String,required:true},
        // newsImage:{type:String,default:"https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638886464/EducationHub/photos/proof-of-a-landslide.jpg"},
        newsId:{type:String,default:"A12546"}
    },
    {
        timeStamps:true
    }
)
const News = mongoose.model("News",NewsModel)
module.exports  =News