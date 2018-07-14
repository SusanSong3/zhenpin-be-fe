//
// const modelproduct = require('../models/productAdd.model')
const productListTPL = require('../views/customer.html')

module.exports = {
    render( {res, router} ){
        let tpl = template.render(productListTPL)
        res.render(tpl)
    },
    event(){
        $(".cus-status").on('click',function(event){
            if($(event.target).hasClass('btn-danger')){
                $(event.target).removeClass('btn-danger').addClass('btn-success').html('点击启用')
            }else{
                $(event.target).removeClass('btn-success').addClass('btn-danger').html('点击禁用')
            }
        })
    },

    // async render( {res, router} ){
    //     let productAll = await modelproduct.productFindAll()
    //     console.log(productAll)
    //     let tpl = template.render(productListTPL, productAll)
    //     res.render(tpl)
    // }
}