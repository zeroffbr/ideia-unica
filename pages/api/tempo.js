export default function tempo(request, response){
    const dynamicDate = new Date();
    response.json({
        date:dynamicDate.toGMTString()
    })
}