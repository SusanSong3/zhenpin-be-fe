
const productmodel = {
    // productionAddajax(data) {
    //     console.log("123")
    //     return $.ajax({
    //         url: '/api/systemapi/productsAdd',
    //         type: 'POST',
    //         data: data,
    //     })
    // },
    //上传产品信息表单
    productAjaxSubmit(fn, router) {
        let options = {
            "success": (result, status, router) => {
                console.log(result)

                fn(result, router)
                return result
            },
            "type": "post",
            "resetForm": true,
            "dataType": "json"
        }
        $("#productForm").ajaxSubmit(options)
    },
    //获取产品列表信息
    productFindAll() {
        // console.log('456')
        return $.ajax({
            url: '/ssh1fs/list',
            type: 'get',
            data:{
                c_id:1
            },
            success: (result) => {
                console.log(result)
                return result
            }
        })
    },
    //获取对应产品列表信息
    productFindCid(option) {
        // console.log('456')
        return $.ajax({
            url: '/ssh1fs/list',
            type: 'get',
            data: option,
            success: (result) => {
                console.log(result)
                return result
            }
        })
    },
    //获取产品列表信息删除产品信息
    productremove(id, productImgName){
        return $.ajax({
            url: '/api/systemapi/products/find',
            type: 'delete',
            data: {
                id,
            },
            success: (result) => {
                if (result.ret) {
                    return result
                }
            },
            error: ()=>{
                return status;
            }
        })
    },
    productFindById(id){
        return $.ajax({
            url: `/api/systemapi/products/${id}`,
            type: 'get',
            data: {
                id,
            },
            success: (result) => {
                if (result.ret) {
                    return result
                }
            }
        })
    }

}
module.exports = productmodel

