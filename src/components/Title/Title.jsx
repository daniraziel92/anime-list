import './Title.css'


const title = (propstitle) =>{
   return(
    <section class="wrapper">
        <div class="top">{propstitle.text}</div>
        <div class="bottom" aria-hidden="true">{propstitle.text}</div>
    </section>
   ); 
}
export default title