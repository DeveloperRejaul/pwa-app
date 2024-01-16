export default function swDev () {
    const SW_URL = `${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker.register(SW_URL).then(res=> console.log(res)).catch(err=> console.log(err)) 
}  