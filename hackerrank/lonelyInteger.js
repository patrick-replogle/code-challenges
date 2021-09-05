function lonelyinteger(a) {
    let num = 0;
    
    a.forEach(el => num ^= el);
  
    return num;
}
