
const docheckdb = function (){


    if ('indexedDB' in window) {

        console.log('IndexedDB is supported.');
      
      }
      else {
        console.log('IndexedDB is not supported.');
      }


(async () => {

    if (!navigator.storage) return;
  
    const 
    required = 10, // 10 MB required
    estimate = await navigator.storage.estimate(),
  
      // calculate remaining storage in MB
      available = Math.floor((estimate.quota - estimate.usage) / 1024 / 1024);
      console.log('Storage is available:'+available);
    if (available >= required) {
      console.log('Storage is available');
      // ...call functions to initialize IndexedDB
    }
  
  })();

  const dbOpen = indexedDB.open('notebook', 1);
  console.log('Storage is open');
}




export default docheckdb;