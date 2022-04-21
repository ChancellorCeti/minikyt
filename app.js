document.addEventListener('wheel',(e)=>{
    console.log('e')
})
window.addEventListener('userproximity', (e)=>{
    console.log(e)
})
window.addEventListener('hashchange', function(event) {
    console.log('Hash changed from ' + event.oldURL);
  });
