
const TPL = require('../views/columnSet.html')

module.exports = {

    render( {res, router} ){
        let tpl = template.render(TPL)
        res.render(tpl)
    },
    inputfile(){
        // $(document).on('ready', function() {
            $("#inputImg").fileinput({
                language: 'zh',
                // showUpload: false,
                dropZoneEnabled: false,
                aallowedFileExtensions: ["jpg", "png", "gif"],
                maxFileCount: 1,
                // mainClass: "input-group-lg"
            });
        // });
        // $('#inputImg').fileinput({
        //     language: 'zh',
        //     showCaption: false,
        //     dropZoneEnabled: false,
        //     aallowedFileExtensions: ["jpg", "png", "gif"],
        //     maxFileCount: 5,
        //     mainClass: "input-group-lg"
        // })
    },
}