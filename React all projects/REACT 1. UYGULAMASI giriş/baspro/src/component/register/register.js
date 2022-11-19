import React , {useState}from "react" /*çünkü biz boşlukları doluyken kullanacağız bu nedenle bu fonksiyonu kullanacağız"hock"*/
import "./register.css"


const Register=()=>{

/*burada şimdi "useState" ugulacağız sağ ve sol state(durum) dan oluşur*/
   const [name,setname]=useState(); /*şu ilk hali demekki boş olacak durumu boş(parantez içi)*/
   const [age,setage]=useState();    /*şu ikinci input için her input için ayrı boş ve dolu durumlarını var */    
    
    const formhandler=(event)=>{ /* şimdi event olduğu şeye bahseder*/
        event.preventDefault(); /*şu hazır fonksiyonu sayfayı kendi kendine yenilememesi için kullanılır*/
        console.log(name,age);
        setname(``); /*yani yazdırdıktan zonra  yeniden boşlukları boş olsun*/
        setage(``);
    }
/*burada yüz stat devamı*/
     /*şimdi input içeri dolu olursa*/
     const namehandler=(event)=>{
          setname(event.target.value);
     }
     const agehandler=(event)=>{
        setage(event.target.value);
   }/*tabi şunlar sonraki durum dolu olurken bu nedenle sağ duruma verdik üsündeki parametre olan*/

        return(
       <section className="register">
        <form onsubmit={formhandler}>
            <label>your name</label> 
            <input type="text" onChange={namehandler} value={name} />
            <label>your age</label>
            <input type="number" onChange={agehandler} value={age}/>
            <button type="submit">Add user</button>
        </form>
        
        </section>
      
    )

}

export default Register;

       /*submit= göndermek*/
/*onChange yani burda değişiklik olursa bu fonksiyonu kullan*/
/*value  o öyle  bırak yaptıktan sonra ben dedimki 1. durumu gibi bırak yani boş */