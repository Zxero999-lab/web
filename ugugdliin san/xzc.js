const opA = (root, val) => { 
    const n = new TNode(val); 
    if (!root) return n; 
    let c = root; 
    while (true) { 
        if (val < c.v) { 
            if (c.l) c = c.l; 
            else { c.l = n; break; } 
        } else { 
            if (c.r) c = c.r; 
            else { c.r = n; break; } 
        } 
    } 
    return root; 
}; 
