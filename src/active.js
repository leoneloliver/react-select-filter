export function myfunc(){
    console.log('loaded...');
    let result = document.getElementById("myname").value;
    alert(result);
    this.setState({ myname:'Leonel' });
}