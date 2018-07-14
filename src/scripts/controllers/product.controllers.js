const modelproduct = require('../models/productAdd.model')

const productionTPL = require('../views/production.html')
const productListTPL = require('../views/productList.html')
const tplproductAdd = require('../views/productAdd.html')
const productEditTPL = require('../views/productEdit.html')

const toolsUtil = require('../utils/tools.util')
const wsCache = new WebStorageCache();

const productsController = {

    async productListPos({res, router}){

        await productsController.renderProductsData({res, router});
        await productsController.columnSelection()
    },

    //渲染产品管理页面设置路由跳转加载功能方法
    async renderProductsData({res, router}){
        // console.log('123')
        let productAll = await modelproduct.productFindAll()
        console.log(productAll)
        let tpl = await template.render(productionTPL, productAll)
        res.render(tpl)
        $('#productsAdd').on('click', () => {
            router.go('/productAdd')
        })
        $('.productEdit').on('click', function() {
            let id = $(this).attr('proid')
            router.go('/productEdit',{ id })
        })
        productsController.removePos({res, router})
        //调用分页组件
        productsController.paginate()
    },

    /*------------------产品上传功能接口---------------------*/
    productsAddPos({res, req ,router}){
        res.render(tplproductAdd)
        $('#goback').on('onclick', () => {
            router.back()
        })
        productsController.addproduct({res, req ,router})

        $('#item_productimg').fileinput({
            language: 'zh',

            // uploadAsync: false,
            showUpload:false,
            // showCaption: false,
            // dropZoneEnabled: false,
            allowedPreviewTypes : [ 'image' ],
            aallowedFileExtensions: ["jpg", "png", "gif"],
            maxFileCount: 5,
        })
    },


    /*---------------------产品修改和编辑功能接口-----------------------*/
    async productEditPos({req,res,router}){
        let data = await modelproduct.productFindById(req.body.id)
        console.log(data)
        let tpl = template.render(productEditTPL, data)
        res.render(tpl)
        let productArry = []
        for(let i=0;i < data.item_productimg.length;i++){
            if(data.item_productimg!=""){
                productArry.push(`<img src="http://localhost:3000/uploads/${data.item_productimg[i]}" width="100%"/>`)
            }
        }
        console.log(data.item_productimg.length,data.item_productimg,productArry)

        //设置图片上传拆件的初始图片
        $('#item_productimg').fileinput({
            language: 'zh',
            initialPreview : productArry,
            // uploadAsync: false,
            showUpload:false,
            // showCaption: false,
            // dropZoneEnabled: false,
            allowedPreviewTypes : [ 'image' ],
            aallowedFileExtensions: ["jpg", "png", "gif"],
            maxFileCount: 5,
        })
        //表单提交
        productsController.addproduct({res, req ,router})

        //返回按钮
        $('#goback').on('onclick', () => {
            router.back()
        })
    },


    //产品删除接口功能
    removePos({res, router}){
        let that = productsController
        $('.remove').on('click', async function () {
            console.log("123")
            let id = $(this).attr('proid')
            if (window.confirm('真的要删除吗')) {
                await modelproduct.productremove(id)
                productsController.renderProductsData({res, router})
            }
        })
    },


    /*------------商品表单信息上传修改和添加公用---------------*/
    addproduct({res, req ,router}) {
        let that = productsController
        $('#addsubmit').on('click', async () => {

            //设置禁止触发默认事件，禁止表单的默认提交
            event.preventDefault()
                let options = {
                "success" : (result, status) => {
                    console.log(result)
                    console.log(router)
                    that.routerBack(result, status, router)
                },
                "type":"post",
                "resetForm" : true,
                "dataType" : "json"
            }
            $("#productForm").ajaxSubmit(options)
        })
    },


    /*--------跳转-------------*/
    routerBack(result,status, router) {
        if (result.ret) {
            alert('发布成功！')
            router.back()
        }else{
            console.log(router)
            alert('发布失败！')
        }
    },

    /*---------------分页控制-----------------*/
    paginate(){
        let options = {
            containerClass:"pagination",
            currentPage: 1,//当前页
            totalPages: 10,//总页数$("#totalpage").val()
            numberofPages: 5,//显示的页数
        }
        $("#paginate").bootstrapPaginator(options)
    },

    /*----------栏目控制----------*/
    columnSelection(){
        console.log($('.product-select'))
        $('.product-select').change( async function(){
            let cid = $(this).val()
            let option = {
                c_id : cid
            }
            let result = await modelproduct.productFindCid(option)
            if(result.ret){

            }else{
                alert
            }
            console.log(result)
            let data = result.data
            console.log(data)
            let tpl = template.render(productListTPL, {msg:data.msg})
            console.log(tpl)
            $('tbody').html(tpl)
        })
    }
}
module.exports = productsController