const mongoose = require('mongoose');
const mongoosPaginate=require('mongoose-paginate');
// declaração do modelo de negocio da aplicação
const ProductSchema =  new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required:true,

    },
    url:{
        type: String,
        required:true,
    },
    createdAt:{
        type:Date,
        default: Date.now, 
    }
});

ProductSchema.plugin(mongoosPaginate);
// isso aqui praticamente registra  o model Prduct 
mongoose.model('Product', ProductSchema);
