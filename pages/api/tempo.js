export default async function tempo(request, response){
    // const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const cep = '62870000';
    const dynamicDate = new Date();
//ZJwLOhi01EvB90CIpsyw1e0fGRzPfw1Q
    const subscribersResponse = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`);
    const cepResponseJson = await subscribersResponse.json();
    const city = cepResponseJson.city;

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString(),
        cep: cepResponseJson,
        city: city
    })
}