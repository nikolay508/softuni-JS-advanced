class Request{
    constructor(a, b, c, d){
        this.method = a; this.uri = b; this.version = c; this.message = d; this.response = undefined; this.fulfilled = false;
    }
}
