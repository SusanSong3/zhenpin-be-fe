const tplproductAdd = require('../views/productAdd.html')
const modelproduct = require('../models/productAdd.model')
const commodityAddControllors = {
    productsAddRender({res, req ,router}){
        res.render(tplproductAdd)
        this.inputfile()
        $('#goback').on('onclick', () => {
            router.back()
        })
        this.addproduct({res, req ,router})
    },
    inputfile(){
        $('#item_productimg').fileinput({
            language: 'zh',
            initialPreview :[],
            // uploadAsync: false,
            showUpload:false,
            // showCaption: false,
            // dropZoneEnabled: false,
            allowedPreviewTypes : [ 'image' ],
            aallowedFileExtensions: ["jpg", "png", "gif"],
            maxFileCount: 5,
        })
    },
    addproduct({res, req ,router}) {
        $('#addsubmit').on('click', async () => {
            //设置禁止触发默认事件，禁止表单的默认提交
            event.preventDefault()
            let that = commodityAddControllors
            let options = {
                "success" : (result, status, router) => {
                    console.log(result)
                    that.routerBack(result, status, router)
                },
                "type":"post",
                "resetForm" : true,
                "dataType" : "json"
            }
            $("#productForm").ajaxSubmit(options)
        })
    },

    routerBack(result,status, router) {
        if (result.ret) {
            alert('发布成功！')
            router.back()
        }else{
            console.log(router)
            alert('发布失败！')
        }
    },
}

module.exports = commodityAddControllors