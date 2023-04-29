import Head from "next/head";
import ProdItem from "./proditem";

const Mazaya = () => {
  
    return (  
        <div className="mt-2 bbgp1 p-2">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>
        <h5 className="d-block d-lg-none text-light text-end">مزايا التطبيق</h5>
<div className="row ">
  <div className="col-8 col-lg-10">
  <h5 className="d-none d-lg-block text-light text-end">مزايا التطبيق</h5>
  <div className="d-none d-lg-block h3">
   <p className="text-light text-end">استمتع بتجربة استخدام فريدة من نوعها </p>
   <p className="text-light text-end">نصلك أينما كنت</p>
   <p className="text-light text-end">باقاقات ألو المميزة وخصومات رائعة </p>
   <p className="text-light  text-end">توصيل طلبات المطاعم والمقاضي بضغطة زر </p>
  </div>
  <div className="d-block d-lg-none ">
   <p className="text-light text-end">استمتع بتجربة استخدام فريدة من نوعها </p>
   <p className="text-light text-end">نصلك أينما كنت</p>
   <p className="text-light text-end">باقاقات ألو المميزة وخصومات رائعة </p>
     </div>
  </div>
  <img className="col-4 col-lg-2" src="hand.png" alt=""/>
</div>
</div>
    );
}
 
export default Mazaya;